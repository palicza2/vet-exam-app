
import os
import re
import json
import docx
import sys

# Ensure UTF-8 output
if sys.stdout.encoding != 'utf-8':
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

def convert_docx_to_txt(docx_path):
    try:
        document = docx.Document(docx_path)
        full_text = []
        for para in document.paragraphs:
            if para.text.strip():
                full_text.append(para.text.strip())
        return "\n".join(full_text)
    except Exception as e:
        return f"Error: {e}"

def parse_material(text):
    lines = text.split('\n')
    title = lines[0].strip()
    material = []
    current_card = None
    current_section = None
    
    # Heuristics for icons and colors
    icon_map = {
        "jellemzői": ("microscope", "bg-blue-50 border-blue-200", "text-blue-500"),
        "enterális": ("alert-triangle", "bg-orange-50 border-orange-200", "text-orange-500"),
        "hisztotoxikus": ("shield-alert", "bg-red-50 border-red-200", "text-red-500"),
        "neurotoxikus": ("brain", "bg-purple-50 border-purple-200", "text-purple-500"),
        "diagnosztika": ("search", "bg-slate-50 border-slate-200", "text-slate-500"),
        "kezelés": ("pill", "bg-emerald-50 border-emerald-200", "text-emerald-500"),
        "összefoglalás": ("book-open", "bg-indigo-50 border-indigo-200", "text-indigo-500")
    }

    for line in lines[1:]:
        line = line.strip()
        if not line: continue
        
        # Main section: e.g. "1. A Clostridium fajok jellemzői"
        if re.match(r'^\d+\.\s+[A-Z]', line):
            card_title = line
            icon, color, iconColor = ("book", "bg-gray-50 border-gray-200", "text-gray-500")
            for key, val in icon_map.items():
                if key in line.lower():
                    icon, color, iconColor = val
                    break
            
            current_card = {
                "title": card_title,
                "icon": icon,
                "color": color,
                "iconColor": iconColor,
                "sections": []
            }
            material.append(current_card)
            current_section = None
            continue
            
        # Subsection: e.g. "1.1. Alapvető tulajdonságok"
        if re.match(r'^\d+\.\d+\.\s+[A-Z]', line) or (current_card and not current_card["sections"]):
            section_header = line
            current_section = {
                "header": section_header,
                "points": []
            }
            if current_card:
                current_card["sections"].append(current_section)
            continue
            
        # Descriptive list start: e.g. "Fő toxinok:"
        if line.endswith(':'):
            current_section = {
                "header": line,
                "points": []
            }
            if current_card:
                current_card["sections"].append(current_section)
            continue
            
        # Bullet point or descriptive line
        if current_section is not None:
            # Clean bullet points
            cleaned = re.sub(r'^[-\*•]\s*', '', line)
            current_section["points"].append(cleaned)
            
    return title, material

def generate_questions(title, material):
    # This is a placeholder. In a real scenario, you'd use an LLM or manual input.
    # For this task, I'll generate some generic questions based on the content
    # or leave it for the user to refine.
    # Actually, I can use the LLM to generate them in the next step.
    return []

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python process_topic.py <docx_path>")
        sys.exit(1)
        
    docx_path = sys.argv[1]
    text = convert_docx_to_txt(docx_path)
    if text.startswith("Error"):
        print(text)
        sys.exit(1)
        
    title, material = parse_material(text)
    
    topic_id = os.path.basename(docx_path).split('.')[0].zfill(2)
    # This is just a draft, I'll manually polish it
    result = {
        "id": topic_id,
        "title": title,
        "studyMaterial": material,
        "questions": []
    }
    print(json.dumps(result, ensure_ascii=False, indent=2))

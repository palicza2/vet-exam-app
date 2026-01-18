import os
import subprocess
import json
import re
import sys

# Import logic from previous scripts
import docx

def convert_docx_to_txt(docx_path):
    try:
        document = docx.Document(docx_path)
        full_text = []
        for para in document.paragraphs:
            full_text.append(para.text)
        return "\n".join(full_text)
    except Exception as e:
        return f"Error converting {docx_path}: {e}"

# Import the parsing logic directly instead of using subprocess to avoid encoding headaches
def generate_id(text):
    text = text.lower()
    text = text.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ö", "o").replace("ő", "o").replace("ú", "u").replace("ü", "u").replace("ű", "u")
    text = re.sub(r'[^a-z0-9_]', '', text.replace(" ", "_"))
    return text[:50].strip('_')

def parse_docx_text(text_content):
    lines = text_content.split('\n')
    topic_data = {"id": "", "title": "", "studyMaterial": [], "questions": []}
    current_study_card = None
    current_section_in_card = None
    
    # 1. Determine Topic Title
    for line in lines:
        stripped = line.strip()
        if stripped and not re.match(r'^\d+\.?$', stripped):
            title = re.sub(r'^\d+\.\s*', '', stripped)
            topic_data["title"] = title
            topic_data["id"] = generate_id(title)
            break

    # 2. Parse Material
    for line in lines:
        stripped = line.strip()
        if not stripped: continue
        main_match = re.match(r'^(\d+)\.\s*(.+)', stripped)
        if main_match and '.' not in main_match.group(1):
            card_title = main_match.group(2).strip()
            current_study_card = {"title": card_title, "icon": "book", "color": "bg-blue-50 border-blue-200", "iconColor": "text-blue-500", "sections": []}
            topic_data["studyMaterial"].append(current_study_card)
            current_section_in_card = None
            continue
        sub_match = re.match(r'^(\d+\.\d+)\.\s*(.+)', stripped)
        desc_match = re.match(r'^([A-ZŐÚÖÜÓŰÉÁÍ][^:]+):\s*$', stripped)
        if current_study_card is not None:
            if sub_match:
                header = sub_match.group(2).strip()
                current_section_in_card = {"header": header, "points": []}
                current_study_card["sections"].append(current_section_in_card)
                continue
            elif desc_match:
                header = desc_match.group(1).strip()
                current_section_in_card = {"header": header, "points": []}
                current_study_card["sections"].append(current_section_in_card)
                continue
            if current_section_in_card is None:
                current_section_in_card = {"header": "Általános", "points": []}
                current_study_card["sections"].append(current_section_in_card)
            point = stripped.lstrip('-–*• ').strip()
            if point:
                point = re.sub(r'^(Gram-pozitív|Gram-negatív|Tünetek|Kezelés|Megelőzés|Oka|Toxin|Patogenezis)', r'**\1**', point, flags=re.IGNORECASE)
                current_section_in_card["points"].append(point)

    # 3. Questions
    q_count = 0
    for card in topic_data["studyMaterial"]:
        for section in card["sections"]:
            for point in section["points"]:
                if 20 < len(point) < 150 and '?' not in point and q_count < 20:
                    topic_data["questions"].append({
                        "id": f"{topic_data['id']}_{q_count}",
                        "topic": topic_data["title"],
                        "type": "mcq",
                        "question": f"Igaz-e az alábbi állítás: '{point}'?",
                        "options": ["Igaz", "Hamis"],
                        "correctAnswer": 0,
                        "explanation": "A tananyag alapján ez az állítás helyes."
                    })
                    q_count += 1
    return topic_data

def process_all(batch_start, batch_end):
    base_dir = "C:/Users/alex_/Documents/vet-exam-app/learning_content"
    output_dir = "src/data/topics"
    
    for i in range(batch_start, batch_end + 1):
        filename = f"{i}.docx"
        path = os.path.join(base_dir, filename)
        if not os.path.exists(path):
            print(f"File {path} not found, skipping.")
            continue
        
        print(f"Processing {filename}...")
        text = convert_docx_to_txt(path)
        data = parse_docx_text(text)
        
        # Determine variable name and filename
        var_name = f"topic{i}Data"
        file_out = f"{i:02d}_{data['id']}.js"
        
        js_content = f"export const {data['id'].replace('_', '')}Data = {json.dumps(data, indent=2, ensure_ascii=False)};"
        
        with open(os.path.join(output_dir, file_out), "w", encoding="utf-8") as f:
            f.write(js_content)
        print(f"Saved to {file_out}")

if __name__ == "__main__":
    start = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    end = int(sys.argv[2]) if len(sys.argv) > 2 else 5
    process_all(start, end)

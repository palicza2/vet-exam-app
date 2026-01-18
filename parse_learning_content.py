import re
import json
import sys
import os
import docx

# Configure stdout for UTF-8
if sys.stdout.encoding != 'UTF-8':
    try:
        import codecs
        sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')
        sys.stderr = codecs.getwriter('utf-8')(sys.stderr.buffer, 'strict')
    except Exception:
        pass

def generate_id(text):
    text = text.lower()
    replacements = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ö': 'o', 'ő': 'o',
        'ú': 'u', 'ü': 'u', 'ű': 'u', ' ': '_', '.': '', ',': '',
        '(': '', ')': '', '-': '_', '/': '_',
        'tétel': '', # Remove "tétel" from ID generation
        '–': '_' # Replace en-dash with underscore
    }
    for k, v in replacements.items():
        text = text.replace(k, v)
    text = re.sub(r'[^a-z0-9_]', '', text)
    return text[:50].strip('_')

def convert_docx_to_text(docx_path):
    try:
        document = docx.Document(docx_path)
        full_text = []
        for para in document.paragraphs:
            full_text.append(para.text)
        return "\n".join(full_text)
    except Exception as e:
        return f"Error converting {docx_path}: {e}"

def parse_text_to_data(text, topic_id_prefix="topic"):
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    
    topic_data = {
        "id": "",
        "title": "",
        "studyMaterial": [],
        "questions": []
    }

    if not lines:
        return topic_data

    # Set the overall topic title from the first non-empty line
    final_topic_title = lines[0].strip().replace(".docx", "").strip()
    topic_data["title"] = final_topic_title
    topic_data["id"] = generate_id(final_topic_title)

    current_card = None  # Represents a StudyCard in studyMaterial
    current_section = None  # Represents a section within a StudyCard
    all_points_for_questions = []

    # Regex patterns (defined once outside the loop)
    main_card_re = re.compile(r'^\s*(\d+\.\s*)(.+)$' ) # e.g., "1. A Clostridium fajok jellemzői"
    subsection_re = re.compile(r'^\s*(\d+\.\d+)\.?\s*(.+)$' ) # e.g., "1.1. Alapvető tulajdonságok"
    descriptive_header_re = re.compile(r'^\s*([A-ZŐÚÖÜÓŰÉÁÍ][^:]+):\s*$' ) # e.g., "Fő toxinok:"
    # Revised unnumbered card regex to be more strict:
    # - Starts with uppercase (or accented Hungarian uppercase)
    # - Contains at least two words
    # - Does NOT end with a period or colon (to avoid matching sentences or descriptive headers)
    # - Does NOT contain a comma (to avoid matching list items or multiple concepts on one line)
    unnumbered_card_re = re.compile(r'^\s*(?!(\d+\.\d+|\d+\.)\s*)([A-ZŐÚÖÜÓŰÉÁÍ][a-záéíóöőúüű]*(?:\s+[A-ZŐÚÖÜÓŰÉÁÍa-záéíóöőúüű]+){1,})(?<![,.:])(?!\.)$' )


    # Start processing from the second line, as the first line is assumed to be the overall title
    for line_idx, line in enumerate(lines[1:]):
        stripped_line = line.strip()
        if not stripped_line:
            continue

        # Check for new main study card (numbered)
        main_card_match = main_card_re.match(stripped_line)
        if main_card_match:
            card_title = main_card_match.group(0).strip() # Include the number in card title
            current_card = {
                "title": card_title,
                "icon": "book", 
                "color": "bg-indigo-50 border-indigo-200",
                "iconColor": "text-indigo-500",
                "sections": []
            }
            topic_data["studyMaterial"].append(current_card)
            current_section = None # Reset current section for new card
            continue

        # Check for unnumbered main study card
        # Ensure it's not a subsection or descriptive header
        unnumbered_card_match = unnumbered_card_re.match(stripped_line)
        if unnumbered_card_match and not subsection_re.match(stripped_line) and not descriptive_header_re.match(stripped_line):
            # Check if the matched unnumbered card title actually contains a comma
            if ',' in stripped_line:
                # If it contains a comma, it's likely a list of points, not a card title.
                # So, we skip this and let it be processed as a regular point later.
                pass
            else:
                # Ensure group 2 is accessed for unnumbered_card_match
                card_title = unnumbered_card_match.group(1).strip() if unnumbered_card_match.group(1) else ""
                if card_title: # Only create a card if the title is not empty
                    current_card = {
                        "title": card_title,
                        "icon": "book", 
                        "color": "bg-indigo-50 border-indigo-200",
                        "iconColor": "text-indigo-500",
                        "sections": []
                    }
                    topic_data["studyMaterial"].append(current_card)
                    current_section = None
                    continue
        
        # Check for subsection header
        subsection_match = subsection_re.match(stripped_line)
        if subsection_match:
            if current_card:
                section_header = subsection_match.group(2).strip()
                current_section = {"header": section_header, "points": []}
                current_card["sections"].append(current_section)
            continue

        # Check for descriptive header (e.g., "Fő toxinok:")
        descriptive_header_match = descriptive_header_re.match(stripped_line)
        if descriptive_header_match:
            if current_card:
                section_header = descriptive_header_match.group(1).strip()
                current_section = {"header": section_header, "points": []}
                current_card["sections"].append(current_section)
            continue

        # If we have a current card and no specific section is active, create a default one
        if current_card and not current_section:
            # Only create an "Általános" section if the line doesn't look like a new card title or other header
            if not (main_card_re.match(stripped_line) or subsection_re.match(stripped_line) or descriptive_header_re.match(stripped_line) or unnumbered_card_re.match(stripped_line)):
                current_section = {"header": "Általános", "points": []}
                current_card["sections"].append(current_section)
            
        # Add line as a point if it's not a recognized header itself and a current_section is active
        if current_section:
            point = stripped_line.lstrip('-•*abcd)').strip()
            # Apply typo corrections to the point before storing it
            point = point.replace("élhám", "bélhám")
            point = point.replace("élfodri", "bélfodri")
            point = point.replace("élnyálkahártya", "bélnyálkahártya")

            # Only add as a point if it's not a header itself and not empty
            if point and not (main_card_re.match(point) or subsection_re.match(point) or descriptive_header_re.match(point) or unnumbered_card_re.match(point)):
                current_section["points"].append(point)
                all_points_for_questions.append(point)

    # --- Question Generation (Simplified Heuristics) ---
    generated_questions = []
    q_count = 0
    for p in all_points_for_questions:
        if q_count >= 20: break # Limit questions per topic for now

        # Rule 1: Boolean questions for statements with keywords indicating truth/falsehood
        lower_p = p.lower()
        if any(keyword in lower_p for keyword in ["nem", "csak", "mindig", "ritka", "fontos", "jellemző", "nem is", "nem csak", "nem mindig", "nem ritka", "nem fontos", "nem jellemző"]):
            # Always assume the extracted point is a true statement for the purpose of the question
            question_text = f"Igaz-e az állítás: {p}"
            correct_answer = 0 # Always set to Igaz (True) as the point is valid learning content.
            
            generated_questions.append({
                "id": f"{topic_id_prefix}_{q_count + 1}",
                "topic": topic_data["id"], 
                "type": "bool",
                "question": question_text,
                "options": ["Igaz", "Hamis"],
                "correctAnswer": correct_answer,
                "explanation": p
            })
            q_count += 1
            continue

        # Rule 2: Multiple Choice for cause-effect (A -> B)
        if "->" in p and len(p.split("->")) > 1:
            parts = [part.strip() for part in p.split("->")]
            cause = parts[0]
            effect = parts[1]
            if cause and effect:
                question_text = f"Mi az eredménye/következménye a következőnek: {cause}?"
                
                options = [effect, "Nincs hatása", "Fordított hatás", "Egyéb, nem kapcsolódó esemény"]
                
                generated_questions.append({
                    "id": f"{topic_id_prefix}_{q_count + 1}",
                    "topic": topic_data["id"],
                    "type": "mcq",
                    "question": question_text,
                    "options": options,
                    "correctAnswer": 0,
                    "explanation": p
                })
                q_count += 1
                continue

    topic_data["questions"] = generated_questions

    # Remove study materials that ended up with no sections after processing
    topic_data["studyMaterial"] = [card for card in topic_data["studyMaterial"] if card["sections"]]

    return topic_data

def write_to_js(data, output_path):
    var_name = generate_id(data["title"])
    if var_name[0].isdigit(): var_name = "t" + var_name
    var_name += "Data" 
    
    content = f"export const {var_name} = " + json.dumps(data, indent=2, ensure_ascii=False) + ";"
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python parse_learning_content.py <input_docx_path> <output_js_path>")
        sys.exit(1)
    
    input_docx_path = sys.argv[1]
    output_js_path = sys.argv[2]
    
    try:
        text_content = convert_docx_to_text(input_docx_path)
        if "Error" in text_content and "Error converting" in text_content:
            print(text_content) 
            sys.exit(1)

        filename_base = os.path.splitext(os.path.basename(input_docx_path))[0]
        
        parsed_data = parse_text_to_data(text_content, f"q_{filename_base}")
        write_to_js(parsed_data, output_js_path)
        print(f"Successfully processed {input_docx_path} -> {output_js_path}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        sys.exit(1)
import subprocess
import os
import sys

# Configure stdout for UTF-8
if sys.stdout.encoding != 'UTF-8':
    try:
        import codecs
        sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')
        sys.stderr = codecs.getwriter('utf-8')(sys.stderr.buffer, 'strict')
    except Exception:
        pass

# List of docx files to process
docx_files = [
    "1.docx", "2.docx", "3.docx", "4.docx", "5.docx", "6.docx", "7.docx",
    "8.docx", "9.docx", "10.docx", "11.docx", "12.docx", "13.docx", "14.docx", "15.docx",
    "16.docx", "17.docx", "18.docx", "19.docx", "20.docx", "21.docx", "22.docx", "23.docx",
    "24.docx", "25.docx", "26.docx", "27.docx", "28.docx", "29.docx", "30.docx"
]

learning_content_dir = "C:/Users/alex_/Documents/vet-exam-app/learning_content"
output_topics_dir = "src/data/topics"

def regenerate_topics():
    print("Starting regeneration of topic data files...")
    for docx_file in docx_files:
        input_docx_path = os.path.join(learning_content_dir, docx_file)
        
        # Determine the output JS file name
        base_name = os.path.splitext(docx_file)[0]
        output_js_name = f"{base_name.zfill(2)}_new.js" # Ensure two-digit formatting
        
        output_js_path = os.path.join(output_topics_dir, output_js_name)
        
        print(f"Processing {docx_file} -> {output_js_path}...")
        
        try:
            command = [
                sys.executable,  # Use the current Python executable
                "parse_learning_content.py",
                input_docx_path,
                output_js_path
            ]
            
            result = subprocess.run(command, capture_output=True, text=True, check=True, encoding='utf-8')
            print(f"Successfully processed {docx_file}.")
            if result.stdout:
                print(f"  Stdout: {result.stdout.strip()}")
            if result.stderr:
                print(f"  Stderr: {result.stderr.strip()}")

        except subprocess.CalledProcessError as e:
            print(f"Error processing {docx_file}:")
            print(f"  Command: {' '.join(e.cmd)}")
            print(f"  Exit Code: {e.returncode}")
            print(f"  Stdout: {e.stdout.strip()}")
            print(f"  Stderr: {e.stderr.strip()}")
            sys.exit(1) # Exit if any file fails

    print("All topic data files regenerated successfully.")

if __name__ == "__main__":
    regenerate_topics()

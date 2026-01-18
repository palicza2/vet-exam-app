
import docx
import sys
import os

def convert_docx_to_txt(docx_path, output_path):
    if not os.path.exists(docx_path):
        return f"Error: File not found at {docx_path}"
    
    try:
        document = docx.Document(docx_path)
        full_text = []
        for para in document.paragraphs:
            full_text.append(para.text)
        text = "\n".join(full_text)
        
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        return f"Successfully converted {docx_path} to {output_path}"
    except Exception as e:
        return f"Error converting {docx_path}: {e}"

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python convert_docx_to_txt.py <path_to_docx_file> <path_to_output_txt>")
        sys.exit(1)
    
    docx_file_path = sys.argv[1]
    output_txt_path = sys.argv[2]
    
    try:
        import docx
    except ImportError:
        print("Error: 'python-docx' library not found.")
        print("Please install it using: pip install python-docx")
        sys.exit(1)
        
    print(convert_docx_to_txt(docx_file_path, output_txt_path))

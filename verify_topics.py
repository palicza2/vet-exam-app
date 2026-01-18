import os
import sys

# Ensure stdout is configured for UTF-8
if sys.stdout.encoding != 'utf-8':
    try:
        import codecs
        sys.stdout = codecs.getwriter('utf-8')(sys.stdout.buffer, 'strict')
        sys.stderr = codecs.getwriter('utf-8')(sys.stderr.buffer, 'strict')
    except Exception:
        pass

OUTPUT_TOPICS_DIR = "src/data/topics"

def verify_topic_files():
    print("Starting verification of topic data files...")
    
    # List all _new.js files in the directory
    js_files = [f for f in os.listdir(OUTPUT_TOPICS_DIR) if f.endswith('_new.js')]
    js_files.sort() # Process in a consistent order

    if not js_files:
        print(f"No '_new.js' files found in {OUTPUT_TOPICS_DIR}.")
        return

    for js_file in js_files:
        file_path = os.path.join(OUTPUT_TOPICS_DIR, js_file)
        
        print(f"\n--- Verifying {js_file} ---")
        try:
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
                print(content)
            print(f"--- End of {js_file} verification ---")
        except FileNotFoundError:
            print(f"Error: File not found at {file_path}")
        except Exception as e:
            print(f"An unexpected error occurred while reading {file_path}: {e}")

    print("\nVerification process completed.")

if __name__ == "__main__":
    verify_topic_files()

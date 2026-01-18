import os
import re

def generate_index_js():
    topics_dir = "src/data/topics"
    files = sorted([f for f in os.listdir(topics_dir) if f.endswith(".js") and f[0].isdigit()])
    
    imports = []
    topic_list = []
    
    for f in files:
        path = os.path.join(topics_dir, f)
        with open(path, "r", encoding="utf-8") as file:
            content = file.read()
            # Find the export const name
            match = re.search(r'export const (\w+) =', content)
            if match:
                var_name = match.group(1)
                imports.append(f"import {{ {var_name} }} from './topics/{f}';")
                topic_list.append(var_name)
    
    index_content = f"""// src/data/index.js

// 1. IMPORTÁLÁS: Itt húzzuk be az egyes témakörök fájljait
{chr(10).join(imports)}

// A latin szavakat csak metadataként definiáljuk itt a kezdeti bundle méret csökkentése érdekében
const latinTermsMetadata = {{
  id: 'latin-terms',
  title: 'Latin szakkifejezések',
  icon: 'Book',
  color: 'text-amber-600',
  description: 'Állatorvosi latin kifejezések és magyar megfelelőik',
  isLazy: true
}};

// 2. LISTA: Ez a tömb határozza meg, mi jelenik meg az alkalmazásban
export const ALL_TOPICS = [
  {f",{chr(10)}  ".join(topic_list)},
  latinTermsMetadata,
];

// --- Segédfüggvények ---

/**
 * Aszinkron módon betölti egy témakör kérdéseit.
 * Ez segít távol tartani a hatalmas adatfájlokat a kezdeti betöltéstől.
 */
export const GET_TOPIC_QUESTIONS_ASYNC = async (topicId) => {{
  const topic = ALL_TOPICS.find(t => t.id === topicId);
  if (!topic) return [];

  if (topic.id === 'latin-terms') {{
    // Dinamikus import: csak akkor töltődik le a fájl, ha ide belépünk
    const {{ getLatinTermsData }} = await import('./topics/latin_terms.js');
    const latinTermsData = getLatinTermsData();
    return latinTermsData.questions;
  }}

  return topic.questions || [];
}};

/**
 * Összegyűjti az összes kérdést (aszinkron módon)
 * Megjegyzés: A vizsga módhoz érdemes lehet korlátozni a latin szavak számát, 
 * mert több ezer van belőlük.
 */
export const GET_ALL_QUESTIONS_ASYNC = async () => {{
  const allResults = await Promise.all(
    ALL_TOPICS.map(topic => GET_TOPIC_QUESTIONS_ASYNC(topic.id))
  );
  return allResults.flat();
}};

// Visszafelé kompatibilitás (szinkron verzió, ami nem tartalmazza a lazy témákat)
export const GET_ALL_QUESTIONS = () => {{
  return ALL_TOPICS
    .filter(t => !t.isLazy)
    .reduce((acc, topic) => [...acc, ...(topic.questions || [])], []);
}};
"""
    with open("src/data/index.js", "w", encoding="utf-8") as f:
        f.write(index_content)
    print("src/data/index.js updated.")

if __name__ == "__main__":
    generate_index_js()

// src/data/index.js

// 1. IMPORTÁLÁS: Itt húzzuk be az egyes témakörök fájljait
import { clostridiumData } from './topics/01_clostridium.jsx';
import { sertesorbancData } from './topics/02_sertesorbanc.jsx'; // <--- EZT ADTUK HOZZÁ

// 2. LISTA: Ez a tömb határozza meg, mi jelenik meg az alkalmazásban
export const ALL_TOPICS = [
  clostridiumData,
  sertesorbancData, // <--- EZT ADTUK HOZZÁ (Így már 2 téma lesz)
];

// --- Segédfüggvények (Ezekhez NEM kell nyúlni, automatikusan működnek) ---

// Összegyűjti az összes kérdést egy nagy közös kalapba a Vizsga módhoz
export const GET_ALL_QUESTIONS = () => {
  return ALL_TOPICS.reduce((acc, topic) => {
    // Biztonsági ellenőrzés: ha véletlenül nincs kérdés, üres tömböt ad
    const questions = topic.questions || [];
    return [...acc, ...questions];
  }, []);
};

// Visszaadja egy adott téma kérdéseit a Gyakorló módhoz
export const GET_TOPIC_QUESTIONS = (topicId) => {
  const topic = ALL_TOPICS.find(t => t.id === topicId);
  return topic ? topic.questions : [];
};
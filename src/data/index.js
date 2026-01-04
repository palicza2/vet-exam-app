// src/data/index.js

// 1. IMPORTÁLÁS: Itt húzzuk be az egyes témakörök fájljait
import { clostridiumData } from './topics/01_clostridium.js';
import { sertesorbancData } from './topics/02_sertesorbanc.js';
import { streptococcus_suis as streptococcusSuisData } from './topics/03_streptococcus_suis.js';
import { staphylococcusData } from './topics/04_staphylococcus.js';
import { ecoliData } from './topics/05_ecoli.js';
import { antimicrobialMechanismsData } from './topics/16_antimicrobial_mechanisms.js';
import { amrOneHealthData } from './topics/17_amr_one_health.js';
import { amrMechanismsData } from './topics/18_amr_mechanisms.js';
import { mobileElementsData } from './topics/19_mobile_elements.js';
import { wgsData } from './topics/20_wgs.js';

// 2. LISTA: Ez a tömb határozza meg, mi jelenik meg az alkalmazásban
export const ALL_TOPICS = [
  clostridiumData,
  sertesorbancData,
  streptococcusSuisData,
  staphylococcusData,
  ecoliData,
  antimicrobialMechanismsData,
  amrOneHealthData,
  amrMechanismsData,
  mobileElementsData,
  wgsData,
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

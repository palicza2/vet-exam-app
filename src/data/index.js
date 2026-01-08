// src/data/index.js

// 1. IMPORTÁLÁS: Itt húzzuk be az egyes témakörök fájljait
import { clostridiumData } from './topics/01_clostridium.js';
import { sertesorbancData } from './topics/02_sertesorbanc.js';
import { streptococcus_suis as streptococcusSuisData } from './topics/03_streptococcus_suis.js';
import { staphylococcusData } from './topics/04_staphylococcus.js';
import { ecoliData } from './topics/05_ecoli.js';
import { mycoplasmaData } from './topics/14_mycoplasma.js';
import { glasserData } from './topics/15_glasser.js';
import { antimicrobialMechanismsData } from './topics/16_antimicrobial_mechanisms.js';
import { amrOneHealthData } from './topics/17_amr_one_health.js';
import { amrMechanismsData } from './topics/18_amr_mechanisms.js';
import { mobileElementsData } from './topics/19_mobile_elements.js';
import { wgsData } from './topics/20_wgs.js';

// A latin szavakat csak metadataként definiáljuk itt a kezdeti bundle méret csökkentése érdekében
const latinTermsMetadata = {
  id: 'latin-terms',
  title: 'Latin szakkifejezések',
  icon: 'Book',
  color: 'text-amber-600',
  description: 'Állatorvosi latin kifejezések és magyar megfelelőik',
  isLazy: true
};

// 2. LISTA: Ez a tömb határozza meg, mi jelenik meg az alkalmazásban
export const ALL_TOPICS = [
  clostridiumData,
  sertesorbancData,
  streptococcusSuisData,
  staphylococcusData,
  ecoliData,
  mycoplasmaData,
  glasserData,
  antimicrobialMechanismsData,
  amrOneHealthData,
  amrMechanismsData,
  mobileElementsData,
  wgsData,
  latinTermsMetadata,
];

// --- Segédfüggvények ---

/**
 * Aszinkron módon betölti egy témakör kérdéseit.
 * Ez segít távol tartani a hatalmas adatfájlokat a kezdeti betöltéstől.
 */
export const GET_TOPIC_QUESTIONS_ASYNC = async (topicId) => {
  const topic = ALL_TOPICS.find(t => t.id === topicId);
  if (!topic) return [];

  if (topic.id === 'latin-terms') {
    // Dinamikus import: csak akkor töltődik le a fájl, ha ide belépünk
    const { latinTermsData } = await import('./topics/latin_terms.js');
    return latinTermsData.questions;
  }

  return topic.questions || [];
};

/**
 * Összegyűjti az összes kérdést (aszinkron módon)
 * Megjegyzés: A vizsga módhoz érdemes lehet korlátozni a latin szavak számát, 
 * mert több ezer van belőlük.
 */
export const GET_ALL_QUESTIONS_ASYNC = async () => {
  const allResults = await Promise.all(
    ALL_TOPICS.map(topic => GET_TOPIC_QUESTIONS_ASYNC(topic.id))
  );
  return allResults.flat();
};

// Visszafelé kompatibilitás (szinkron verzió, ami nem tartalmazza a lazy témákat)
export const GET_ALL_QUESTIONS = () => {
  return ALL_TOPICS
    .filter(t => !t.isLazy)
    .reduce((acc, topic) => [...acc, ...(topic.questions || [])], []);
};

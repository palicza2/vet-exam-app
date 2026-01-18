// src/data/index.js

// 1. IMPORTÁLÁS: Itt húzzuk be az egyes témakörök fájljait
import { clostridiumok_okozta_megbetegedesek_sertesbenData as clostridiumData } from './topics/01_new.js';
import { t2_sertesorbanc_erysipelothrix_rhusiopathiaeData as sertesorbancData } from './topics/02_new.js';
import { t3_tetel___streptococcus_suis_okozta_megbetegedesekData as streptococcusSuisData } from './topics/03_new.js';
import { t4_tetel___staphylococcusok_okozta_megbetegedesek_sData as staphylococcusData } from './topics/04_new.js';
import { t5_tetel___escherichia_coli_enterotoxint_termelo_esData as ecoliData } from './topics/05_new.js';
import { t6_tetel___escherichia_coli_shiga_toxint_termelo_esData as ecoliOdemaExpecData } from './topics/06_new.js';
import { t7_sertes_szalmonellozisaData as salmonellaData } from './topics/07_new.js';
import { t8_tetelleptospirosisData as leptospirosisData } from './topics/08_new.js';
import { t9_tetelproliferativenteropatiaileitisData as lawsoniaData } from './topics/09_new.js';
import { t10_tetel___brachyspirak_okozta_megbetegedesekData as brachyspiraData } from './topics/10_new.js';
import { t11_tetel_a_sertesekpasteurellamultocidaesbordetellData as rhinitisPasteurellaData } from './topics/11_new.js';
import { t12_tetel_a_sertesekactinobacilluspleuropneumoniaeoData as appData } from './topics/12_new.js';
import { t13_tetel___a_sertesek_mycoplasma_hyopneumoniae_okoData as mhyoData } from './topics/13_new.js';
import { t14_tetel_a_sertesekmycoplasmahyorhinises_mhyosynovData as mycoplasmaData } from './topics/14_new.js';
import { t15_tetel_a_sertesekglaesserellaparasuisokozta_megbData as glasserData } from './topics/15_new.js';
import { t16_antimikrobialis_szerek_hatasmechanizmusai_haszoData as antimicrobialMechanismsData } from './topics/16_new.js';
import { t17_antimikrobialis_rezisztencia_es_one_healthData as amrOneHealthData } from './topics/17_new.js';
import { t18_tetel___az_antimikrobialis_rezisztencia_kialakuData as amrMechanismsData } from './topics/18_new.js';
import { t19_tetel___mobil_genetikai_elemek_szerepe_a_reziszData as mobileElementsData } from './topics/19_new.js';
import { t20_a_kornyezet_mint_rezisztenciagen_rezervoarData as wgsData } from './topics/20_new.js';
import { t21_antimikrobialis_rezisztenciagenek_arg_k_metagenData as argKMetagenomiData } from './topics/21_new.js';
import { t22_nukleinsav_izolalasi_modszerek_kornyezeti_mintaData as nukleinsavIzolalasiData } from './topics/22_new.js';
import { t23_ujgeneracios_szekvenalasi_technologiak_attekintData as ujgeneraciosSzekvenalasiData } from './topics/23_new.js';
import { t24_a_16s_rrns_szekvenalas_es_shotgun_metagenomikaData as rRNASzekvenalasData } from './topics/24_new.js';
import { t25_bioinformatikai_alapok_a_metagenomikai_adatok_fData as bioinformatikaiAlapokData } from './topics/25_new.js';
import { t26_arg_k_azonositasat_szolgalo_adatbazisok_es_eszkData as argKAzonositasatData } from './topics/26_new.js';
import { t27_horizontalis_gentranszfer_vizsgalata_metagenomiData as horizontalisGentranszferData } from './topics/27_new.js';
import { t28_tetel_a_rezisztencia_genokoszisztemak_kornyezetData as rezisztenciaGenokoszisztemakData } from './topics/28_new.js';
import { t29_antimikrobialis_rezisztenciagenek_monitorozasaData as monitorozasaData } from './topics/29_new.js';
import { t30_etel_uj_iranyok_es_kihivasok_az_antimikrobialisData as ujIranyokKihivasokData } from './topics/30_new.js';

// Latin terms are lazy-loaded, so only import the getter
import { getLatinTermsData } from './topics/latin_terms.js';

// 2. LISTA: Ez a tömb határozza meg, mi jelenik meg az alkalmazásban
export const ALL_TOPICS = [
  clostridiumData,
  sertesorbancData,
  streptococcusSuisData,
  staphylococcusData,
  ecoliData,
  ecoliOdemaExpecData,
  salmonellaData,
  leptospirosisData,
  lawsoniaData,
  brachyspiraData,
  rhinitisPasteurellaData,
  appData,
  mhyoData,
  mycoplasmaData,
  glasserData,
  antimicrobialMechanismsData,
  amrOneHealthData,
  amrMechanismsData,
  mobileElementsData,
  wgsData,
  argKMetagenomiData,
  nukleinsavIzolalasiData,
  ujgeneraciosSzekvenalasiData,
  rRNASzekvenalasData,
  bioinformatikaiAlapokData,
  argKAzonositasatData,
  horizontalisGentranszferData,
  rezisztenciaGenokoszisztemakData,
  monitorozasaData,
  ujIranyokKihivasokData,
  // Latin terms are still lazy-loaded, but we need to call the getter function to get its data
  getLatinTermsData(),
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
    const { getLatinTermsData } = await import('./topics/latin_terms.js');
    const latinTermsData = getLatinTermsData();
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
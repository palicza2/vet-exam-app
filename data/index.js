// src/data/index.js
import { clostridiumData } from './topics/01_clostridium';
// Később: import { masikTetelData } from './topics/02_masik_tetel';

// 1. Összes study anyag egy tömbben (ha listázni akarod a témákat)
export const ALL_TOPICS = [
  clostridiumData,
  // masikTetelData
];

// 2. Helper: Az összes kérdés egyetlen nagy tömbben (a Vizsga módhoz)
export const GET_ALL_QUESTIONS = () => {
  return ALL_TOPICS.reduce((acc, topic) => {
    return [...acc, ...topic.questions];
  }, []);
};

// 3. Helper: Csak egy adott téma kérdései (ha témánként akarsz gyakorolni)
export const GET_TOPIC_QUESTIONS = (topicId) => {
  const topic = ALL_TOPICS.find(t => t.id === topicId);
  return topic ? topic.questions : [];
};
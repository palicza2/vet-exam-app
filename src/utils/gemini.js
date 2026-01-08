import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
// if (API_KEY && API_KEY !== 'your_gemini_api_key_here') {
//   genAI = new GoogleGenerativeAI(API_KEY);
// }

export const getGeminiModel = (modelName = "gemini-1.5-flash") => {
  if (!genAI) {
    console.warn("Gemini API key not found. Please set VITE_GEMINI_API_KEY in your .env file.");
    return null;
  }
  return genAI.getGenerativeModel({ model: modelName });
};

export const generateExplanation = async (topic, question, selectedAnswer, correctAnswer) => {
  const model = getGeminiModel();
  if (!model) return null;

  const prompt = `
    Context: Veterinary Exam Preparation.
    Topic: ${topic}
    Question: ${question}
    User Selected Answer: ${selectedAnswer}
    Correct Answer: ${correctAnswer}

    Provide a clear, educational explanation in Hungarian about why the correct answer is right and why the selected answer might be wrong (if applicable). Keep it concise and professional.
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating explanation with Gemini:", error);
    return null;
  }
};

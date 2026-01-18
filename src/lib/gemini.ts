// Gemini API integration utilities
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.GEMINI_API_KEY || '';

if (!apiKey) {
  console.warn('GEMINI_API_KEY not set. AI features will not work.');
}

const genAI = new GoogleGenerativeAI(apiKey);

/**
 * Call Gemini API for text generation
 * @param promptText - The prompt to send to Gemini
 * @param isJson - Whether to request JSON response format
 * @returns Generated text response
 */
export async function callGemini(
  promptText: string,
  isJson: boolean = false
): Promise<string | null> {
  if (!apiKey) {
    throw new Error('Gemini API key not configured');
  }

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: isJson ? { responseMimeType: 'application/json' } : undefined
    });

    const result = await model.generateContent(promptText);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API error:', error);
    return null;
  }
}

/**
 * Note: For Text-to-Speech (TTS), we usage the browser's native Window.speechSynthesis
 * API in the React components. This is free, unlimited, and requires no API key.
 *
 * The previous server-side TTS implementation using gemini-2.0-flash-exp (Audio Element)
 * has been removed in favor of the stable 1.5-flash model + native browser speech.
 */

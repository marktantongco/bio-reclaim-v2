// Gemini API integration utilities
import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';

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
 * Call Gemini Flash 1.5 model with optional generation config.
 * @param promptText - Prompt to send.
 * @param options - Optional config: temperature, maxOutputTokens, isJson.
 * @returns Generated text response.
 */
export async function callGeminiFlash(
  promptText: string,
  options?: {
    temperature?: number;
    maxOutputTokens?: number;
    isJson?: boolean;
  }
): Promise<string | null> {
  if (!apiKey) {
    throw new Error('Gemini API key not configured');
  }

  try {
    const { temperature, maxOutputTokens, isJson } = options || {};
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      generationConfig: {
        temperature,
        maxOutputTokens,
        ...(isJson ? { responseMimeType: 'application/json' } : {})
      }
    });

    const result = await model.generateContent(promptText);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.warn('Primary Gemini SDK call failed, falling back to fetch:', error);
    // Fallback to direct REST call
    return callGeminiFlashClient(promptText, options);
  }
}

/**
 * Fallback client-side fetch implementation for Gemini Flash.
 */
async function callGeminiFlashClient(
  promptText: string,
  options?: {
    temperature?: number;
    maxOutputTokens?: number;
    isJson?: boolean;
  }
): Promise<string | null> {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const body = {
    contents: [{ role: 'user', parts: [{ text: promptText }] }],
    generationConfig: {
      temperature: options?.temperature ?? 0.7,
      maxOutputTokens: options?.maxOutputTokens ?? 1024,
      ...(options?.isJson ? { responseMimeType: 'application/json' } : {})
    }
  };
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      console.error('Gemini fetch error:', res.status, await res.text());
      return null;
    }
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
    return text;
  } catch (e) {
    console.error('Gemini fetch exception:', e);
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

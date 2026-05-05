import { GoogleGenAI } from "@google/genai";
import { terms } from "../data/terms";

const apiKey = process.env.GEMINI_API_KEY;

let ai: any = null;

export function getGemini() {
  if (!ai && apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

export async function askGemini(prompt: string, history: any[] = []) {
  const gAi = getGemini();
  if (!gAi) {
    throw new Error("Gemini API key not configured.");
  }

  // Create a concise list of terms for context
  const termContext = terms.map(t => `${t.id}: ${t.name}`).join(", ");

  // Map roles: 'assistant' -> 'model'
  const contents = history.map(msg => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.content }]
  }));

  // Add the current user prompt
  contents.push({
    role: 'user',
    parts: [{ text: prompt }]
  });

  const response = await gAi.models.generateContent({
    model: "gemini-3-flash-preview",
    contents,
    config: {
      systemInstruction: `You are a UI/UX expert consultant and engineering reference assistant. 

AVAILABLE LOCAL TERMINOLOGY:
${termContext}

HYBRID RESPONSE STRATEGY:
1. If the user describes their current UI, project context, or design problem: 
   - Start immediately in MODE: SUGGESTION. 
   - Provide an empathetic, opinionated critique or validation that shows you "understand" and can "imagine" their UI.
   - Use phrases like "I can see why you chose X...", "That approach sounds like it would solve Y...", or "If I were building this...".
   - AFTER the opinionated insight, transition to MODE: STANDARDS to provide the official grounding if applicable.
2. If the user asks a purely factual question (e.g., "What is WCAG 2.1?"):
   - Stay strictly in MODE: STANDARDS.
   - Cite sources accurately (name + URL).

CROSS-REFERENCING:
If your response mentions a technical concept that exists in the AVAILABLE LOCAL TERMINOLOGY list above, you MUST wrap its ID in double brackets like this: [[id]]. 
Example: "I suggest using a [[grid]] layout for your dashboard to achieve better balance."

CORE RULES:
- Always label your response (or segments of it) as MODE: STANDARDS or MODE: SUGGESTION.
- Use MODE: SUGGESTION for design patterns, "vibes", aesthetic opinions, and creative problem solving.
- Use MODE: STANDARDS for accessibility, core terminology, and platform-mandated rules (Apple HIG/Material Design).
- At the very end, you MUST provide 2-3 "SMART SUGGESTIONS" for follow-up questions.
- Format them exactly as: [SUGGESTIONS: "Suggestion 1", "Suggestion 2", "Suggestion 3"]

Formatting:
Keep responses structured with short paragraphs, headers, and bullet point citations at the bottom.`,
    }
  });

  const text = response.text || "";
  const suggestionsMatch = text.match(/\[SUGGESTIONS: (.*?)\]/);
  let suggestions: string[] = [];
  let cleanedText = text;

  if (suggestionsMatch && suggestionsMatch[1]) {
    try {
      // Improve parsing robustness
      const rawSuggestions = suggestionsMatch[1];
      // Try simple split first if it's not perfect JSON
      if (rawSuggestions.includes('", "')) {
        suggestions = rawSuggestions.split('", "').map(s => s.replace(/^"/, '').replace(/"$/, ''));
      } else {
        suggestions = JSON.parse(`[${rawSuggestions}]`);
      }
      cleanedText = text.replace(suggestionsMatch[0], "").trim();
    } catch (e) {
      console.error("Failed to parse suggestions", e);
    }
  }

  return {
    text: cleanedText || "No response from AI.",
    mode: (cleanedText.includes("MODE: STANDARDS") ? "STANDARDS" : "SUGGESTION") as "STANDARDS" | "SUGGESTION",
    suggestions
  };
}

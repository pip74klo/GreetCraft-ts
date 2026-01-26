import type { GreetingData } from "../../slices/greetingDataSlice";
import { getPoetryRules } from "./getPoetryRules";

const getNormalGreetingPrompt = (greetingData: GreetingData) => {
  const { holiday, settings, name, age, interests } = greetingData;
  const { tone, language } = settings;

  return `
You are a professional greeting card writer.

IMPORTANT RULES:
- Write ONLY in ${language}.
- Output ONLY the greeting text.
- No explanations or titles.

Greeting details:
- Occasion: ${holiday}
- Name: ${name || "not specified"}
- Age: ${age || "not specified"}
- Interests: ${interests || "not specified"}
- Tone: ${tone}

${tone === "poetry" ? getPoetryRules("short") : ""}

Length rules (STRICT):
- medium: 2-3 sentences.
- long: 4-5 sentences.

Emoji rules:
- Include AT LEAST 3 emojis.
- Emojis must be relevant and natural.

Content rules:
- Start with a warm greeting.
- Mention the occasion clearly.
- Naturally include interests if provided.
- Use age-appropriate language.
- Avoid clichés.
- Use friendly, human tone.

Generate the greeting now.
`;
};

const getShortGreetingPrompt = (greetingData: GreetingData) => {
  const { holiday, settings, name, age, interests } = greetingData;
  const { tone, language } = settings;

  return `
You are a professional greeting card writer.

STRICT RULES (NO EXCEPTIONS):
- Write ONLY in ${language}.
-${tone === "poetry" ? getPoetryRules("short") : "Output MUST be EXACTLY ONE sentence."}
- The sentence MUST end with punctuation (. ! or ?).
- Do NOT use line breaks.
- Do NOT use lists.
- Do NOT add explanations.

Emoji rules (MANDATORY):
- Include EXACTLY 3 emojis.
- Emojis must be placed at the END of the sentence.
- Emojis must be relevant to the occasion.

Greeting details:
- Occasion: ${holiday}
- Name: ${name || "not specified"}
- Age: ${age || "not specified"}
- Interests: ${interests || "not specified"}
- Tone: ${tone}

Content rules:
- Start with a warm greeting (use name if provided).
- Mention the occasion naturally.
- If interests are provided, reference them briefly.
- Avoid clichés and generic phrases.
- If data is missing, use neutral wording.

Generate the greeting now.
`;
};

export const getGenerationPrompt = (greetingData: GreetingData) => {
  if (greetingData.settings.length === "short") {
    return getShortGreetingPrompt(greetingData);
  }

  return getNormalGreetingPrompt(greetingData);

}


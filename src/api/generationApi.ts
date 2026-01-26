import OpenAI from 'openai';

const API_KEY = import.meta.env.VITE_OPEN_ROUTER_API_KEY
const BASE_URL = import.meta.env.VITE_BASE_URL

const client = new OpenAI({
  baseURL: BASE_URL,
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export const generationApi = async (dataPrompt: string) => {
  try {
    const response = await client.chat.completions.create({
      model: 'deepseek/deepseek-r1-0528:free',
      messages: [
        {
          role: 'user' as const,
          content: dataPrompt,
        },
      ],
    });

    const result = response.choices[0].message;

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

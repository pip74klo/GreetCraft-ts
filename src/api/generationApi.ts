import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey:
    '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',
  dangerouslyAllowBrowser: true,
});

export const generationApi = async (dataPrompt: string) => {
  try {
    const response = await client.chat.completions.create({
      model: 'xiaomi/mimo-v2-flash:free',
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

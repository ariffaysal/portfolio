import { createGroq } from '@ai-sdk/groq';
import { streamText, convertToModelMessages } from 'ai';
import { getAIContextString } from '@/lib/ai-context';

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
   model: groq('openai/gpt-oss-120b'),      instructions: getAIContextString(),
      messages: await convertToModelMessages(messages),
      onError: ({ error }) => console.error('STREAM ERROR:', error),
    });

    return result.toUIMessageStreamResponse({
      onError: (error) =>
        error instanceof Error ? error.message : 'Unknown error',
    });
  } catch (error) {
    console.error('AI Chat Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
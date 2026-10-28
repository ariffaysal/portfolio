import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { getAIContextString } from '@/lib/ai-context';

// Configure the AI SDK to use Groq instead of OpenAI
const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: groq('llama-3.3-70b-versatile'), // Groq's most powerful free model
    system: getAIContextString(),
    messages,
  });

  return result.toDataStreamResponse();
}

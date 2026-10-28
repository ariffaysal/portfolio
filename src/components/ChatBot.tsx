'use client';
import { useChat } from '@ai-sdk/react';
import { useState } from 'react';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, sendMessage, status, error } = useChat();

  const isLoading = status === 'submitted' || status === 'streaming';

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-all transform hover:scale-110 font-bold"
        >
          Ask AI 🤖
        </button>
      )}

      {isOpen && (
        <div className="bg-zinc-900 border border-zinc-800 w-80 h-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-200">
          <div className="bg-zinc-800 p-3 flex justify-between items-center border-b border-zinc-700">
            <span className="text-sm font-semibold">Arif's Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">✕</button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            {messages.length === 0 && (
              <p className="text-zinc-500 text-center mt-10 italic">
                Ask me about Arif's experience, stack, or how to contact him!
              </p>
            )}

            {messages.map(m => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 rounded-lg whitespace-pre-wrap ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-zinc-800 text-zinc-200'}`}>
                  {m.parts.map((part, i) =>
                    part.type === 'text' ? <span key={i}>{part.text}</span> : null
                  )}
                </div>
              </div>
            ))}

            {isLoading && <div className="text-xs text-zinc-500 animate-pulse">Typing...</div>}
            {error && (
              <div className="text-xs text-red-400">
                {error.message || 'Something went wrong. Try again.'}
              </div>
            )}
          </div>

          <form onSubmit={onFormSubmit} className="p-3 bg-zinc-800 border-t border-zinc-700 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded-md p-2 text-xs focus:outline-none focus:border-blue-500"
              placeholder="Type here..."
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 px-3 py-1 rounded-md text-xs font-bold hover:bg-blue-700 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
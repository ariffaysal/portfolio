'use client';
import { useChat } from '@ai-sdk/react';
import type { UIMessage } from 'ai';
import { useEffect, useRef, useState } from 'react';

const SUGGESTIONS = [
  'What does Arif work on?',
  "What's his tech stack?",
  'Which projects has he built?',
  'How can I contact him?',
];

// Used only if the model doesn't return its own follow-ups.
const FALLBACK_POOL = [
  "Tell me about his current job",
  'What research has he published?',
  'Is he open to new roles?',
  'Does he have machine learning experience?',
  "What's his tech stack?",
  'Which projects has he built?',
  'How can I contact him?',
];

// The model ends each reply with: [[suggestions: Q1 | Q2 | Q3]]
// Hide that line from the bubble (even while it is still streaming) and extract the questions.
function parseReply(raw: string) {
  const match = raw.match(/\[\[suggestions:([\s\S]*?)\]\]/i);
  const suggestions = match
    ? match[1]
        .split('|')
        .map(s => s.trim())
        .filter(s => s && s.length <= 80)
    : [];
  const text = raw.replace(/\s*\[\[[\s\S]*$/, '').replace(/\s*\[$/, '').trim();
  return { text, suggestions };
}

const LINK_PATTERN = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.-]+)/g;

function getText(message: UIMessage) {
  return message.parts
    .map(part => (part.type === 'text' ? part.text : ''))
    .join('');
}

// Turns URLs and email addresses in plain text into clickable links.
function renderWithLinks(text: string) {
  return text.split(LINK_PATTERN).map((chunk, i) => {
    if (i % 2 === 0) return chunk;
    const [, core, tail] = chunk.match(/^(.*?)([.,;:!?)]*)$/) ?? [, chunk, ''];
    const href = core.includes('@') && !core.startsWith('http') ? `mailto:${core}` : core;
    return (
      <span key={i}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 break-all hover:opacity-80"
        >
          {core}
        </a>
        {tail}
      </span>
    );
  });
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const { messages, sendMessage, regenerate, status, error } = useChat();

  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  const isBusy = status === 'submitted' || status === 'streaming';
  const lastMessage = messages[messages.length - 1];
  const showTyping =
    status === 'submitted' ||
    (status === 'streaming' &&
      (!lastMessage || lastMessage.role !== 'assistant' || !getText(lastMessage)));

  // Follow-up questions shown after each finished answer, skipping ones already asked.
  const asked = new Set(
    messages.filter(m => m.role === 'user').map(m => getText(m).trim().toLowerCase())
  );
  const fresh = (list: string[]) => list.filter(s => !asked.has(s.toLowerCase()));
  let followUps: string[] = [];
  if (lastMessage?.role === 'assistant' && status === 'ready' && !error) {
    const fromModel = fresh(parseReply(getText(lastMessage)).suggestions);
    followUps = (fromModel.length ? fromModel : fresh(FALLBACK_POOL)).slice(0, 3);
  }

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: status === 'streaming' ? 'auto' : 'smooth',
      block: 'end',
    });
  }, [messages, status, error]);

  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(t);
  }, [isOpen]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send(input);
    setInput('');
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 font-sans sm:bottom-6 sm:right-6"
      onKeyDown={e => {
        if (e.key === 'Escape') setIsOpen(false);
      }}
    >
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open chat assistant"
          className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />
          </svg>
          Ask AI
        </button>
      )}

      <section
        aria-label="Chat with Arif's assistant"
        aria-hidden={!isOpen}
        className={`flex h-[min(36rem,calc(100dvh-6rem))] w-[calc(100vw-2rem)] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 text-zinc-200 shadow-2xl transition-all duration-200 motion-reduce:transition-none sm:w-96 ${
          isOpen
            ? 'visible translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none invisible absolute bottom-0 right-0 translate-y-3 scale-95 opacity-0'
        }`}
      >
        {/* Header */}
        <header className="flex items-center gap-3 border-b border-zinc-800 bg-zinc-900 px-4 py-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
            AF
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="truncate text-sm font-semibold text-zinc-100">Arif's assistant</h2>
            <p className="truncate text-xs text-zinc-400">Answers from Arif's Sideview </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="rounded-md p-1.5 text-zinc-400 transition hover:bg-zinc-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </header>

        {/* Messages */}
        <div
          role="log"
          aria-live="polite"
          className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4 text-sm"
        >
          {messages.length === 0 && (
            <div className="pt-2">
              <p className="text-base font-semibold text-zinc-100">Hi, I'm Arif's assistant.</p>
              <p className="mt-1 text-zinc-400">
                Ask about his work, skills, or how to get in touch.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {SUGGESTIONS.map(s => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    disabled={isBusy}
                    className="rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-2 text-left text-zinc-300 transition hover:border-blue-500/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:opacity-50"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map(m => {
            const isUser = m.role === 'user';
            const text = isUser ? getText(m) : parseReply(getText(m)).text;
            if (!text) return null;
            return (
              <div key={m.id} className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
                {!isUser && (
                  <div className="mb-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-300">
                    AF
                  </div>
                )}
                <div
                  className={`max-w-[82%] whitespace-pre-wrap break-words px-3 py-2 leading-relaxed ${
                    isUser
                      ? 'rounded-2xl rounded-br-md bg-blue-600 text-white'
                      : 'rounded-2xl rounded-bl-md bg-zinc-800 text-zinc-100'
                  }`}
                >
                  {renderWithLinks(text)}
                </div>
              </div>
            );
          })}

          {followUps.length > 0 && (
            <div className="flex flex-wrap gap-2 pl-8 pt-1">
              {followUps.map(s => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-left text-xs text-zinc-300 transition hover:border-blue-500/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {showTyping && (
            <div className="flex items-end gap-2" aria-label="Assistant is typing">
              <div className="mb-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-300">
                AF
              </div>
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-zinc-800 px-3 py-3">
                {[0, 150, 300].map(delay => (
                  <span
                    key={delay}
                    style={{ animationDelay: `${delay}ms` }}
                    className="h-1.5 w-1.5 rounded-full bg-zinc-400 motion-safe:animate-bounce"
                  />
                ))}
              </div>
            </div>
          )}

          {error && (
            <div role="alert" className="rounded-xl border border-red-900/60 bg-red-950/40 p-3 text-xs text-red-200">
              <p>Couldn't get a reply. Check your connection and try again.</p>
              <button
                onClick={() => regenerate()}
                className="mt-2 font-semibold underline underline-offset-2 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
              >
                Retry
              </button>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="border-t border-zinc-800 bg-zinc-900 p-3">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              maxLength={500}
              aria-label="Your message"
              placeholder="Ask a question..."
              className="min-w-0 flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={!input.trim() || isBusy}
              aria-label="Send message"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m5 12 14-7-5 14-2-6-7-1Z" />
              </svg>
            </button>
          </form>
          <p className="mt-2 text-center text-[11px] text-zinc-500">
            AI can make mistakes. For anything important, contact Arif directly.
          </p>
        </div>
      </section>
    </div>
  );
}

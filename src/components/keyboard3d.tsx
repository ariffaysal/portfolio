"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/contact";

const KEY_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const PRESETS = ["MD ARIF FOYSAL", "Next.js + NestJS", "TypeScript"];

const MAX_LENGTH = 48;

export default function Keyboard3D() {
  const [text, setText] = useState("");
  const [sent, setSent] = useState(false);

  const press = (char: string) => {
    setText((t) => (t.length >= MAX_LENGTH ? t : t + char));
  };

  const backspace = () => setText((t) => t.slice(0, -1));
  const clear = () => {
    setText("");
    setSent(false);
  };

  /** Opens WhatsApp with the typed message pre-filled. */
  const sendToWhatsApp = () => {
    const message = text.trim() || "Hello Arif! I found you through your portfolio.";
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <div className="mx-auto max-w-2xl">
      {/* Terminal display */}
      <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-5 shadow-xl">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            keyboard.playground
          </span>
          <button
            type="button"
            onClick={clear}
            className="rounded-md border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-400 transition-colors hover:border-rose-400/40 hover:text-rose-300"
          >
            Clear
          </button>
        </div>
        <div className="min-h-[3.5rem] py-3 font-mono text-lg text-zinc-100">
          {text || <span className="text-zinc-600">Type something…</span>}
          <span className="kb-cursor" />
        </div>
        {sent && (
          <p className="border-t border-white/10 pt-2 font-mono text-[11px] text-emerald-300">
            Opening WhatsApp with your message — hit send to deliver it. ✦
          </p>
        )}
      </div>

      {/* Preset quick-type chips */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => setText(preset)}
            className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-mono text-[11px] text-zinc-400 transition-colors hover:border-indigo-400/40 hover:text-indigo-300"
          >
            {preset}
          </button>
        ))}
      </div>

      {/* 3D keyboard */}
      <div className="kb mt-10 rounded-3xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5 shadow-2xl sm:p-7">
        <div className="space-y-2.5">
          {KEY_ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className="flex justify-center gap-2">
              {row.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => press(key)}
                  className="kb-key flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-zinc-700 to-zinc-800 font-mono text-sm font-medium text-zinc-100"
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
          <div className="flex justify-center gap-2 pt-1">
            <button
              type="button"
              onClick={backspace}
              className="kb-key flex h-11 w-24 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-rose-600/80 to-rose-700/80 font-mono text-xs font-medium text-rose-50"
            >
              ⌫
            </button>
            <button
              type="button"
              onClick={() => press(" ")}
              className="kb-key flex h-11 w-56 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-b from-zinc-700 to-zinc-800 font-mono text-xs text-zinc-400 sm:w-72"
            >
              space
            </button>
            <button
              type="button"
              onClick={sendToWhatsApp}
              className="kb-key flex h-11 w-24 items-center justify-center gap-1 rounded-lg border border-emerald-400/40 bg-gradient-to-b from-[#25D366]/80 to-[#1DA851]/80 font-mono text-[11px] font-semibold text-emerald-50"
              title="Send message to my WhatsApp"
            >
              Send ↵
            </button>
          </div>
        </div>
      </div>

      <p className="mt-6 text-center font-mono text-[11px] text-zinc-600">
        A real, working 3D keyboard — type a message and press{" "}
        <span className="text-emerald-400">Send ↵</span> to deliver it straight to my WhatsApp.
      </p>
    </div>
  );
}

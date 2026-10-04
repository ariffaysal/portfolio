"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Copies to the clipboard with a legacy fallback, since `navigator.clipboard`
 * is unavailable outside secure contexts and can be blocked in sandboxes.
 */
async function writeToClipboard(value: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
  } catch {
    // Fall through to the legacy path below.
  }

  try {
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.top = "-9999px";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(field);
    return ok;
  } catch {
    return false;
  }
}

export default function CopyEmail({ value }: { value: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function handleCopy() {
    const ok = await writeToClipboard(value);
    setStatus(ok ? "copied" : "failed");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-surface"
      >
        {status === "copied"
          ? "Copied to clipboard"
          : status === "failed"
            ? "Copy unavailable"
            : "Copy address"}
      </button>
      <span aria-live="polite" className="sr-only">
        {status === "copied"
          ? "Email address copied to clipboard"
          : status === "failed"
            ? "Copying failed. Select the address and copy it manually."
            : ""}
      </span>
    </>
  );
}

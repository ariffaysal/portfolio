export const WHATSAPP_NUMBER = "8801935910948";
export const WHATSAPP_DISPLAY = "+880 1935-910948";

/** Builds a wa.me click-to-chat link, optionally pre-filled with a message. */
export function whatsappUrl(message?: string): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${text}`;
}

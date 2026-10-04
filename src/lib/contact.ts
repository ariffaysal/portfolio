export const NAME = "MD Arif Foysal";
export const ROLE = "Full-Stack Software Engineer";
export const LOCATION = "Dhaka, Bangladesh";

export const EMAIL = "ariffaysal001@gmail.com";
export const GITHUB_URL = "https://github.com/ariffaysal";
export const GITHUB_HANDLE = "ariffaysal";
export const LINKEDIN_URL = "https://www.linkedin.com/in/md-arif-foysal-9516a8407";
export const LINKEDIN_HANDLE = "md-arif-foysal";
export const RESUME_URL = "/MD-Arif-Foysal-CV.pdf";

export const WHATSAPP_NUMBER = "8801935910948";
export const WHATSAPP_DISPLAY = "+880 1935-910948";

export const DOI = "10.1109/QPAIN69676.2026.11545577";
export const DOI_URL = `https://doi.org/${DOI}`;

/** Builds a wa.me click-to-chat link, optionally pre-filled with a message. */
export function whatsappUrl(message?: string): string {
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${text}`;
}

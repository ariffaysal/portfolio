import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono, Newsreader } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NightBackground from "@/components/night-background";
import { NAME, ROLE, LOCATION } from "@/lib/contact";

const sans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const serif = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const description = `${ROLE} in ${LOCATION}. I build production web systems with NestJS, Next.js and PostgreSQL, and published IEEE research in applied deep learning.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ariffaysal-001.vercel.app"),
  title: `${NAME} — ${ROLE}`,
  description,
  keywords: [
    NAME,
    ROLE,
    "NestJS",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "React",
    "Machine Learning",
    LOCATION,
  ],
  authors: [{ name: NAME }],
  openGraph: {
    type: "profile",
    title: `${NAME} — ${ROLE}`,
    description,
    siteName: NAME,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} — ${ROLE}`,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        {/*
          Runs before first paint so the stored theme never flashes.
        */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='night'){var d=document.documentElement;d.dataset.theme='dark';}}catch(e){}})();",
          }}
        />
        <NightBackground />
        {children}
      </body>
    </html>
  );
}

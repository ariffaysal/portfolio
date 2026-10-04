import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import NightBackground from "@/components/night-background";
import NightMotion from "@/components/night-motion";
import { NAME, ROLE, LOCATION } from "@/lib/contact";

const sans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = Geist_Mono({
  variable: "--font-geist-mono",
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
          Runs before first paint so the stored theme never flashes, and so the
          night-only motion layer is armed in the same frame the dark palette
          lands. Day visitors are untouched by both.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{if(localStorage.getItem('theme')==='night'){var d=document.documentElement;d.dataset.theme='dark';d.dataset.motion='on';setTimeout(function(){if(!d.dataset.motionReady){d.removeAttribute('data-motion')}},2500)}}catch(e){}})();",
          }}
        />
        <NightBackground />
        <NightMotion />
        {children}
      </body>
    </html>
  );
}

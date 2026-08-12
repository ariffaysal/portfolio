import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MD Arif Foysal — Full-Stack Developer",
  description:
    "Portfolio of MD Arif Foysal — full-stack developer building SaaS and e-commerce applications with Next.js, NestJS, and TypeScript.",
  keywords: [
    "MD Arif Foysal",
    "Full-Stack Developer",
    "Next.js",
    "NestJS",
    "TypeScript",
    "React",
    "PostgreSQL",
  ],
  openGraph: {
    title: "MD Arif Foysal — Full-Stack Developer",
    description:
      "Full-stack developer building SaaS and e-commerce applications with Next.js, NestJS, and TypeScript.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-zinc-950 font-sans text-zinc-200 selection:bg-indigo-500/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}

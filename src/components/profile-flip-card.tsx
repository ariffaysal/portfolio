"use client";

import { useState } from "react";
import Image from "next/image";

const SKILLS = [
  "TypeScript",
  "JavaScript",
  "Python",
  "PHP",
  "SQL",
  "React",
  "Next.js",
  "NestJS",
  "Node.js",
  "Tailwind",
  "PostgreSQL",
  "MySQL",
  "TypeORM",
  "Docker",
  "Git",
  "REST API",
  "RBAC",
  "LSTM/GRU",
  "XGBoost",
  "n8n",
  "Agile",
];

export default function ProfileFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      data-flipped={isFlipped}
      onClick={() => setIsFlipped((current) => !current)}
      aria-pressed={isFlipped}
      aria-label={isFlipped ? "Show profile photo" : "Show technical skills"}
      title={isFlipped ? "Show photo" : "Show skills"}
      className="profile-flip-card rgb-frame relative aspect-[4/5] w-full rounded-sm bg-surface text-left"
    >
      <span className="profile-flip-card-inner">
        <span className="profile-flip-face profile-flip-front">
          <Image
            src="/profile-photo.jpg"
            alt="MD Arif Foysal presenting his IEEE publication at the QPAIN 2026 conference"
            fill
            priority
            sizes="(min-width: 768px) 15rem, 100vw"
            className="object-cover"
          />
        </span>

        <span className="profile-flip-face profile-flip-back" aria-hidden={!isFlipped}>
          <span className="label">Technical Skills</span>
          <span className="mt-3 grid grid-cols-2 gap-1.5 sm:gap-2">
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </span>
        </span>
      </span>
    </button>
  );
}

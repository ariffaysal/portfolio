"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

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
      onClick={() => setIsFlipped((current) => !current)}
      aria-pressed={isFlipped}
      aria-label={isFlipped ? "Show profile photo" : "Show technical skills"}
      title={isFlipped ? "Show photo" : "Show skills"}
      className="profile-flip-card rgb-frame relative aspect-[4/5] w-full rounded-sm bg-surface text-left"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 15,
        }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        <span className="profile-flip-face profile-flip-front absolute inset-0">
          <Image
            src="/profile-photo.jpg"
            alt="MD Arif Foysal presenting his IEEE publication at the QPAIN 2026 conference"
            fill
            priority
            sizes="(min-width: 768px) 15rem, 100vw"
            className="object-cover"
          />
        </span>

        <span
          className="profile-flip-face profile-flip-back absolute inset-0"
          aria-hidden={!isFlipped}
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="label">My Stack</span>
          <span className="mt-3 grid grid-cols-3 gap-1 sm:gap-1.5">
            {SKILLS.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </span>
        </span>
      </motion.div>
    </button>
  );
}

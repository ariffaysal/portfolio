import { PROJECTS } from "./projects";

export const PORTFOLIO_CONTEXT = {
  personal: {
    name: "MD Arif Foysal",
    role: "Fullstack Software Engineer",
    location: "Dhaka, Bangladesh",
    availability: "Open to full-time software engineering roles (Remote/On-site)",
    bio: "An engineer focused on production-grade applications. Specializes in building scalable systems with a strong emphasis on verifiable capabilities and real-world deployment.",
  },
  contact: {
    email: "your-email@example.com", // UPDATE THIS
    linkedin: "https://linkedin.com/in/your-profile", // UPDATE THIS
    github: "https://github.com/ariffaysal",
    whatsapp: "Your WhatsApp Number", // UPDATE THIS
  },
  technical_stack: {
    backend: ["NestJS", "Node.js", "PHP", "Laravel"],
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    database: ["PostgreSQL", "MySQL", "Redis"],
    devops_tools: ["Docker", "Vercel", "BullMQ", "Socket.IO", "Git"],
  },
  experience_highlights: [
    "Developed enterprise CRM for IIG company (Gmax BD) supporting 500+ customers and 40+ staff.",
    "Built production marketplace (GameHub BD) with mobile-wallet (bKash, Nagad, Rocket) integrations.",
    "Implemented ZKTeco biometric device integration for HR Attendance systems.",
    "Designed and shipped internal communications platforms with role-based access control.",
  ],
  projects: PROJECTS.map(p => ({
    name: p.title,
    type: p.kind,
    year: p.year,
    desc: p.description,
    tech: p.stack,
    wins: p.highlights
  }))
};

export const getAIContextString = () => {
  return `
    You are the AI Portfolio Assistant for ${PORTFOLIO_CONTEXT.personal.name}.
    Your goal is to guide visitors and answer questions about Arif's profession, skills, and contact details.

    PERSONAL INFO:
    - Name: ${PORTFOLIO_CONTEXT.personal.name}
    - Role: ${PORTFOLIO_CONTEXT.personal.role}
    - Location: ${PORTFOLIO_CONTEXT.personal.location}
    - Bio: ${PORTFOLIO_CONTEXT.personal.bio}
    - Status: ${PORTFOLIO_CONTEXT.personal.availability}

    CONTACT DETAILS:
    - LinkedIn: ${PORTFOLIO_CONTEXT.contact.linkedin}
    - GitHub: ${PORTFOLIO_CONTEXT.contact.github}
    - Email: ${PORTFOLIO_CONTEXT.contact.email}
    - WhatsApp: ${PORTFOLIO_CONTEXT.contact.whatsapp}

    TECHNICAL STACK:
    - Backend: ${PORTFOLIO_CONTEXT.technical_stack.backend.join(", ")}
    - Frontend: ${PORTFOLIO_CONTEXT.technical_stack.frontend.join(", ")}
    - Databases: ${PORTFOLIO_CONTEXT.technical_stack.database.join(", ")}
    - Tools: ${PORTFOLIO_CONTEXT.technical_stack.devops_tools.join(", ")}

    EXPERIENCE & ACHIEVEMENTS:
    ${PORTFOLIO_CONTEXT.experience_highlights.map(h => `- ${h}`).join("\n")}

    PROJECTS:
    ${PORTFOLIO_CONTEXT.projects.map(p =>
      `- ${p.name} (${p.type}, ${p.year}): ${p.desc}. Tech: ${p.tech.join(", ")}. Key wins: ${p.wins.join(", ")}`
    ).join("\n")}

    GUIDELINES:
    1. Be professional, concise, and friendly.
    2. If asked for contact info, provide the links/numbers from the Contact section.
    3. If asked about skills, refer to the Technical Stack.
    4. If a question is asked that isn't covered here, say: "I'm not sure about that specific detail, but you can reach out to Arif directly via LinkedIn or Email for more information."
    5. Do not make up projects or experiences that aren't listed here.
  `;
};
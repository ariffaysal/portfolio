import About from "@/components/about";
import Contact from "@/components/contact";
import Education from "@/components/education";
import Experience from "@/components/experience";
import FloatingStacks from "@/components/floating-stacks";
import Hero from "@/components/hero";
import Keyboard3D from "@/components/keyboard3d";
import Projects from "@/components/projects";
import Publications from "@/components/publications";
import Reveal from "@/components/reveal";
import Section from "@/components/section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Stack from "@/components/stack";
import ThreeBackground from "@/components/three-background";
import { getProjects } from "@/lib/projects";

// Rebuild hourly so GitHub project data stays fresh (fetches are no-store).
export const revalidate = 3600;

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <ThreeBackground />
      <SiteHeader />
      <main>
        <Hero />

        {/* Interactive floating stack strip */}
        <div className="py-16">
          <FloatingStacks />
        </div>

        <Section
          id="projects"
          eyebrow="01 · Featured Work"
          title="Projects I've Built"
          subtitle="Real products I've taken from an idea to a working, deployed application."
        >
          <Projects projects={projects} />
        </Section>

        <Section
          id="stack"
          eyebrow="02 · Toolbox"
          title="My Tech Stack"
          subtitle="The languages, frameworks, and tools I use across web development and machine learning."
        >
          <Stack />
        </Section>

        <Section
          id="playground"
          eyebrow="03 · Playground"
          title="Try the 3D Keyboard"
          subtitle="A real, working keyboard rendered in pure CSS 3D. Type a message and press Send ↵ to deliver it straight to my WhatsApp."
        >
          <Keyboard3D />
        </Section>

        <Section
          id="experience"
          eyebrow="04 · Career"
          title="Experience & Projects"
          subtitle="My career so far — work, research, and the projects that shaped how I build software."
        >
          <Experience />
        </Section>

        <Section
          id="research"
          eyebrow="05 · Research"
          title="Research & Publications"
          subtitle="Published research in deep learning for financial time-series forecasting."
        >
          <Publications />
        </Section>

        <Section
          id="education"
          eyebrow="06 · Education"
          title="Education"
          subtitle="My academic background in computer science."
        >
          <Education />
        </Section>

        <Section
          id="about"
          eyebrow="07 · About Me"
          title="How I Work"
          subtitle="A few things that define how I approach building software."
        >
          <About />
        </Section>

        <Section
          id="contact"
          eyebrow="08 · Contact"
          title="Let's Build Something"
          subtitle="Open to freelance projects, collaborations, and full-time roles. Reach out any time."
        >
          <Contact />
        </Section>
      </main>
      <Reveal>
        <SiteFooter />
      </Reveal>
    </>
  );
}

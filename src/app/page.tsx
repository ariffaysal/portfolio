import Background from "@/components/background";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import NightActivity from "@/components/night-activity";
import Projects from "@/components/projects";
import Publications from "@/components/publications";
import Section from "@/components/section";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import Stack from "@/components/stack";
import { PROJECTS } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />

        <Section
          id="work"
          label="Selected work"
          title="Systems I've designed, built and shipped."
          lede="Production applications rather than exercises — each one deployed, with the parts that were hard to get right called out."
        >
          <Projects projects={PROJECTS} />
        </Section>

        <Section
          id="experience"
          label="Experience"
          title="Where I've worked."
          lede="Four years of writing code, two of them shipping it into production for real users."
        >
          <Experience />
        </Section>

        <Section
          id="research"
          label="Research"
          title="Applied machine learning, peer reviewed."
          lede="Deep learning for financial forecasting and early defect prediction — with the interpretability work that makes the results usable."
        >
          <Publications />
        </Section>

        <Section id="toolkit" label="Toolkit" title="What I work with.">
          <Stack />
        </Section>

        <Section
          id="background"
          label="Background"
          title="Education and how I work."
        >
          <Background />
        </Section>

        {/* Night theme only — renders nothing in the day theme. */}
        <NightActivity />

        <Section
          id="contact"
          label="Contact"
          title="Open to full-time software engineering roles."
          lede="Based in Dhaka, Bangladesh, and available to work remotely with teams in any timezone."
        >
          <Contact />
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}

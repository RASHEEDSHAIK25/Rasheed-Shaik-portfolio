import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CareerJourney } from "@/components/CareerJourney";
import { About } from "@/components/About";
import { TechLearning } from "@/components/TechLearning";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { LinkedInHighlights } from "@/components/LinkedInHighlights";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CareerJourney />
        <About />
        <TechLearning />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <LinkedInHighlights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

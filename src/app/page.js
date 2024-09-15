import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Services />
    <Portfolio />
    <Contact />
    </>
  );
}

"use client";

import { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Skills from "../components/Skills";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on page load/refresh
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Contact />
    </main>
  );
}

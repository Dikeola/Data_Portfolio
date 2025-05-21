import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";
import { useKonamiCode } from "@/hooks/useKonamiCode";

export default function Home() {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const konamiDetected = useKonamiCode();
  
  // Check for "cheat codes" in localStorage
  useEffect(() => {
    const humbleMode = localStorage.getItem('humbleMode');
    if (humbleMode === 'false') {
      setShowEasterEgg(true);
    }
  }, []);
  
  // Show easter egg when Konami code is detected
  useEffect(() => {
    if (konamiDetected) {
      setShowEasterEgg(true);
    }
  }, [konamiDetected]);

  return (
    <div id="adhd-playground" className="relative overflow-x-hidden">
      {showEasterEgg && (
        <EasterEgg onClose={() => setShowEasterEgg(false)} />
      )}
      
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

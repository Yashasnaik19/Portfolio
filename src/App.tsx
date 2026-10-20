import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ParticleBackground } from './components/ParticleBackground';

export function App() {
  return (
    <div className="min-h-screen bg-[#070B14] text-[#F4F7FB] selection:bg-cyan-400/20 selection:text-cyan-400 relative">
      {/* Dynamic Cyber Particle Layer */}
      <ParticleBackground />

      {/* Persistent Navigation */}
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

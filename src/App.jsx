import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './components/hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectsMobile from './components/ProjectsMobile';
import Certifications from './components/Certifications';
import Education from './components/Education';
import SocialMagnet from './components/SocialMagnet';
import ContactForm from './components/ContactForm';
import { SmoothCursor } from './components/ui/smooth-cursor';

import './App.css'

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hasFinePointer] = useState(() =>
    window.matchMedia('(hover: hover) and (pointer: fine)').matches
  );
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);

    motionPreference.addEventListener('change', updateMotionPreference);
    return () => motionPreference.removeEventListener('change', updateMotionPreference);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    let lenis;
    let unsubscribe;
    if (!isMobile && !prefersReducedMotion) {
      lenis = new Lenis({
        duration: 0.9,
        lerp: 0.08,
        smoothWheel: true,
        autoRaf: true,
      });
      unsubscribe = lenis.on('scroll', ScrollTrigger.update);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe?.();
      lenis?.destroy();
    };
  }, [isMobile, prefersReducedMotion]);

  return (
    <>
      {hasFinePointer && !prefersReducedMotion && <SmoothCursor />}
      <Navbar />
      <main className="page-load-reveal">
        <Hero shouldReduceMotion={prefersReducedMotion} />
        <About />
        <Skills />
        <Education />
        {isMobile ? <ProjectsMobile /> : <Projects />}
        {/* <Certifications /> */}
        <ContactForm />
        <SocialMagnet />
      </main>
    </>
  )
}

export default App


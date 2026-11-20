import React, { lazy, Suspense, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import RotatingText from './RotatingText';
import { WordRotate } from "@/components/ui/word-rotate";

const Spline = lazy(() => import('@splinetool/react-spline'));

/**
 * A modern, minimal hero section component.
 */
export default function Hero({ shouldReduceMotion }) {
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const skills = ['Data Scientist & Analyst', 'Front & Backend Developer', 'AI Engineer', 'NLP','Big Data','Hadoop & Spark','Computer Vison Engineer','ML'];
  const greetings = ["Hello", "Hola", "Ciao", "مرحبا","नमस्ते"];
//Data Analyst & Scientist | Machine Learning Specialists | Big Data | Hadoop & Spark | Al Specialists | NLP | Computer Vision Engineer

  useEffect(() => {
    if (shouldReduceMotion) {
      setShouldLoadSpline(false);
      return undefined;
    }

    let idleCallbackId;
    let timeoutId;
    const loadSpline = () => setShouldLoadSpline(true);

    if ('requestIdleCallback' in window) {
      idleCallbackId = window.requestIdleCallback(loadSpline, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(loadSpline, 400);
    }

    return () => {
      if (idleCallbackId !== undefined && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleCallbackId);
      }
      window.clearTimeout(timeoutId);
    };
  }, [shouldReduceMotion]);

  return (
    <section className="relative w-full h-screen overflow-hidden isolate">
      <div className="hero-spline absolute inset-0 z-10 w-full h-full bg-neutral-400">
        {shouldLoadSpline && !shouldReduceMotion && (
          <Suspense fallback={null}>
            <Spline
              scene="https://prod.spline.design/9xuF1oRA5poA131s/scene.splinecode"
              aria-label="Interactive 3D animation"
            />
          </Suspense>
        )}
      </div>

      <div className="relative z-20 flex items-center justify-center w-full h-full p-8 text-center bg-black/20 pointer-events-none sm:p-16 md:p-24">
        <div className="max-w-md pointer-events-auto">
          <h1 className="font-pixel flex items-center justify-center gap-x-2 text-5xl font-bold text-white md:text-7xl lg:text-8xl [text-shadow:_0_3px_5px_rgb(0_0_0_/_40%)]">
            <WordRotate words={greetings} />
            {", I'm"}
          </h1>

          <div className="flex justify-center mt-4">
            <RotatingText
              texts={skills}
              mainClassName="text-lg text-white/90 md:text-xl lg:text-2xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_40%)]"
              splitLevelClassName="overflow-hidden"
              staggerDuration={0.08}
              staggerFrom="last"
            />
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <a
              href="#projects"
              onClick={e => {
                e.preventDefault();
                setTimeout(() => {
                  const el = document.getElementById('projects');
                  if (el) {
                    el.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    });
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-black transition-all duration-300 bg-white rounded-lg shadow-lg pointer-events-auto hover:bg-gray-200"
            >
              View My Work
              <ArrowRight size={20} />
            </a>
            <a
              href="https://drive.google.com/file/d/1HK4bhibG6IiV88TXR0xnf3SQQ8ISDN2n/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-white transition-all duration-300 bg-transparent border border-white rounded-lg shadow-lg pointer-events-auto hover:bg-white/10"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

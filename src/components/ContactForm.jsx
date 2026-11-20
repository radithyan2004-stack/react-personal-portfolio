import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const shouldReduceMotion = useReducedMotion();
  const MotionDiv = motion.div;
  const MotionSpan = motion.span;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background py-24 md:py-32">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
        )}
      />
      <div className="relative z-10 container mx-auto px-4">
        <MotionDiv
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
          className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          <div className="mx-auto max-w-md text-center lg:text-left">
            <MotionDiv
              className="relative mx-auto mb-9 flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72"
              animate={shouldReduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MotionDiv
                aria-hidden="true"
                className="absolute inset-0 rounded-full border border-dashed border-yellow-400/80"
                animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-3 rounded-full bg-gradient-to-br from-yellow-200 via-amber-100 to-orange-200 opacity-80 blur-xl" />
              <div className="relative h-52 w-52 overflow-hidden rounded-full border-4 border-white shadow-[0_20px_60px_-20px_rgba(202,138,4,0.55)] sm:h-60 sm:w-60">
                <img
                  src="https://github.com/radithyan2004-stack.png"
                  alt="Adithyan"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </div>
              <MotionSpan
                className="absolute bottom-5 right-0 rounded-full border border-yellow-200 bg-white px-4 py-2 text-xs font-semibold text-gray-800 shadow-lg sm:bottom-7"
                animate={shouldReduceMotion ? undefined : { scale: [1, 1.05, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                Available for opportunities
              </MotionSpan>
            </MotionDiv>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600">
              Let’s connect
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Have an idea? Let’s build it.
            </h2>
            <p className="text-base leading-7 text-gray-600">
              I’m Adithyan — a developer exploring AI, data, and thoughtful digital
              experiences. Send me a note and let’s make something meaningful.
            </p>
          </div>

          <div className="mx-auto w-full max-w-md rounded-2xl border border-gray-100 bg-gray-50 px-6 py-7 shadow-xl shadow-gray-200/60 sm:px-8">
            <h3 className="mb-6 text-center text-2xl font-semibold text-gray-900">Send me a message</h3>
            <form
              action="https://formspree.io/f/xyekbena"
              method="POST"
            >
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="name">Your Name</label>
                <input
                  className="w-full rounded-lg bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="email">Your Email</label>
                <input
                  className="w-full rounded-lg bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800 mb-1" htmlFor="message">Your Message</label>
                <textarea
                  className="w-full rounded-lg bg-white px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                  rows="4"
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                className="w-full rounded-lg bg-yellow-300 px-4 py-2 font-semibold text-gray-900 transition duration-300 hover:bg-yellow-400"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
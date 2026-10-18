import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [stars, setStars] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const MotionDiv = motion.div;
  const MotionSpan = motion.span;

  useEffect(() => {
    fetch('https://api.github.com/repos/Deadcoder001/React-Personal-Portfolio')
      .then(res => res.json())
      .then(data => setStars(data.stargazers_count))
      .catch(() => setStars(null));
  }, []);

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
        {/* Rainbow GitHub Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://github.com/radithyan2004-stack"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Star on GitHub"
          >
            <button
              className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-transform duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-105 active:scale-95 h-10 px-4 py-2 inline-flex"
              type="button"
            >
              <div className="flex items-center">
                <svg className="size-4" viewBox="0 0 438.549 438.549">
                  <path
                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                    fill="#fff"
                  ></path>
                </svg>
                <span className="ml-1 text-white lg:inline p-1">Star on GitHub</span>
              </div>
              <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                <svg
                  className="size-4 text-gray-500 transition-all duration-200 group-hover:text-yellow-300"
                  data-slot="icon"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <span className="inline-block tabular-nums tracking-wider font-display font-medium text-white dark:text-white">
                  {stars !== null ? stars : "--"}
                </span>
              </div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
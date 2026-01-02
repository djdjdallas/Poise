"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui";

/**
 * Auto-rotating testimonial carousel with smooth animations
 */
function TestimonialCarousel({ testimonials, interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, interval);

    return () => clearInterval(timer);
  }, [testimonials.length, interval]);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main testimonial */}
      <div className="relative h-[280px] md:h-[220px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="absolute inset-0"
          >
            <Card padding="lg" className="h-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border-purple-100 dark:border-purple-900/30">
              <div className="flex flex-col h-full justify-between">
                <div className="relative">
                  <svg
                    className="absolute -top-2 -left-2 w-8 h-8 text-purple-200 dark:text-purple-800"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 italic leading-relaxed pl-6">
                    "{testimonials[current].quote}"
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold">
                    {testimonials[current].author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">
                      {testimonials[current].author}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {testimonials[current].details}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-purple-600 w-8"
                : "bg-zinc-300 dark:bg-zinc-600 hover:bg-purple-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => goTo((current - 1 + testimonials.length) % testimonials.length)}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-white dark:bg-zinc-800 shadow-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
        aria-label="Previous testimonial"
      >
        <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % testimonials.length)}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-white dark:bg-zinc-800 shadow-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
        aria-label="Next testimonial"
      >
        <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

export { TestimonialCarousel };

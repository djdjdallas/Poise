"use client";

import { useState, useEffect } from "react";

/**
 * TableOfContents component for long articles
 *
 * @param {Object} props - Component props
 * @param {Array<{ id: string, text: string, level: number }>} props.headings - Array of heading objects
 * @param {string} [props.className] - Additional CSS classes
 */
function TableOfContents({ headings = [], className = "" }) {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Track the active section based on scroll position
  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -80% 0%",
        threshold: 0,
      }
    );

    // Observe all heading elements
    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings]);

  // Handle smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <>
      {/* Mobile toggle button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Table of Contents
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Mobile dropdown */}
        {isOpen && (
          <nav className="mt-2 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <ul className="space-y-2">
              {headings.map(({ id, text, level }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`
                      block text-left w-full text-sm transition-colors
                      ${level === 3 ? "pl-4" : ""}
                      ${
                        activeId === id
                          ? "text-purple-600 dark:text-purple-400 font-medium"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                      }
                    `}
                  >
                    {text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop sidebar */}
      <nav
        className={`hidden lg:block sticky top-24 ${className}`}
      >
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-4">
          On this page
        </h4>
        <ul className="space-y-2 border-l border-zinc-200 dark:border-zinc-800">
          {headings.map(({ id, text, level }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`
                  block text-left w-full text-sm transition-colors py-1
                  ${level === 2 ? "pl-4" : "pl-8"}
                  ${
                    activeId === id
                      ? "text-purple-600 dark:text-purple-400 font-medium border-l-2 border-purple-600 dark:border-purple-400 -ml-px"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                  }
                `}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export { TableOfContents };

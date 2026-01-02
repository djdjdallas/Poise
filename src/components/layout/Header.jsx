"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/pricing" },
  {
    name: "Guides",
    href: "#",
    dropdown: [
      { name: "Feeld Guide", href: "/feeld-guide" },
      { name: "ENM Communication", href: "/enm-communication" },
      { name: "Dating Confidence", href: "/dating-confidence" },
      { name: "Authentic Connection", href: "/authentic-connection" },
    ],
  },
  { name: "About", href: "/about" },
];

export default function Header({ className = "" }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md dark:bg-zinc-950/80 ${className}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Poise
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 dark:text-zinc-300"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setGuidesDropdownOpen(true)}
                onMouseLeave={() => setGuidesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="flex items-center gap-x-1 text-sm font-medium leading-6 text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
                  aria-expanded={guidesDropdownOpen}
                >
                  {item.name}
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      guidesDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {guidesDropdownOpen && (
                  <div className="absolute left-1/2 top-full z-10 w-56 -translate-x-1/2 pt-2">
                    <div className="rounded-xl bg-white p-2 shadow-lg ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-700">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-zinc-700 transition-colors hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              >
                {item.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/download"
            className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Download
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 border-t border-zinc-200 bg-white px-4 pb-4 pt-2 dark:border-zinc-800 dark:bg-zinc-950">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.name}>
                  <button
                    type="button"
                    onClick={() => setGuidesDropdownOpen(!guidesDropdownOpen)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    {item.name}
                    <svg
                      className={`h-5 w-5 transition-transform ${
                        guidesDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>
                  {guidesDropdownOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                href="/download"
                className="block w-full rounded-full bg-zinc-900 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

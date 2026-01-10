"use client";

import { useState } from "react";
import posthog from "posthog-js";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      // Identify the user by email
      posthog.identify(email, {
        email: email,
        newsletter_subscriber: true,
      });

      // Track newsletter subscription
      posthog.capture("newsletter_subscribed", {
        email: email,
        source: "footer",
      });

      setSubmitted(true);
      setEmail("");

      // Reset submission state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <form className="mt-4 flex max-w-md gap-x-3" onSubmit={handleSubmit}>
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-auto rounded-full border-0 bg-zinc-800 px-4 py-2.5 text-sm text-white shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-white"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="flex-none rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-zinc-200"
      >
        {submitted ? "Subscribed!" : "Subscribe"}
      </button>
    </form>
  );
}

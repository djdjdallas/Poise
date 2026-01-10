"use client";

import { useState } from "react";
import { Button, Badge, Section, Card } from "@/components/ui";
import { Container } from "@/components/layout";
import { CTASection } from "@/components/marketing";
import posthog from "posthog-js";

export default function BioGeneratorPage() {
  const [formData, setFormData] = useState({
    app: "",
    relationshipStatus: "",
    lookingFor: "",
    interests: "",
    vibe: "",
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults(null);

    // Track bio generation submission
    posthog.capture("bio_generation_submitted", {
      app: formData.app,
      relationship_status: formData.relationshipStatus,
      vibe: formData.vibe || "ai_decided",
    });

    try {
      const response = await fetch("/api/generate-bio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate bios");
      }

      setResults(data.bios);

      // Track successful bio generation
      posthog.capture("bio_generation_completed", {
        app: formData.app,
        relationship_status: formData.relationshipStatus,
        vibe: formData.vibe || "ai_decided",
        results_count: data.bios?.length || 0,
      });
    } catch (err) {
      setError(err.message);
      // Track error
      posthog.captureException(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(index);
      setTimeout(() => setCopied(null), 2000);

      // Track bio copied
      posthog.capture("bio_copied", {
        bio_index: index,
        app: formData.app,
        bio_length: text.length,
      });
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 md:pt-28 md:pb-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-purple-950/20 dark:via-zinc-950 dark:to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent dark:from-purple-900/20" />

        <Container className="relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="success" className="mb-4">
              ENM & Lifestyle Friendly
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-zinc-900 via-purple-800 to-pink-700 dark:from-white dark:via-purple-300 dark:to-pink-300 bg-clip-text text-transparent">
                Dating Profile Bio Generator
              </span>
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400">
              AI-powered bios for Feeld, Hinge, and more. Built for ENM, poly, and lifestyle communities.
            </p>
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <Card padding="lg" className="shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* App Selection */}
              <div>
                <label
                  htmlFor="app"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                >
                  Which app is this for? *
                </label>
                <select
                  id="app"
                  name="app"
                  value={formData.app}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select an app...</option>
                  <option value="Feeld">Feeld</option>
                  <option value="Hinge">Hinge</option>
                  <option value="Tinder">Tinder</option>
                  <option value="Bumble">Bumble</option>
                  <option value="OkCupid">OkCupid</option>
                  <option value="SDC">SDC (Lifestyle)</option>
                  <option value="Kasidie">Kasidie</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Relationship Situation */}
              <div>
                <label
                  htmlFor="relationshipStatus"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                >
                  What's your relationship situation? *
                </label>
                <select
                  id="relationshipStatus"
                  name="relationshipStatus"
                  value={formData.relationshipStatus}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your situation...</option>
                  <option value="Single, solo dating">Single, solo dating</option>
                  <option value="Single, open to couples">Single, open to couples (unicorn)</option>
                  <option value="In an open relationship, dating separately">In an open relationship, dating separately</option>
                  <option value="In a poly relationship">In a poly relationship</option>
                  <option value="Couple profile, dating together">Couple profile, dating together</option>
                  <option value="Couple, each with our own profiles">Couple, each with our own profiles</option>
                  <option value="Married, in the lifestyle">Married, in the lifestyle/swinging</option>
                  <option value="It's complicated">It's complicated</option>
                </select>
              </div>

              {/* Looking For */}
              <div>
                <label
                  htmlFor="lookingFor"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                >
                  What are you looking for? *
                </label>
                <textarea
                  id="lookingFor"
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleChange}
                  required
                  rows={3}
                  placeholder="e.g., Casual connections with interesting people, deep conversations that might lead somewhere, exploring kink with the right person, finding a genuine third for my relationship..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              {/* Interests */}
              <div>
                <label
                  htmlFor="interests"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                >
                  Interests or traits to highlight
                </label>
                <textarea
                  id="interests"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  rows={3}
                  placeholder="e.g., Rock climbing, cooking elaborate meals, travel, great communicator, adventurous, bookworm, vinyl collector, early riser..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                />
              </div>

              {/* Vibe Selection */}
              <div>
                <label
                  htmlFor="vibe"
                  className="block text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-2"
                >
                  What vibe are you going for?
                </label>
                <select
                  id="vibe"
                  name="vibe"
                  value={formData.vibe}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">Let AI decide...</option>
                  <option value="Playful and flirty">Playful and flirty</option>
                  <option value="Sincere and heartfelt">Sincere and heartfelt</option>
                  <option value="Witty and clever">Witty and clever</option>
                  <option value="Confident and direct">Confident and direct</option>
                  <option value="Mysterious and intriguing">Mysterious and intriguing</option>
                  <option value="Warm and approachable">Warm and approachable</option>
                  <option value="Nerdy and enthusiastic">Nerdy and enthusiastic</option>
                </select>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                  <p className="text-red-700 dark:text-red-300 text-sm">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Generating...
                  </span>
                ) : (
                  "Generate Bio Ideas"
                )}
              </Button>
            </form>
          </Card>

          {/* Results Section */}
          {results && results.length > 0 && (
            <div className="mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white text-center mb-6">
                Your Bio Options
              </h2>
              {results.map((bio, index) => (
                <Card key={index} padding="lg" className="relative group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="default" size="sm">
                          Option {index + 1}
                        </Badge>
                        {bio.vibe && (
                          <Badge variant="outline" size="sm">
                            {bio.vibe}
                          </Badge>
                        )}
                      </div>
                      <p className="text-zinc-900 dark:text-zinc-100 text-lg leading-relaxed whitespace-pre-wrap">
                        {bio.text}
                      </p>
                      {bio.tip && (
                        <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 italic">
                          💡 {bio.tip}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => copyToClipboard(bio.text, index)}
                      className="shrink-0 p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
                      title="Copy to clipboard"
                    >
                      {copied === index ? (
                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-zinc-600 dark:text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg>
                      )}
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Upgrade Card */}
          <Card
            padding="lg"
            className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800"
          >
            <div className="text-center">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                Get unlimited generations in the Poise app
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                Plus opener suggestions, conversation coaching, and more — all processed privately on your device.
              </p>
              <Button href="/download" variant="primary" size="lg">
                Download Poise Free
              </Button>
            </div>
          </Card>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Badge
              variant="success"
              size="md"
              icon={
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              }
            >
              ENM & Lifestyle Aware
            </Badge>
            <Badge
              variant="success"
              size="md"
              icon={
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              }
            >
              Powered by Grok AI
            </Badge>
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <CTASection
        headline="Ready to write bios with confidence?"
        description="Stop second-guessing every word. Get AI-powered suggestions that actually understand ENM culture and dating app dynamics."
        primaryCta={{ text: "Download Poise Free", href: "/download" }}
        background="gradient"
      />
    </main>
  );
}

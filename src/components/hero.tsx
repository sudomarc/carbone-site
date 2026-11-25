"use client";

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-[var(--header-height)] overflow-hidden" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[var(--color-bg)]" aria-hidden="true" />

      <div className="absolute inset-0 opacity-3" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-[var(--color-accent)]/5 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 rounded-full bg-[var(--color-accent)]/5 blur-3xl" aria-hidden="true" />

      <div className="container relative z-10 py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-accent-muted)] text-[var(--color-accent)] text-sm font-medium mb-10 animate-in" style={{ border: "1px solid var(--color-accent-border)" }}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]" />
            </span>
            Collectif technologique ouvert — Actif depuis 2024
          </div>

          <Logo size="xl" className="mb-8 animate-in animate-in-delay-1" aria-hidden="true" />

          <h1 id="hero-title" className="font-display font-bold text-[clamp(3rem,10vw,7rem)] leading-[1.0] tracking-tight text-[var(--color-fg)] mb-8 animate-in animate-in-delay-2 text-balance">
            CARBONE
            <br />
            <span className="text-[var(--color-fg-muted)] font-normal text-[clamp(1.5rem,4vw,3rem)] block mt-2">
              Collectif technologique
            </span>
          </h1>

          <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-[var(--color-fg-muted)] max-w-2xl mb-12 leading-relaxed animate-in animate-in-delay-3 text-balance">
            Nous développons nos propres projets et participons à des collaborations externes.
            Notre terrain d&apos;action : la technologie.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 animate-in animate-in-delay-4">
            <Button size="lg" asChild>
              <a href="#projets">Voir nos projets</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#collaborer">Collaborer avec nous</a>
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-start gap-8 text-sm text-[var(--color-fg-subtle)] animate-in animate-in-delay-5">
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Open source par défaut</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Collaborations externes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              <span>Indépendance technique</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-fg-subtle)]">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
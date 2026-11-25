"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { siteConfig } from "@/content/site";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32" aria-labelledby="contact-title">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 id="contact-title" className="font-display font-bold text-[clamp(2rem,5vw,3rem)] leading-tight text-[var(--color-fg)] mb-6">
              On discute ?
            </h2>
            <p className="text-[clamp(1.125rem,2vw,1.25rem)] text-[var(--color-fg-muted)] leading-relaxed text-balance mb-8">
              Pas de formulaire compliqué, pas de CRM, pas de relance automatique.
              Juste un email ou une discussion GitHub.
            </p>

            <div className="space-y-6">
              <Card variant="outlined" padding="md">
                <CardHeader>
                  <CardTitle className="text-lg">Email direct</CardTitle>
                  <CardDescription className="text-sm">Pour toute proposition, question ou juste dire bonjour</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--color-bg-muted)] hover:bg-[var(--color-border)] transition-colors text-[var(--color-fg)] font-medium"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    {siteConfig.email}
                  </a>
                </CardContent>
              </Card>

              <Card variant="outlined" padding="md">
                <CardHeader>
                  <CardTitle className="text-lg">GitHub</CardTitle>
                  <CardDescription className="text-sm">Ouvrir une discussion, une issue ou une PR</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--color-bg-muted)] hover:bg-[var(--color-border)] transition-colors text-[var(--color-fg)] font-medium"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    github.com/carbonegroup
                  </a>
                </CardContent>
              </Card>

              <Card variant="outlined" padding="md">
                <CardHeader>
                  <CardTitle className="text-lg">Soutenir le collectif</CardTitle>
                  <CardDescription className="text-sm">GitHub Sponsors pour l&apos;indépendance du collectif</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href="https://github.com/sponsors/carbonegroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--color-accent-alt)]/10 hover:bg-[var(--color-accent-alt)]/20 transition-colors text-[var(--color-accent-alt)] font-medium border border-[var(--color-accent-alt)]/20"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                    Devenir sponsor
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="elevated" padding="lg">
              <h3 className="font-display font-bold text-xl text-[var(--color-fg)] mb-6">
                Ce qu&apos;on attend de toi
              </h3>
              <ul className="space-y-4 text-[var(--color-fg-muted)] leading-relaxed">
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-accent-muted)] text-[var(--color-accent)] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span><strong>Contexte :</strong> Dis-nous ce que tu construis, pourquoi, et où tu en es</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-accent-muted)] text-[var(--color-accent)] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span><strong>Alignement :</strong> Comment ton projet/problème s&apos;inscrit dans notre terrain d&apos;action</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-accent-muted)] text-[var(--color-accent)] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span><strong>Concret :</strong> On préfère un repo, une démo, un doc qu&apos;un pitch deck</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--color-accent-muted)] text-[var(--color-accent)] flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span><strong>Honnêteté :</strong> Pas de bullshit, pas de survente. On fait pareil.</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <p className="text-sm text-[var(--color-fg-subtle)] text-center">
                  Temps de réponse habituel : quelques jours. On lit tout, on répond à ce qui est pertinent.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
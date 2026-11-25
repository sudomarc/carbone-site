"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { collaborationModes } from "@/content/site";
import { motion } from "framer-motion";

const modeIcons: Record<string, React.ReactNode> = {
  lightbulb: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 12c0 2.21-1.79 4-4 4-1.16 0-2.16-.47-2.9-1.22l-1.42 1.42c.81 1.11 2.18 1.8 3.69 1.8 3.31 0 6-2.69 6-6 0-1.82-.88-3.42-2.19-4.39L17 5.07C18.04 5.76 18.8 6.73 19 8A7 7 0 1 0 12 18c1.27 0 2.44-.26 3.5-.71l1.75 1.75c-.77.5-1.6.78-2.5.78-2.76 0-5-2.24-5-5 0-1.51.67-2.85 1.7-3.76L13 3.86c-.93.57-1.5 1.48-1.5 2.5 0 3.31 2.69 6 6 6zm-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z" />
    </svg>
  ),
  "git-branch": (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M6 3v12" />
      <path d="M18 9v6" />
      <circle cx="6" cy="3" r="2" />
      <circle cx="18" cy="9" r="2" />
      <path d="M6 21a2 2 0 0 1-2-2" />
      <path d="M18 3a2 2 0 0 1 2 2" />
    </svg>
  ),
  handshake: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M11 17H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v2" />
      <path d="M14 8l3 3-3 3" />
      <path d="M18 5v7a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4" />
    </svg>
  ),
  heart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
};

export function Collaborate() {
  return (
    <section id="collaborer" className="py-24 md:py-32 bg-[var(--color-bg-muted)]" aria-labelledby="collaborer-title">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 id="collaborer-title" className="font-display font-bold text-[clamp(2rem,5vw,3rem)] leading-tight text-[var(--color-fg)] mb-6">
            Travailler avec nous
          </h2>
          <p className="text-[clamp(1.125rem,2vw,1.25rem)] text-[var(--color-fg-muted)] leading-relaxed text-balance">
            CARBONE n&apos;est pas une agence. On ne vend pas de prestations. Mais on collabore
            avec des gens qu&apos;on respecte, sur des problèmes qui comptent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collaborationModes.map((mode, index) => (
            <motion.div
              key={mode.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="outlined" padding="lg" className="h-full transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-lg)]">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent-muted)] text-[var(--color-accent)] mb-4">
                    {modeIcons[mode.icon]}
                  </div>
                  <CardTitle className="text-xl">{mode.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-6">{mode.description}</CardDescription>
                  <Button variant="outline" asChild className="w-full">
                    <a href={mode.href} target="_blank" rel={mode.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {mode.cta}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto">
          <Card variant="elevated" padding="lg">
            <div className="text-center">
              <h3 className="font-display font-bold text-2xl text-[var(--color-fg)] mb-4">
                Ce qu&apos;on ne fait pas
              </h3>
              <ul className="space-y-3 text-left text-[var(--color-fg-muted)] leading-relaxed">
                <li className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-[var(--color-error)] mt-0.5" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>De la sous-traitance déguisée — on ne fait pas le travail à votre place sans en être partie prenante</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-[var(--color-error)] mt-0.5" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>Du conseil en innovation theater — pas de slides PowerPoint pour faire joli</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-[var(--color-error)] mt-0.5" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>Du verrouillage vendeur — tout ce qu&apos;on produit reste ouvert et portable</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-[var(--color-error)] mt-0.5" aria-hidden="true">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  <span>De la croissance pour la croissance — on privilégie l&apos;impact et la qualité au volume</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
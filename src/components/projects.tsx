"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/site";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type ProjectStatus = "active" | "development" | "maintenance" | "archived";

const statusStyles: Record<ProjectStatus, string> = {
  active: "bg-[var(--color-success)]/10 text-[var(--color-success)] border-[var(--color-success)]/20",
  development: "bg-[var(--color-warning)]/10 text-[var(--color-warning)] border-[var(--color-warning)]/20",
  maintenance: "bg-[var(--color-fg-muted)]/10 text-[var(--color-fg-muted)] border-[var(--color-fg-muted)]/20",
  archived: "bg-[var(--color-border)] text-[var(--color-fg-subtle)]",
};

const statusLabels: Record<ProjectStatus, string> = {
  active: "Actif",
  development: "En développement",
  maintenance: "Maintenance",
  archived: "Archivé",
};

const categoryIcons: Record<string, React.ReactNode> = {
  "Éducation": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  ),
  "Infrastructure": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  "IA / LLM": (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M17 18a5 5 0 0 0-10 0" />
      <path d="M12 2a5 5 0 0 1 0 10" />
      <path d="M2 12h20" />
      <path d="M12 2v10" />
    </svg>
  ),
};

export function Projects() {
  return (
    <section id="projets" className="py-24 md:py-32" aria-labelledby="projets-title">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 id="projets-title" className="font-display font-bold text-[clamp(2rem,5vw,3rem)] leading-tight text-[var(--color-fg)] mb-3">
              Ce qu&apos;on construit
            </h2>
            <p className="text-[var(--color-fg-muted)] max-w-xl text-balance">
              Projets ouverts, maintenus, utilisés. Pas de vaporware, pas de landing pages
              pour des idées — du code qui tourne.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="ghost" size="sm" className="bg-[var(--color-accent-muted)] text-[var(--color-accent)]">
              Tous
            </Button>
            <Button variant="ghost" size="sm">Éducation</Button>
            <Button variant="ghost" size="sm">Infrastructure</Button>
            <Button variant="ghost" size="sm">IA / LLM</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card variant="outlined" padding="none" className="h-full flex flex-col transition-all duration-300 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-xl)] group">
                <div className="relative h-40 bg-[var(--color-bg-muted)] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-alt)] opacity-10 flex items-center justify-center">
                      {categoryIcons[project.category] || (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]" aria-hidden="true">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium border", statusStyles[project.status as ProjectStatus])}>
                      {statusLabels[project.status as ProjectStatus]}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-[var(--color-accent-alt)]/10 text-[var(--color-accent-alt)] border border-[var(--color-accent-alt)]/20">
                        Mis en avant
                      </span>
                    )}
                  </div>
                </div>

                <CardHeader className="px-6 pt-6 pb-0">
                  <div className="flex items-center gap-2 text-sm text-[var(--color-fg-muted)] mb-2">
                    {categoryIcons[project.category]}
                    <span>{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={project.year.toString()}>{project.year}</time>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-[var(--color-accent)] transition-colors">{project.name}</CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-0 flex-1">
                  <CardDescription className="text-base leading-relaxed mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2.5 py-1 text-xs rounded bg-[var(--color-bg-muted)] text-[var(--color-fg-muted)] border border-[var(--color-border)]">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2.5 py-1 text-xs rounded bg-[var(--color-bg-muted)] text-[var(--color-fg-subtle)] border border-[var(--color-border)]">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="px-6 pb-6">
                  <div className="flex flex-wrap gap-2 w-full">
                    {project.links.github && (
                      <Button variant="outline" size="sm" asChild className="flex-1 min-w-[120px]">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="mr-1.5">
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          Code
                        </a>
                      </Button>
                    )}
                    {project.links.demo && (
                      <Button variant="secondary" size="sm" asChild className="flex-1 min-w-[120px]">
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          Démo
                        </a>
                      </Button>
                    )}
                    {project.links.website && (
                      <Button variant="secondary" size="sm" asChild className="flex-1 min-w-[120px]">
                        <a href={project.links.website} target="_blank" rel="noopener noreferrer">
                          Site
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[var(--color-fg-muted)] mb-6 max-w-2xl mx-auto text-balance">
            Tu as un projet qui pourrait nous intéresser ? On est toujours curieux de voir
            ce que la communauté construit.
          </p>
          <Button variant="outline" asChild>
            <a href="https://github.com/carbonegroup" target="_blank" rel="noopener noreferrer">
              Voir tous les repos sur GitHub
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
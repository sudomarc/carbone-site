"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { LogoMark } from "@/components/ui/logo";
import { siteConfig, projects, stats } from "@/content/site";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- needed for dynamic year on client
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-[var(--color-bg-muted)] border-t border-[var(--color-border)]" role="contentinfo">
      <div className="container py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label="CARBONE - Accueil">
              <LogoMark size="md" />
              <span className="font-display font-bold text-xl text-[var(--color-fg)]">CARBONE</span>
            </Link>
            <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed max-w-xs mb-8">
              Collectif technologique ouvert. Nous développons nos propres projets et participons à des collaborations externes.
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors"
                aria-label="Email"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>

          <nav aria-label="Navigation">
            <h3 className="font-display font-semibold text-[var(--color-fg)] mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><Link href="#collectif" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">Le collectif</Link></li>
              <li><Link href="#projets" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">Projets</Link></li>
              <li><Link href="#collaborer" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">Collaborer</Link></li>
              <li><Link href="#contact" className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-sm">Contact</Link></li>
            </ul>
          </nav>

          <nav aria-label="Projets">
            <h3 className="font-display font-semibold text-[var(--color-fg)] mb-4">Projets</h3>
            <ul className="space-y-3">
              {projects.filter(p => p.featured).map((project) => (
                <li key={project.id}>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-fg-muted)] hover:text-[var(--color-accent)] transition-colors text-sm flex items-center gap-2"
                  >
                    {project.name}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display font-semibold text-[var(--color-fg)] mb-4">Stats rapides</h3>
            <dl className="space-y-4 text-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <dt className="font-bold text-[var(--color-fg)] text-lg">{stat.value}</dt>
                  <dd className="text-[var(--color-fg-muted)]">{stat.label}</dd>
                  <dd className="text-[var(--color-fg-subtle)] text-xs">{stat.note}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--color-fg-subtle)]">
            © {currentYear} CARBONE. Tous droits réservés. Code open source sous licence MIT.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm text-[var(--color-fg-subtle)]">
            <span>Fait avec soin, pas avec des templates</span>
            <span aria-hidden="true">·</span>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent)] transition-colors">
              Voir le code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
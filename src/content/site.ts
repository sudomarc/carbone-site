export const siteConfig = {
  name: "CARBONE",
  description: "Collectif technologique ouvert",
  tagline: "Nous développons nos propres projets et participons à des collaborations externes. Notre terrain d'action : la technologie.",
  url: "https://carbone.group",
  ogImage: "/og-image.png",
  github: "https://github.com/carbonegroup",
  email: "contact@carbone.group",
};

export const projects = [
  {
    id: "verifycheck",
    name: "VerifyCheck",
    tagline: "Pointage scolaire par QR code — simple, fiable, open source",
    description: "Application web et mobile pour le pointage d'élèves par QR code. Conçue pour les établissements scolaires qui veulent une solution moderne, transparente et sans verrouillage vendeur.",
    longDescription: "VerifyCheck est une application de pointage scolaire par QR code. Elle comprend une application web Next.js (interface administration, tableau de bord, gestion des élèves), une PWA scanner pour les points de contrôle, et une application mobile React Native/Expo. Le backend utilise Supabase (PostgreSQL) avec RLS. Tout est open source sous licence MIT.",
    tech: ["Next.js", "React Native", "Expo", "Supabase", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    status: "active",
    category: "Éducation",
    links: {
      github: "https://github.com/carbonegroup/verify-check",
      demo: null,
      website: null,
    },
    featured: true,
    year: 2024,
  },
  {
    id: "netwatch",
    name: "NETWATCH",
    tagline: "Surveillance réseau et observabilité infrastructure",
    description: "Outil de monitoring réseau et d'observabilité d'infrastructure. Conçu pour surveiller la santé, la performance et la disponibilité des systèmes distribués.",
    longDescription: "NETWATCH est un projet de surveillance réseau et d'observabilité d'infrastructure. Il permet de monitorer la santé, la performance et la disponibilité de systèmes distribués. Le projet est en développement actif.",
    tech: ["Go", "Prometheus", "Grafana", "Docker", "Kubernetes"],
    status: "development",
    category: "Infrastructure",
    links: {
      github: "https://github.com/carbonegroup/netwatch",
      demo: null,
      website: null,
    },
    featured: true,
    year: 2024,
  },
  {
    id: "lapisllm",
    name: "LapisLLM",
    tagline: "Framework léger pour agents LLM locaux",
    description: "Framework minimaliste pour créer et orchestrer des agents LLM qui s'exécutent localement. Pas de cloud obligatoire, pas de dépendances lourdes.",
    longDescription: "LapisLLM est un framework léger pour créer et orchestrer des agents LLM qui s'exécutent localement. Il privilégie la simplicité, la performance et le respect de la vie privée. Pas de cloud obligatoire, pas de dépendances lourdes — juste l'essentiel pour construire des agents qui tournent sur votre machine.",
    tech: ["Python", "Ollama", "llama.cpp", "FastAPI", "Pydantic"],
    status: "active",
    category: "IA / LLM",
    links: {
      github: "https://github.com/carbonegroup/lapisllm",
      demo: null,
      website: null,
    },
    featured: true,
    year: 2024,
  },
];

export const values = [
  {
    id: "open",
    title: "Ouvert par défaut",
    description: "Nos projets sont open source. Le code, les décisions, les discussions — tout est public. On croit que le meilleur logiciel se construit à la lumière.",
    icon: "github",
  },
  {
    id: "pragmatic",
    title: "Pragmatisme avant dogme",
    description: "On choisit les bons outils pour le problème, pas ceux qui sont à la mode. Pas de réécriture pour le plaisir, pas de complexité inutile.",
    icon: "wrench",
  },
  {
    id: "autonomy",
    title: "Autonomie technique",
    description: "On évite le verrouillage vendeur. Nos stacks sont portables, nos données nous appartiennent, nos infra sont reproductibles.",
    icon: "server",
  },
  {
    id: "collaboration",
    title: "Collaboration sincère",
    description: "On travaille avec des gens qu'on respecte, sur des problèmes qui comptent. Pas de bullshit corporate, pas de theatre d'innovation.",
    icon: "users",
  },
  {
    id: "learning",
    title: "Apprentissage continu",
    description: "On explore, on rate, on itère. Chaque projet est une occasion d'apprendre quelque chose de nouveau et de le partager.",
    icon: "book-open",
  },
  {
    id: "minimal",
    title: "Moins mais mieux",
    description: "On supprime le superflu. Code, UI, processus — si ça n'apporte pas de valeur claire, ça dégage.",
    icon: "minus",
  },
];

export const collaborationModes = [
  {
    id: "propose",
    title: "Proposer un projet",
    description: "Tu as une idée de projet qui correspond à notre terrain d'action ? Ouvre une discussion sur GitHub ou écris-nous. On regarde ensemble la faisabilité, l'alignement et la capacité d'accueil.",
    cta: "Ouvrir une discussion",
    href: "https://github.com/carbonegroup",
    icon: "lightbulb",
  },
  {
    id: "contribute",
    title: "Contribuer à nos projets",
    description: "Tous nos projets sont open source. Issues, PR, reviews, docs, tests, design — toute contribution est bienvenue. Commence par lire le CONTRIBUTING.md du projet qui t'intéresse.",
    cta: "Voir les projets",
    href: "/#projets",
    icon: "git-branch",
  },
  {
    id: "partner",
    title: "Collaborer avec nous",
    description: "Tu es une équipe, une structure, un chercheur, un artiste ? On fait des collaborations externes ponctuelles ou longues. Écris-nous pour qu'on en parle concrètement.",
    cta: "Nous contacter",
    href: "/#contact",
    icon: "handshake",
  },
  {
    id: "sponsor",
    title: "Soutenir le collectif",
    description: "CARBONE n'est pas une entreprise. Si tu veux soutenir notre indépendance et nos projets open source, tu peux le faire via GitHub Sponsors ou en nous contactant pour d'autres formes de soutien.",
    cta: "Soutenir",
    href: "https://github.com/sponsors/carbonegroup",
    icon: "heart",
  },
];

export const stats = [
  { label: "Projets open source", value: "3+", note: "et ça continue" },
  { label: "Contributeurs", value: "Ouvert à tous", note: "pas de barrière à l'entrée" },
  { label: "Licence par défaut", value: "MIT", note: "liberté totale" },
  { label: "Année de création", value: "2024", note: "recent mais sérieux" },
];
# CineVault

A social movie diary and discussion platform for film lovers.

> "Don't just tell us whether a movie is good. Show us what you noticed, felt, remembered, or interpreted."

## Overview

CineVault is a modern platform for film lovers to preserve what they noticed, felt, remembered, and interpreted about movies. Unlike traditional rating sites, CineVault focuses on personal interpretation, structured discussion, and meaningful connections between viewers.

## Features (Planned)

- **Movie Discovery & Search** — Powered by TMDB
- **Personal Movie Diary** — Rich, structured entries beyond ratings
- **Structured Discussions** — Threaded conversations on scenes, themes, performances
- **Spoiler Protection** — Built-in at every level
- **Taste Matching** — Find viewers with aligned sensibilities
- **Cinema Twin** — Your closest taste match on the platform
- **AI Interpretations** — NVIDIA Nemotron-powered background intelligence

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Database**: PostgreSQL + Prisma (planned)
- **Authentication**: NextAuth.js (planned)
- **Movie Data**: TMDB API (planned)
- **AI**: NVIDIA Nemotron (planned)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+
- PostgreSQL 16+ (for full features)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cinevault.git
cd cinevault

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
npm run typecheck # Run TypeScript compiler check
```

## Project Structure

```
cinevault/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Landing page
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   └── index.ts
│   │   └── layout/        # Layout components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── index.ts
│   ├── lib/               # Utility functions
│   │   └── utils.ts
│   └── types/             # TypeScript types
├── .env.example           # Environment variables template
├── .gitignore
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Design Principles

- **Cinematic** — Visual language inspired by film
- **Dark-first** — Designed for dark viewing environments
- **Typography-forward** — Cinzel display, Inter UI, JetBrains Mono code
- **Amber accent** — Warm, film-like highlight color
- **No generic SaaS patterns** — Avoids dashboard aesthetics
- **Respect for content** — UI recedes, movies and writing take focus

## Contributing

This project is in early development. Contribution guidelines will be added as the project matures.

## License

MIT License — see LICENSE file for details.

## Links

- [Website](https://cinevault.app) (coming soon)
- [Twitter](https://twitter.com/cinevault)
- [GitHub](https://github.com/yourusername/cinevault)
- [Discord](https://discord.gg/cinevault)
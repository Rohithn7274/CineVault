import { Button, Container } from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="relative pt-16">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 via-zinc-950/10 to-zinc-950/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent" />
          
          <Container className="relative z-10 py-20 md:py-32 text-center">
            <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-600/10 border border-amber-600/20 text-amber-400 text-sm font-medium animate-slide-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                </span>
                Early Access — Join the Waitlist
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-50 animate-slide-up" style={{ animationDelay: "100ms" }}>
                <span className="block">CineVault</span>
              </h1>

              <p className="font-display text-xl md:text-2xl lg:text-3xl font-medium text-amber-400 tracking-tight animate-slide-up" style={{ animationDelay: "200ms" }}>
                &ldquo;Your movies. Your memories. Your interpretations.&rdquo;
              </p>

              <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "300ms" }}>
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed text-balance">
                  CineVault is a social movie diary and discussion platform for film lovers.
                  <br />
                  <br />
                  Don&rsquo;t just tell us whether a movie is good. Show us what you noticed, felt,
                  remembered, or interpreted. Preserve the scenes that haunted you, the lines you
                  couldn&rsquo;t forget, the themes that changed how you see the world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
                <Button size="lg" href="/waitlist">
                  Join the Waitlist
                </Button>
                <Button variant="outline" size="lg" href="/movies">
                  Explore Movies
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-500 animate-fade-in" style={{ animationDelay: "500ms" }}>
                <span>Coming soon:</span>
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">Personal Diary</span>
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">Structured Discussions</span>
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">Taste Matching</span>
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">Cinema Twin</span>
                <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-400">AI Interpretations</span>
              </div>
            </div>
          </Container>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
            <svg className="h-6 w-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        <section className="py-20 md:py-28 border-t border-zinc-800">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 mb-4">
                Built for Film Lovers
              </h2>
              <p className="text-lg text-zinc-400 leading-relaxed">
                Every feature is designed around how you actually experience cinema — not how
                algorithms think you do.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-600/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-amber-600/10 flex items-center justify-center mb-4 group-hover:bg-amber-600/20 transition-colors">
                  <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-zinc-50 mb-2">Your Personal Diary</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Log movies with rich, structured entries — not just ratings. Capture scenes,
                  quotes, themes, emotions, and interpretations in your own voice.
                </p>
              </article>

              <article className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-600/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-amber-600/10 flex items-center justify-center mb-4 group-hover:bg-amber-600/20 transition-colors">
                  <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-zinc-50 mb-2">Structured Discussions</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Move beyond comments. Start threads on specific scenes, themes, performances,
                  or interpretations. Spoiler-protected by design.
                </p>
              </article>

              <article className="group p-6 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-amber-600/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-amber-600/10 flex items-center justify-center mb-4 group-hover:bg-amber-600/20 transition-colors">
                  <svg className="h-6 w-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-display text-xl font-semibold text-zinc-50 mb-2">Taste Matching & Cinema Twin</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Find your Cinema Twin — the viewer whose taste aligns with yours most
                  precisely. Discover films through the lens of those who see what you see.
                </p>
              </article>
            </div>
          </Container>
        </section>

        <section className="py-20 md:py-28 border-t border-zinc-800">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 mb-6">
                  Intelligence That Understands Cinema
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-6">
                  Powered by NVIDIA Nemotron, CineVault&rsquo;s background intelligence doesn&rsquo;t just
                  recommend &mdash; it interprets. It surfaces connections across your diary, finds
                  thematic threads you missed, and helps articulate what a film meant to you.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-zinc-300">AI-powered thematic analysis of your entries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-zinc-300">Cross-film pattern recognition in your taste</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-zinc-300">Interpretation suggestions, never spoilers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-600/10 flex items-center justify-center">
                      <svg className="h-5 w-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-zinc-300">Cinema Twin matching via semantic embeddings</span>
                  </li>
                </ul>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 via-zinc-900 to-zinc-950" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-amber-600/10 flex items-center justify-center border border-amber-600/20">
                        <svg className="h-12 w-12 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-zinc-400 text-sm">Background Intelligence Demo</p>
                      <p className="text-zinc-600 text-xs mt-1">Nemotron-powered analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 md:py-28 border-t border-zinc-800 bg-zinc-900/30">
          <Container className="text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 mb-6">
              Ready to Preserve Your Cinema Memories?
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join thousands of film lovers building the most thoughtful movie community on the
              web. No algorithms deciding what you watch — just you, your interpretations, and
              the films that moved you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" href="/waitlist">
                Join the Waitlist
              </Button>
              <Button variant="ghost" size="lg" href="/about">
                Learn More
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <footer className="border-t border-zinc-800 bg-zinc-950">
        <Container className="py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} CineVault. Built for film lovers.
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-sm text-zinc-500 hover:text-amber-400 transition-colors">
                Privacy
              </a>
              <a href="/terms" className="text-sm text-zinc-500 hover:text-amber-400 transition-colors">
                Terms
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-amber-400 transition-colors" aria-label="Discord">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.675 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 00.031.057 19.9 19.9 0 005.992 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 01.041-.106 13.107 13.107 0 001.872-.892.077.077 0 01.077.016 13.291 13.291 0 001.973.892.077.077 0 01.04.107c.36.698.772 1.364 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.001-3.03.077.077 0 00.032-.054c.44-4.678-.364-9.358-3.548-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
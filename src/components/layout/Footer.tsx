import { ReactNode } from "react";
import { Container } from "@/components/ui";

interface FooterProps {
  children?: ReactNode;
}

export function Footer({ children }: FooterProps) {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-100">CineVault</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Your movies. Your memories. Your interpretations.
            </p>
          </div>
          <nav className="space-y-3">
            <h4 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              <li><a href="/movies" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">Movies</a></li>
              <li><a href="/diary" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">Diary</a></li>
              <li><a href="/discussions" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">Discussions</a></li>
              <li><a href="/taste" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">Taste Matching</a></li>
            </ul>
          </nav>
          <nav className="space-y-3">
            <h4 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">About</a></li>
              <li><a href="/blog" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">Blog</a></li>
              <li><a href="/careers" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">Careers</a></li>
              <li><a href="/contact" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
          <nav className="space-y-3">
            <h4 className="text-sm font-semibold text-zinc-100 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">Terms</a></li>
              <li><a href="/cookies" className="text-sm text-zinc-400 hover:text-amber-400 transition-colors">Cookies</a></li>
            </ul>
          </nav>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} CineVault. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors" aria-label="Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors" aria-label="GitHub">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors" aria-label="Discord">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.675 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.083.083 0 00.031.057 19.9 19.9 0 005.992 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 01.041-.106 13.107 13.107 0 001.872-.892.077.077 0 01.077.016 13.291 13.291 0 001.973.892.077.077 0 01.04.107c.36.698.772 1.364 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.001-3.03.077.077 0 00.032-.054c.44-4.678-.364-9.358-3.548-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
            </a>
          </div>
        </div>
        {children}
      </Container>
    </footer>
  );
}
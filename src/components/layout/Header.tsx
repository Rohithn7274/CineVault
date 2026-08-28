import { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui";

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="CineVault Home">
          <span className="text-xl font-bold tracking-tight text-amber-400">CineVault</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/movies" className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors">
            Movies
          </Link>
          <Link href="/diary" className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors">
            Diary
          </Link>
          <Link href="/discussions" className="text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors">
            Discussions
          </Link>
          {children}
        </nav>
      </Container>
    </header>
  );
}
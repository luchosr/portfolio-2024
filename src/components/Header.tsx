import React from 'react';

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container mx-auto flex max-w-3xl items-center justify-between">
        <div>
          <a href="/" className="font-serif text-2xl font-bold">
            LR
          </a>
        </div>

        <ul className="flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10">
          <li className="transition-colors hover:text-foreground">
            <a href="/posts">Posts</a>
          </li>
          <li className="transition-colors hover:text-foreground">
            <a href="/projects">Projects</a>
          </li>
          <li className="transition-colors hover:text-foreground">
            <a href="/contact">Contact</a>
          </li>
        </ul>

        <div>{/* <ThemeToggle /> */}</div>
      </nav>
    </header>
  );
}

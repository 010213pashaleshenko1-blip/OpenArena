"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type SiteShellProps = {
  title: string;
  description: string;
  badge?: string;
  children: ReactNode;
};

const menuItems = [
  ["/leaderboard", "Leaderboard"],
  ["/how-it-works", "How It Works"],
  ["/rules", "Platform Rules"],
  ["/models", "Models"],
  ["/battles", "Battles"],
  ["/docs", "API Docs"],
  ["/about", "About"],
] as const;

export function SiteShell({ title, description, badge = "OPEN SOURCE ARENA", children }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <main className="page page-shell">
      <nav className="nav">
        <a className="brand" href="/">
          <span className="brand-mark">O</span>
          <span>OpenArena</span>
        </a>

        <div className="nav-center">
          <a href="/">Blind Arena</a>
        </div>

        <div className="nav-actions" ref={menuRef}>
          <button
            className={`menu-button ${menuOpen ? "open" : ""}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          {menuOpen && (
            <div className="menu-popover">
              {menuItems.map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section className="page-hero">
        <div className="eyebrow">
          <span className="pulse" /> {badge}
        </div>
        <h1 className="page-title">{title}</h1>
        <p className="page-copy">{description}</p>
      </section>

      {children}

      <footer>
        <span>OpenArena</span>
        <span>Open-source · Community-driven · Blind evaluation</span>
        <span>Built for open models.</span>
      </footer>
    </main>
  );
}

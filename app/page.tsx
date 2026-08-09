"use client";

import { useEffect, useRef, useState } from "react";

const examples = [
  "Explain quantum computing in simple terms",
  "Write a fast TypeScript function to deduplicate an array",
  "What makes a good open-source project?",
];

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [submitted, setSubmitted] = useState(false);
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
    <main className="page">
      <nav className="nav">
        <a className="brand" href="/">
          <span className="brand-mark">O</span>
          <span>OpenArena</span>
        </a>

        <div className="nav-center">
          <a className="active" href="/">
            Blind Arena
          </a>
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
              <a href="/leaderboard" onClick={() => setMenuOpen(false)}>
                Leaderboard
              </a>
              <a href="/how-it-works" onClick={() => setMenuOpen(false)}>
                How It Works
              </a>
              <a href="/rules" onClick={() => setMenuOpen(false)}>
                Platform Rules
              </a>
              <a href="/models" onClick={() => setMenuOpen(false)}>
                Models
              </a>
              <a href="/battles" onClick={() => setMenuOpen(false)}>
                Battles
              </a>
              <a href="/docs" onClick={() => setMenuOpen(false)}>
                API Docs
              </a>
              <a href="/about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </div>
          )}
        </div>
      </nav>

      <section className="hero">
        <div className="eyebrow">
          <span className="pulse" /> OPEN-SOURCE AI ARENA
        </div>
        <h1>
          Which model is
          <br />
          <span>better?</span>
        </h1>
        <p className="subtitle">
          Ask a question. Two open models answer.
          <br />You decide who wins.
        </p>

        <div className="composer-wrap">
          <div className="composer">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask anything..."
              rows={3}
            />
            <div className="composer-footer">
              <span className="hint">Blind battle · Models are hidden until you vote</span>
              <button className="send-button" onClick={() => prompt.trim() && setSubmitted(true)}>
                {submitted ? "Battle ready" : "Start battle"}
                <span>→</span>
              </button>
            </div>
          </div>
          <div className="examples">
            <span>Try:</span>
            {examples.map((example) => (
              <button key={example} onClick={() => setPrompt(example)}>
                {example}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="preview-grid" id="blind-arena">
        <div className="preview-card arena-card">
          <div className="card-top">
            <span>BLIND ARENA</span>
            <span>● LIVE</span>
          </div>
          <div className="response-columns">
            <article>
              <span className="model-pill">MODEL A</span>
              <div className="skeleton wide" />
              <div className="skeleton" />
              <div className="skeleton short" />
            </article>
            <article>
              <span className="model-pill">MODEL B</span>
              <div className="skeleton wide" />
              <div className="skeleton" />
              <div className="skeleton short" />
            </article>
          </div>
          <div className="vote-row">
            <button>← Model A</button>
            <button>Both equal</button>
            <button>Model B →</button>
          </div>
        </div>

        <div className="side-stack">
          <article className="info-card compact-card">
            <div className="card-top">
              <span>MODEL ACCESS</span>
            </div>
            <p>
              Light models run on OpenArena infrastructure. Heavy models must expose a public API
              for evaluation.
            </p>
          </article>

          <article className="info-card compact-card">
            <div className="card-top">
              <span>PLATFORM RULES</span>
            </div>
            <p>
              No user registration. Only open-source or open-weight models can enter the arena.
            </p>
          </article>
        </div>
      </section>

      <footer id="about">
        <span>OpenArena</span>
        <span>Open-source · Community-driven · Blind evaluation</span>
        <span>Built for open models.</span>
      </footer>
    </main>
  );
}

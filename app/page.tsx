"use client";

import { useEffect, useRef, useState } from "react";

const examples = [
  "Explain quantum computing in simple terms",
  "Write a fast TypeScript function to deduplicate an array",
  "What makes a good open-source project?",
];

const leaderboard = [
  ["01", "Open Model Alpha", "1342"],
  ["02", "Open Model Beta", "1318"],
  ["03", "Open Model Gamma", "1297"],
  ["04", "Open Model Delta", "1276"],
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
          <a className="active" href="#blind-arena">
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
              <a href="#leaderboard" onClick={() => setMenuOpen(false)}>
                Leaderboard
              </a>
              <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
                How It Works
              </a>
              <a href="#platform-rules" onClick={() => setMenuOpen(false)}>
                Platform Rules
              </a>
              <a href="#models" onClick={() => setMenuOpen(false)}>
                Models
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
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

      <section className="battle-preview" id="how-it-works">
        <div className="section-label">HOW IT WORKS</div>
        <div className="steps">
          <div className="step">
            <b>01</b>
            <h3>Ask</h3>
            <p>Send any prompt to the arena.</p>
          </div>
          <div className="step">
            <b>02</b>
            <h3>Compare</h3>
            <p>Two anonymous open models respond.</p>
          </div>
          <div className="step">
            <b>03</b>
            <h3>Vote</h3>
            <p>Pick the answer you think is better.</p>
          </div>
          <div className="step">
            <b>04</b>
            <h3>Rank</h3>
            <p>Your vote helps shape the ELO leaderboard.</p>
          </div>
        </div>
      </section>

      <section className="preview-grid" id="blind-arena">
        <div className="preview-card">
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

        <div className="rank-card" id="leaderboard">
          <div className="card-top">
            <span>LEADERBOARD</span>
            <a href="#leaderboard">View all →</a>
          </div>
          {leaderboard.map(([rank, name, elo]) => (
            <div className="rank-row" key={rank}>
              <b>{rank}</b>
              <span>{name}</span>
              <strong>{elo}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="info-grid">
        <article className="info-card" id="platform-rules">
          <div className="card-top">
            <span>PLATFORM RULES</span>
          </div>
          <p>
            OpenArena is invite-free for users. Only open-source or open-weight models are listed.
            Lightweight models are hosted on OpenArena infrastructure. Heavy models must provide a
            public API endpoint for evaluation.
          </p>
        </article>

        <article className="info-card" id="models">
          <div className="card-top">
            <span>MODEL ACCESS</span>
          </div>
          <p>
            Every model must disclose its license, context length, runtime requirements, and hosting
            path before entering the arena.
          </p>
        </article>
      </section>

      <footer id="about">
        <span>OpenArena</span>
        <span>Open-source · Community-driven · Blind evaluation</span>
        <span>Built for open models.</span>
      </footer>
    </main>
  );
}

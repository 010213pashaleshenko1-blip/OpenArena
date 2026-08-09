"use client";

import { useState } from "react";

const examples = [
  "Explain quantum computing in simple terms",
  "Write a fast TypeScript function to deduplicate an array",
  "What makes a good open-source project?",
];

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="page">
      <nav className="nav">
        <a className="brand" href="/">
          <span className="brand-mark">O</span>
          <span>OpenArena</span>
        </a>
        <div className="nav-center"><span className="active">Blind Arena</span></div>
        <div className="nav-actions"><a className="menu-button" href="/rules" aria-label="Platform rules">Rules</a></div>
      </nav>

      <section className="hero">
        <div className="eyebrow"><span className="pulse" /> OPEN-SOURCE AI ARENA</div>
        <h1>Which model is<br /><span>better?</span></h1>
        <p className="subtitle">Ask a question. Two open models answer.<br />You decide who wins.</p>
        <div className="composer-wrap">
          <div className="composer">
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Ask anything..." rows={3} />
            <div className="composer-footer">
              <span className="hint">Blind battle · Models are hidden until you vote</span>
              <button className="send-button" onClick={() => prompt.trim() && setSubmitted(true)}>{submitted ? "Battle ready" : "Start battle"}<span>→</span></button>
            </div>
          </div>
          <div className="examples"><span>Try:</span>{examples.map((example) => <button key={example} onClick={() => setPrompt(example)}>{example}</button>)}</div>
        </div>
      </section>

      <section className="preview-grid">
        <div className="preview-card arena-card">
          <div className="card-top"><span>BLIND ARENA</span><span>● LIVE</span></div>
          <div className="response-columns">
            <article><span className="model-pill">MODEL A</span><div className="skeleton wide" /><div className="skeleton" /><div className="skeleton short" /></article>
            <article><span className="model-pill">MODEL B</span><div className="skeleton wide" /><div className="skeleton" /><div className="skeleton short" /></article>
          </div>
          <div className="vote-row"><button>← Model A</button><button>Both equal</button><button>Model B →</button></div>
        </div>

        <article className="info-card compact-card">
          <div className="card-top"><span>PLATFORM RULES</span><a href="/rules">View rules →</a></div>
          <p>OpenArena is free to use with no user registration. Only open-source or open-weight models can enter the arena. Lightweight models may be hosted by OpenArena; heavy models must provide an API endpoint for evaluation.</p>
        </article>
      </section>

      <footer><span>OpenArena</span><span>Open-source · Community-driven · Blind evaluation</span><span>Built for open models.</span></footer>
    </main>
  );
}

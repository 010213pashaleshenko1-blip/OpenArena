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
        <div className="nav-links">
          <a className="active" href="/">Arena</a>
          <a href="#leaderboard">Leaderboard</a>
          <a href="#models">Models</a>
          <a href="#about">About</a>
        </div>
        <button className="ghost-button">Sign in</button>
      </nav>

      <section className="hero">
        <div className="eyebrow"><span className="pulse" /> OPEN-SOURCE AI ARENA</div>
        <h1>Which model is<br /><span>better?</span></h1>
        <p className="subtitle">Ask a question. Two open models answer.<br />You decide who wins.</p>

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
                {submitted ? "Battle ready" : "Start battle"}<span>→</span>
              </button>
            </div>
          </div>
          <div className="examples">
            <span>Try:</span>
            {examples.map((example) => (
              <button key={example} onClick={() => setPrompt(example)}>{example}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="battle-preview">
        <div className="section-label">HOW IT WORKS</div>
        <div className="steps">
          <div className="step"><b>01</b><h3>Ask</h3><p>Send any prompt to the arena.</p></div>
          <div className="step"><b>02</b><h3>Compare</h3><p>Two anonymous open models respond.</p></div>
          <div className="step"><b>03</b><h3>Vote</h3><p>Pick the answer you think is better.</p></div>
          <div className="step"><b>04</b><h3>Rank</h3><p>Your vote helps shape the ELO leaderboard.</p></div>
        </div>
      </section>

      <section className="preview-grid">
        <div className="preview-card">
          <div className="card-top"><span>BLIND BATTLE</span><span>● LIVE</span></div>
          <div className="response-columns">
            <article><span className="model-pill">MODEL A</span><div className="skeleton wide" /><div className="skeleton" /><div className="skeleton short" /></article>
            <article><span className="model-pill">MODEL B</span><div className="skeleton wide" /><div className="skeleton" /><div className="skeleton short" /></article>
          </div>
          <div className="vote-row"><button>← Model A</button><button>Both equal</button><button>Model B →</button></div>
        </div>
        <div className="rank-card" id="leaderboard">
          <div className="card-top"><span>LEADERBOARD</span><a href="#leaderboard">View all →</a></div>
          {[['01','Open Model Alpha','1342'],['02','Open Model Beta','1318'],['03','Open Model Gamma','1297'],['04','Open Model Delta','1276']].map(([rank, name, elo]) => (
            <div className="rank-row" key={rank}><b>{rank}</b><span>{name}</span><strong>{elo}</strong></div>
          ))}
        </div>
      </section>

      <footer id="about"><span>OpenArena</span><span>Open-source · Community-driven · Blind evaluation</span><span>Built for open models.</span></footer>
    </main>
  );
}

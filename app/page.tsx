"use client";

import { useEffect, useRef, useState } from "react";

const menuItems = [
  ["/leaderboard", "Leaderboard"],
  ["/rules", "Platform Rules"],
  ["/how-it-works", "How It Works"],
  ["/models", "Models"],
  ["/battles", "Battles"],
  ["/docs", "API Docs"],
  ["/about", "About"],
] as const;

const models = ["GLM-5.2", "Qwen-3.8-Max", "GLM-5.1", "Qwen-3.7-Max", "Qwen-3.7-Plus", "DeepSeek-4-Pro"];

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("GLM-5.2");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setMenuOpen(false);
    };
    const onEsc = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
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
        <a className="brand" href="/"><span className="brand-mark">O</span><span>OpenArena</span></a>
        <div className="nav-center"><span className="active">Arena</span></div>
        <div className="nav-actions" ref={menuRef}>
          <button className={`menu-button ${menuOpen ? "open" : ""}`} aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            <span /><span /><span />
          </button>
          {menuOpen && <div className="menu-popover">{menuItems.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>}
        </div>
      </nav>

      <section className="chat-page">
        <div className="chat-header">
          <div><span className="eyebrow">OPENARENA</span><h1>Chat</h1></div>
          <label className="model-select-label">Model<select value={model} onChange={(e) => setModel(e.target.value)}>{models.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>

        <div className="chat-empty">
          <div className="chat-mark">O</div>
          <h2>What can I help you with?</h2>
          <p>Choose an open model and start a conversation.</p>
        </div>

        <div className="composer-wrap chat-composer">
          <div className="composer">
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder={`Message ${model}...`} rows={3} />
            <div className="composer-footer">
              <span className="hint">Open-source model · No account required</span>
              <button className="send-button" disabled={!prompt.trim()}>Send <span>→</span></button>
            </div>
          </div>
        </div>
      </section>

      <footer><span>OpenArena</span><span>Open-source · Community-driven</span><span>Built for open models.</span></footer>
    </main>
  );
}

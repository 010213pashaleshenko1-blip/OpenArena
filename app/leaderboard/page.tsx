"use client";

import { useState } from "react";
import { SiteShell } from "../components/site-shell";

const categories = ["Coding", "Chat", "Image", "Vision", "Image-to-Text", "Video"];

type Model = { rank: string; name: string; elo: string; battles: string; icon: string; status?: string };

const rankings: Record<string, Model[]> = {
  Coding: [
    { rank: "01", name: "glm-5.2", elo: "1418", battles: "8,421", icon: "G", status: "seted by system" },
    { rank: "02", name: "qwen-3.8-max", elo: "1372", battles: "7,912", icon: "Q" },
    { rank: "03", name: "glm-5.1", elo: "1319", battles: "6,804", icon: "G" },
    { rank: "04", name: "qwen-3.7-max", elo: "1277", battles: "5,991", icon: "Q" },
    { rank: "05", name: "qwen-3.7-plus", elo: "1248", battles: "5,421", icon: "Q" },
    { rank: "06", name: "deepseek-4-pro", elo: "1219", battles: "4,887", icon: "D" },
  ],
  Chat: [
    { rank: "01", name: "Open Model Beta", elo: "1431", battles: "12,481", icon: "B" },
    { rank: "02", name: "Open Model Alpha", elo: "1398", battles: "11,205", icon: "A" },
    { rank: "03", name: "Open Model Delta", elo: "1324", battles: "9,842", icon: "D" },
    { rank: "04", name: "Open Model Gamma", elo: "1291", battles: "8,714", icon: "G" },
  ],
  Image: [
    { rank: "01", name: "Open Vision Alpha", elo: "1386", battles: "4,281", icon: "A" },
    { rank: "02", name: "Open Vision Beta", elo: "1340", battles: "3,918", icon: "B" },
    { rank: "03", name: "Open Model Gamma", elo: "1297", battles: "3,421", icon: "G" },
    { rank: "04", name: "Open Vision Delta", elo: "1258", battles: "2,884", icon: "D" },
  ],
  Vision: [
    { rank: "01", name: "Open Vision Alpha", elo: "1422", battles: "5,182", icon: "A" },
    { rank: "02", name: "Open Model Beta", elo: "1364", battles: "4,701", icon: "B" },
    { rank: "03", name: "Open Vision Gamma", elo: "1321", battles: "4,116", icon: "G" },
    { rank: "04", name: "Open Model Alpha", elo: "1289", battles: "3,907", icon: "A" },
  ],
  "Image-to-Text": [
    { rank: "01", name: "Open Vision Beta", elo: "1397", battles: "3,921", icon: "B" },
    { rank: "02", name: "Open Vision Alpha", elo: "1378", battles: "3,604", icon: "A" },
    { rank: "03", name: "Open Model Gamma", elo: "1306", battles: "3,102", icon: "G" },
    { rank: "04", name: "Open Vision Delta", elo: "1268", battles: "2,744", icon: "D" },
  ],
  Video: [
    { rank: "01", name: "Open Video Alpha", elo: "1369", battles: "2,481", icon: "A" },
    { rank: "02", name: "Open Video Beta", elo: "1331", battles: "2,104", icon: "B" },
    { rank: "03", name: "Open Vision Gamma", elo: "1288", battles: "1,892", icon: "G" },
    { rank: "04", name: "Open Video Delta", elo: "1247", battles: "1,504", icon: "D" },
  ],
};

export default function LeaderboardPage() {
  const [category, setCategory] = useState("Coding");
  const rows = rankings[category];

  return (
    <SiteShell title="Leaderboard" description="Community votes shape the rankings across different model capabilities." badge="MODEL RANKINGS">
      <div className="category-tabs" role="tablist" aria-label="Leaderboard categories">
        {categories.map((item) => (
          <button key={item} className={category === item ? "selected" : ""} onClick={() => setCategory(item)} role="tab" aria-selected={category === item}>
            {item}
          </button>
        ))}
      </div>
      <section className="content-grid">
        <article className="content-card">
          <h2>{category} ranking</h2>
          {rows.map((model) => (
            <div className="rank-row" key={model.rank}>
              <b>{model.rank}</b>
              <span className="model-name">
                <span className="model-icon">{model.icon}</span>
                <span>
                  <span className="model-title">{model.name}</span>
                  {model.status && <small>{model.status}</small>}
                </span>
              </span>
              <strong>{model.elo} · {model.battles}</strong>
            </div>
          ))}
        </article>
      </section>
    </SiteShell>
  );
}

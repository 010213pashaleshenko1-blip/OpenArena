"use client";

import { useState } from "react";
import { SiteShell } from "../components/site-shell";

const categories = ["Coding", "Chat", "Image", "Vision", "Image-to-Text", "Video"];

const rankings: Record<string, string[][]> = {
  Coding: [["01", "Open Model Alpha", "1418", "8,421"], ["02", "Open Model Beta", "1372", "7,912"], ["03", "Open Model Gamma", "1319", "6,804"], ["04", "Open Model Delta", "1277", "5,991"]],
  Chat: [["01", "Open Model Beta", "1431", "12,481"], ["02", "Open Model Alpha", "1398", "11,205"], ["03", "Open Model Delta", "1324", "9,842"], ["04", "Open Model Gamma", "1291", "8,714"]],
  Image: [["01", "Open Vision Alpha", "1386", "4,281"], ["02", "Open Vision Beta", "1340", "3,918"], ["03", "Open Model Gamma", "1297", "3,421"], ["04", "Open Vision Delta", "1258", "2,884"]],
  Vision: [["01", "Open Vision Alpha", "1422", "5,182"], ["02", "Open Model Beta", "1364", "4,701"], ["03", "Open Vision Gamma", "1321", "4,116"], ["04", "Open Model Alpha", "1289", "3,907"]],
  "Image-to-Text": [["01", "Open Vision Beta", "1397", "3,921"], ["02", "Open Vision Alpha", "1378", "3,604"], ["03", "Open Model Gamma", "1306", "3,102"], ["04", "Open Vision Delta", "1268", "2,744"]],
  Video: [["01", "Open Video Alpha", "1369", "2,481"], ["02", "Open Video Beta", "1331", "2,104"], ["03", "Open Vision Gamma", "1288", "1,892"], ["04", "Open Video Delta", "1247", "1,504"]],
};

export default function LeaderboardPage() {
  const [category, setCategory] = useState("Coding");
  const rows = rankings[category];

  return (
    <SiteShell title="Leaderboard" description="Community votes shape the rankings across different model capabilities." badge="MODEL RANKINGS">
      <div className="category-tabs" role="tablist" aria-label="Leaderboard categories">
        {categories.map((item) => <button key={item} className={category === item ? "selected" : ""} onClick={() => setCategory(item)} role="tab" aria-selected={category === item}>{item}</button>)}
      </div>
      <section className="content-grid">
        <article className="content-card">
          <h2>{category} ranking</h2>
          {rows.map(([rank, name, elo, battles]) => <div className="rank-row" key={rank}><b>{rank}</b><span>{name}</span><strong>{elo} · {battles}</strong></div>)}
        </article>
      </section>
    </SiteShell>
  );
}

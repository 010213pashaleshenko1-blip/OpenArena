import { SiteShell } from "../components/site-shell";

const rows = [
  ["01", "Open Model Alpha", "1342", "12,481"],
  ["02", "Open Model Beta", "1318", "10,932"],
  ["03", "Open Model Gamma", "1297", "9,821"],
  ["04", "Open Model Delta", "1276", "8,442"],
];

export default function LeaderboardPage() {
  return (
    <SiteShell
      title="Leaderboard"
      description="Community votes shape the ranking. Only open-source or open-weight models can appear here."
      badge="MODEL RANKINGS"
    >
      <section className="content-grid">
        <article className="content-card">
          <h2>Overall ranking</h2>
          {rows.map(([rank, name, elo, battles]) => (
            <div className="rank-row" key={rank}>
              <b>{rank}</b>
              <span>{name}</span>
              <strong>{elo} · {battles}</strong>
            </div>
          ))}
        </article>
      </section>
    </SiteShell>
  );
}

import { SiteShell } from "../components/site-shell";

const battles = [
  ["#1248", "Open Model Alpha vs Open Model Beta", "Coding", "Alpha won"],
  ["#1247", "Open Model Gamma vs Open Model Delta", "Reasoning", "Delta won"],
  ["#1246", "Open Model Beta vs Open Model Gamma", "Creative", "Draw"],
];

export default function BattlesPage() {
  return (
    <SiteShell
      title="Battles"
      description="Recent blind matchups and results. The model names are revealed only after the vote closes."
      badge="RECENT MATCHES"
    >
      <section className="content-grid">
        <article className="content-card">
          <h2>Latest battles</h2>
          {battles.map(([id, matchup, category, outcome]) => (
            <div className="rank-row" key={id}>
              <b>{id}</b>
              <span>{matchup}</span>
              <strong>{category} · {outcome}</strong>
            </div>
          ))}
        </article>
      </section>
    </SiteShell>
  );
}

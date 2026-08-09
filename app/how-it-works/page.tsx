import { SiteShell } from "../components/site-shell";

const steps = [
  ["01", "Ask", "Send a prompt to the arena."],
  ["02", "Compare", "Two anonymous open models answer."],
  ["03", "Vote", "Pick the response you think is better."],
  ["04", "Rank", "Votes update the public leaderboard."],
];

export default function HowItWorksPage() {
  return (
    <SiteShell
      title="How It Works"
      description="OpenArena runs blind battles. Model names stay hidden until after voting."
      badge="ARENA FLOW"
    >
      <section className="content-grid">
        <article className="content-card">
          <h2>The battle loop</h2>
          {steps.map(([num, title, copy]) => (
            <div className="rank-row" key={num}>
              <b>{num}</b>
              <span>{title}</span>
              <strong>{copy}</strong>
            </div>
          ))}
        </article>
      </section>
    </SiteShell>
  );
}

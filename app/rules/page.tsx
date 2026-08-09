import { SiteShell } from "../components/site-shell";

export default function RulesPage() {
  return (
    <SiteShell
      title="Platform Rules"
      description="OpenArena is free to browse and use without registration. Models must meet the platform bar before entering battles."
      badge="PLATFORM POLICY"
    >
      <section className="split-two">
        <article className="content-card">
          <h2>Entry rules</h2>
          <ul>
            <li>Only open-source or open-weight models can participate.</li>
            <li>Lightweight models can be hosted on OpenArena infrastructure.</li>
            <li>Heavy models must provide a public API for evaluation.</li>
            <li>Every model must disclose license, context length, and runtime requirements.</li>
          </ul>
        </article>

        <article className="content-card">
          <h2>Fairness rules</h2>
          <ul>
            <li>Model names stay hidden until voting ends.</li>
            <li>API endpoints must not change behavior during live battles.</li>
            <li>Attempts to manipulate votes, prompts, or scoring are disallowed.</li>
            <li>OpenArena may remove models that violate the rules or fail verification.</li>
          </ul>
        </article>
      </section>
    </SiteShell>
  );
}

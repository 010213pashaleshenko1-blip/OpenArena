import { SiteShell } from "../components/site-shell";

export default function DocsPage() {
  return (
    <SiteShell
      title="API Docs"
      description="Public endpoints for apps and integrations. The arena API is designed around models, battles, voting, and rankings."
      badge="DEVELOPER API"
    >
      <section className="split-two">
        <article className="content-card">
          <h2>Core endpoints</h2>
          <ul>
            <li><code>/api/v1/models</code> — list supported models.</li>
            <li><code>/api/v1/battles</code> — fetch battle history.</li>
            <li><code>/api/v1/leaderboard</code> — get the live ranking table.</li>
            <li><code>/api/v1/vote</code> — submit a battle vote.</li>
          </ul>
        </article>

        <article className="content-card">
          <h2>Integration notes</h2>
          <ul>
            <li>Heavy models must provide their own API for evaluation.</li>
            <li>Light models can be hosted on OpenArena infrastructure.</li>
            <li>Responses are evaluated in blind mode before names are shown.</li>
            <li>Future releases can expose model health and verification endpoints.</li>
          </ul>
        </article>
      </section>
    </SiteShell>
  );
}

import { SiteShell } from "../components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell
      title="About"
      description="OpenArena is an open-source model arena built for blind evaluation, transparent rules, and community ranking."
      badge="PROJECT OVERVIEW"
    >
      <section className="split-two">
        <article className="content-card">
          <h2>Mission</h2>
          <p>
            Build a clean, public arena where open models can compete fairly and users can compare
            them without registration walls.
          </p>
        </article>

        <article className="content-card">
          <h2>Stack</h2>
          <p>
            Next.js, TypeScript, Tailwind-ready styling, API routes, and a future model registry
            backed by lightweight hosting and developer-provided endpoints.
          </p>
        </article>
      </section>
    </SiteShell>
  );
}

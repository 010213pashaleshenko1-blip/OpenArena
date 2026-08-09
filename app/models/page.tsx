import { SiteShell } from "../components/site-shell";

const models = [
  ["Open Model Alpha", "7B", "Host on OpenArena"],
  ["Open Model Beta", "13B", "Host on OpenArena"],
  ["Open Model Gamma", "34B", "Developer API"],
  ["Open Model Delta", "70B+", "Developer API"],
];

export default function ModelsPage() {
  return (
    <SiteShell
      title="Models"
      description="A registry of open models that can enter the arena. Small models can be hosted here; large ones bring their own API."
      badge="MODEL REGISTRY"
    >
      <section className="content-grid">
        <article className="content-card">
          <h2>Admission standard</h2>
          {models.map(([name, size, path]) => (
            <div className="rank-row" key={name}>
              <b>{size}</b>
              <span>{name}</span>
              <strong>{path}</strong>
            </div>
          ))}
        </article>
      </section>
    </SiteShell>
  );
}

import { founders } from "@/data/site";

export function FounderCards() {
  return (
    <div className="founder-grid" aria-label="SparkLifeLab founders">
      {founders.map((founder) => (
        <article className="founder-card" key={founder.name}>
          <div className="founder-avatar" aria-hidden="true">
            {founder.initials}
          </div>
          <h3>{founder.name}</h3>
          <p>{founder.role}</p>
        </article>
      ))}
    </div>
  );
}

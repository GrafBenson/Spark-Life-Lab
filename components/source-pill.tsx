type SourcePillProps = {
  source: string;
  label: string;
  href?: string;
  iconKey: "google" | "delikatessen" | "lieferando" | "service";
  className?: string;
};

function getIcon(iconKey: SourcePillProps["iconKey"]) {
  if (iconKey === "google") {
    return (
      <span aria-hidden="true" className="flex items-center gap-0.5">
        <span className="text-[#4285f4]">G</span>
        <span className="text-[#db4437]">o</span>
        <span className="text-[#f4b400]">o</span>
        <span className="text-[#4285f4]">g</span>
        <span className="text-[#0f9d58]">l</span>
        <span className="text-[#db4437]">e</span>
      </span>
    );
  }

  if (iconKey === "delikatessen") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[rgba(164,65,43,0.12)] px-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[color:var(--color-spice)]"
      >
        DE
      </span>
    );
  }

  if (iconKey === "lieferando") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[#ff7a00] px-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white"
      >
        LI
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-[rgba(164,65,43,0.12)] px-2 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[color:var(--color-spice)]"
    >
      K
    </span>
  );
}

function getContent({
  source,
  label,
  iconKey,
}: Omit<SourcePillProps, "href" | "className">) {
  return (
    <>
      <span className="inline-flex items-center gap-2 rounded-full bg-white/92 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-ink)]">
        {getIcon(iconKey)}
        <span>{source}</span>
      </span>
      <span className="text-sm font-semibold leading-6 text-[color:var(--color-ink)]">
        {label}
      </span>
    </>
  );
}

export function SourcePill({
  source,
  label,
  href,
  iconKey,
  className = "",
}: SourcePillProps) {
  const classes = [
    "inline-flex items-center gap-3 rounded-[1.35rem] border border-[rgba(106,74,57,0.12)] bg-[rgba(255,252,247,0.9)] px-3 py-2 shadow-[0_10px_28px_rgba(84,45,28,0.06)]",
    href
      ? "hover:-translate-y-0.5 hover:border-[rgba(164,65,43,0.24)] hover:bg-white"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {getContent({ source, label, iconKey })}
      </a>
    );
  }

  return (
    <span className={classes}>{getContent({ source, label, iconKey })}</span>
  );
}

export function SectionHeading({
  id,
  label,
  title,
  subtitle,
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div id={id} className="mb-12 scroll-mt-28">
      <p className="font-mono text-sm font-medium uppercase tracking-widest text-cyan-400">
        {label}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>
      )}
    </div>
  );
}

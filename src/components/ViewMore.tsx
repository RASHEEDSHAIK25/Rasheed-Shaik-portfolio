"use client";

import { useEffect, useState, type ReactNode } from "react";

export function ViewMore({
  total,
  initial = 4,
  children,
  className = "",
  resetKey,
}: {
  total: number;
  initial?: number;
  children: (visibleCount: number) => ReactNode;
  className?: string;
  /** Change this to collapse again (e.g. filter tab) */
  resetKey?: string | number;
}) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [resetKey]);
  const visible = expanded ? total : Math.min(initial, total);
  const hidden = total - initial;

  if (total <= initial) {
    return <div className={className}>{children(total)}</div>;
  }

  return (
    <div className={className}>
      {children(visible)}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          className="rounded-full border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-medium text-slate-300 transition hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300"
        >
          {expanded
            ? "Show less ↑"
            : `View more (${hidden} more)`}
        </button>
      </div>
    </div>
  );
}

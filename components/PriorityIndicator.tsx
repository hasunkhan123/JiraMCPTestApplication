"use client";

const PRIORITY_STYLES: Record<
  string,
  { label: string; className: string; icon: "up" | "equal" | "down" }
> = {
  high: { label: "High", className: "text-red-300", icon: "up" },
  medium: { label: "Medium", className: "text-amber-300", icon: "equal" },
  low: { label: "Low", className: "text-emerald-300", icon: "down" }
};

function PriorityIcon({ type }: { type: "up" | "equal" | "down" }) {
  if (type === "equal") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="h-3.5 w-3.5"
        fill="currentColor"
      >
        <rect x="2.5" y="4.5" width="11" height="2" rx="1" />
        <rect x="2.5" y="9.5" width="11" height="2" rx="1" />
      </svg>
    );
  }

  const rotation = type === "up" ? "rotate-0" : "rotate-180";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className={`h-3.5 w-3.5 ${rotation}`}
      fill="currentColor"
    >
      <path d="M7.2 2.5a1 1 0 0 1 1.6 0l4 5.5a1 1 0 0 1-.8 1.6H4a1 1 0 0 1-.8-1.6l4-5.5z" />
    </svg>
  );
}

export function PriorityIndicator({ priority }: { priority: string }) {
  const key = priority.toLowerCase();
  const style = PRIORITY_STYLES[key];

  if (!style) {
    return <span className="text-xs text-slate-400">{priority}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-1 text-xs ${style.className}`}>
      <PriorityIcon type={style.icon} />
      <span className="font-semibold">{style.label}</span>
    </span>
  );
}

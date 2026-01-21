import clsx from "clsx";

export function Badge({
  children,
  tone = "slate"
}: {
  children: React.ReactNode;
  tone?: "slate" | "amber" | "emerald";
}) {
  const styles = {
    slate: "bg-slate-800 text-slate-200",
    amber: "bg-amber-500/20 text-amber-200",
    emerald: "bg-emerald-500/20 text-emerald-200"
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
        styles[tone]
      )}
    >
      {children}
    </span>
  );
}

import clsx from "clsx";

export function Badge({
  children,
  tone = "slate"
}: {
  children: React.ReactNode;
  tone?: "slate" | "amber" | "emerald";
}) {
  const styles = {
    slate: "bg-slate-100 text-slate-700",
    amber: "bg-amber-100 text-amber-700",
    emerald: "bg-emerald-100 text-emerald-700"
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

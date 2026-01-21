"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LABELS: Record<string, string> = {
  tickets: "Tickets",
  requests: "Requests"
};

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join("/")}`;
    const label = LABELS[segment] ?? segment;
    const isLast = index === segments.length - 1;

    return { path, label, isLast };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-950 to-slate-900"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-6 py-3 text-sm text-slate-400">
        {segments.length === 0 ? (
          <span className="font-semibold text-slate-100">Home</span>
        ) : (
          <>
            <Link href="/" className="font-semibold text-slate-100">
              Home
            </Link>
            {crumbs.map((crumb) => (
              <div key={crumb.path} className="flex items-center gap-2">
                <span className="text-slate-600">/</span>
                {crumb.isLast ? (
                  <span className="font-semibold text-slate-100">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.path}
                    className="font-semibold text-slate-100"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </nav>
  );
}

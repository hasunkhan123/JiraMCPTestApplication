import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "../components/Header";
import { Breadcrumbs } from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Codex Jira Companion",
  description: "Codex + Jira workflow demo with governance controls."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen">
            <Header />
            <Breadcrumbs />
            <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}

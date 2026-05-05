import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = { children: ReactNode };

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-ink-900 focus:px-4 focus:py-2 focus:rounded focus:ring-2 focus:ring-coral-600"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

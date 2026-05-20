import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { pillars } from "../../lib/pillars";

function useActiveSection(): string {
  const [active, setActive] = useState<string>(pillars[0].slug);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0% -60% 0%", threshold: 0 }
    );

    pillars.forEach((p) => {
      const el = document.getElementById(p.slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

export function StickyPillarNav() {
  const active = useActiveSection();

  return (
    <nav
      aria-label="Initiatives"
      className="sticky top-16 md:top-20 z-30 bg-white border-b border-black/5"
    >
      <Container>
        <div className="flex gap-6 md:gap-8 overflow-x-auto py-4 -mx-6 px-6 md:-mx-8 md:px-8">
          {pillars.map((p) => {
            const isActive = active === p.slug;
            return (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                aria-current={isActive ? "true" : undefined}
                className={`whitespace-nowrap text-xs md:text-sm pb-1 border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2 rounded-sm ${
                  isActive
                    ? "border-coral-600 text-coral-600"
                    : "border-transparent text-ink-600 hover:text-ink-900"
                }`}
              >
                {p.tabLabel ?? p.title}
              </a>
            );
          })}
        </div>
      </Container>
    </nav>
  );
}

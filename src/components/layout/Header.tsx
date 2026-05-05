import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Logo } from "./Logo";
import { nav as NAV } from "../../lib/site";

const linkBase =
  "text-sm text-ink-900 hover:text-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2 rounded-sm";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow ${
        scrolled ? "border-b border-black/5 shadow-[0_1px_0_rgba(0,0,0,0.04)]" : ""
      }`}
    >
      <Container className="flex items-center justify-between h-16 md:h-20">
        <Link
          to="/"
          aria-label="SAHS Foundation home"
          className="focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2 rounded-sm"
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? "text-teal-600" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/get-involved#donate" variant="primary" className="px-5 py-2.5">
            Donate
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="md:hidden fixed inset-0 top-16 bg-white z-30 flex flex-col"
        >
          <Container className="py-8">
            <nav aria-label="Mobile" className="flex flex-col gap-6">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `font-serif text-2xl focus:outline-none focus:ring-2 focus:ring-coral-600 focus:ring-offset-2 rounded-sm ${
                      isActive ? "text-teal-600" : "text-ink-900"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button href="/get-involved#donate" variant="primary" className="mt-4 w-full">
                Donate
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}

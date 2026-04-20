import { useEffect, useState } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`glass rounded-full px-5 md:px-7 py-3 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "shadow-elegant" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary glow-cyan">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-background" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2 L20 7 L20 17 L12 22 L4 17 L4 7 Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <span className="font-display font-semibold tracking-tight">
              <span className="text-foreground">Jet</span>
              <span className="text-gradient-brand">Snail</span>
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full transition-colors hover:bg-foreground/5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-medium text-background shadow-elegant hover:scale-105 transition-transform"
          >
            Start a Project
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

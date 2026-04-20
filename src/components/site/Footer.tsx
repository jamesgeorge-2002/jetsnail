export const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/40">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-background" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2 L20 7 L20 17 L12 22 L4 17 L4 7 Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </span>
            <span className="font-display font-semibold">
              <span>Jet</span><span className="text-gradient-brand">Snail</span>
              <span className="text-muted-foreground font-normal text-sm ml-2">Smart Solutions</span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#process" className="hover:text-foreground transition-colors">Process</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <p className="text-xs text-muted-foreground">© 2026 JetSnail. All systems go.</p>
        </div>
      </div>
    </footer>
  );
};

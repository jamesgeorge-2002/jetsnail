import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative glass-strong rounded-[2.5rem] p-10 md:p-16 overflow-hidden text-center"
        >
          {/* Background glows */}
          <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-glow-pulse" />
          <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-secondary/30 blur-3xl animate-glow-pulse" style={{ animationDelay: "2s" }} />

          <div className="relative">
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto leading-[1.05]">
              Ready to <span className="text-gradient-brand">accelerate</span>?
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Tell us about your product. We'll respond within one business day with a
              roadmap, a team, and a kickoff date.
            </p>

            <form className="mt-10 max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 glass rounded-full px-5 py-3.5 text-sm bg-foreground/5 border border-foreground/10 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="button"
                className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-medium text-background shadow-elegant hover:scale-105 transition-transform"
              >
                Start Conversation →
              </button>
            </form>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
              <span>hello@jetsnail.io</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span>Stockholm · Remote</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
              <span>Available Q3 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

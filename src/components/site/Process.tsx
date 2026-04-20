import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Discover", d: "Workshops, audits, and a shared map of the problem space." },
  { n: "02", t: "Design", d: "Interactive prototypes, design systems, motion language." },
  { n: "03", t: "Engineer", d: "Modular code, automated tests, performance budgets." },
  { n: "04", t: "Launch", d: "Phased rollout, observability, and a velocity playbook." },
];

export const Process = () => {
  return (
    <section id="process" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="glass inline-block rounded-full px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-primary-glow mb-5">
            How we work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight">
            A process tuned for <span className="text-gradient-brand">flight</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* connector */}
          <div className="hidden md:block absolute top-12 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass rounded-3xl p-6 relative"
              >
                <div className="relative inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 mb-5">
                  <span className="font-display text-xl text-gradient-brand font-semibold">{s.n}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.t}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

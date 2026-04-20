import { Suspense } from "react";
import { motion } from "framer-motion";
import { PhoneMockupScene } from "@/components/three/PhoneMockup";

export const Showcase = () => {
  return (
    <section id="work" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 mesh-bg opacity-60 pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D phones */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="relative h-[480px] md:h-[560px] order-2 lg:order-1"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary/15 to-secondary/15 blur-3xl" />
            <Suspense fallback={null}>
              <PhoneMockupScene />
            </Suspense>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="order-1 lg:order-2"
          >
            <span className="glass inline-block rounded-full px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-primary-glow mb-5">
              Selected Work
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl leading-tight tracking-tight">
              Apps that feel <span className="text-gradient-brand">inevitable</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              From fintech challengers to wellness platforms with millions of users —
              we design and engineer mobile experiences that earn daily opens, five-star
              reviews, and a permanent place on the home screen.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Native iOS & Android with shared design systems",
                "Real-time sync, offline-first, sub-second cold starts",
                "App Store Optimization & launch strategy included",
                "Continuous delivery — ship updates weekly",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground/90">
                  <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-background text-xs font-bold">
                    ✓
                  </span>
                  <span className="text-[15px]">{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { v: "1.2s", l: "Avg. cold start" },
                { v: "60fps", l: "Render budget" },
                { v: "A+", l: "Lighthouse" },
              ].map((m) => (
                <div key={m.l} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-xl text-gradient font-semibold">{m.v}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{m.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

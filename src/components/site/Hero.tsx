import { Suspense } from "react";
import { motion } from "framer-motion";
import { SnailShellScene } from "@/components/three/SnailShell";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Mesh background glow */}
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-[60%] grid-floor pointer-events-none" />

      {/* Wind / motion lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-10%", opacity: 0 }}
            animate={{ x: "110%", opacity: [0, 0.5, 0] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, delay: i * 0.7, ease: "easeInOut" }}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{ top: `${15 + i * 12}%`, width: "40%" }}
          />
        ))}
      </div>

      <div className="container relative">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <span className="glass rounded-full px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-primary-glow">
            Smart Architecture · Jet Speed
          </span>
        </motion.div>

        {/* Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
            style={{ textShadow: "0 0 80px hsl(186 100% 55% / 0.25)" }}
          >
            <span className="text-gradient">Accelerating</span>
            <br />
            <span className="text-foreground">Digital </span>
            <span className="text-gradient-brand">Evolution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            JetSnail Smart Solutions crafts mobile apps, web platforms, and custom
            software with the precision of an engineer and the velocity of a jet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-medium text-background shadow-elegant hover:scale-105 transition-transform"
            >
              Launch Your Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-foreground hover:bg-foreground/10 transition-colors"
            >
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* 3D Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 mx-auto h-[420px] md:h-[520px] max-w-5xl"
        >
          {/* Glow halo */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-glow-pulse pointer-events-none" />
          <div className="absolute inset-10 rounded-full bg-secondary/20 blur-3xl animate-glow-pulse pointer-events-none" style={{ animationDelay: "1.5s" }} />

          <Suspense fallback={null}>
            <SnailShellScene />
          </Suspense>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
        >
          {[
            { v: "120+", l: "Apps Shipped" },
            { v: "40M+", l: "Users Reached" },
            { v: "99.9%", l: "Uptime" },
            { v: "4.9★", l: "Client Rating" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl px-4 py-5 text-center tilt-on-hover">
              <div className="font-display text-2xl md:text-3xl text-gradient-brand font-semibold">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

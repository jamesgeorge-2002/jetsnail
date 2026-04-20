import { Suspense, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ServiceIconScene } from "@/components/three/ServiceIcon";

const services = [
  {
    kind: "mobile" as const,
    title: "Mobile App Development",
    desc: "Native iOS & Android, plus React Native cross-platform builds. Pixel-perfect UI, native performance, App Store launch ready.",
    tags: ["iOS", "Android", "React Native", "Flutter"],
  },
  {
    kind: "web" as const,
    title: "Web Solutions",
    desc: "Lightning-fast marketing sites, SaaS dashboards, and progressive web apps engineered for scale and SEO dominance.",
    tags: ["Next.js", "React", "Edge", "SEO"],
  },
  {
    kind: "software" as const,
    title: "Custom Software",
    desc: "Bespoke internal tools, AI-powered platforms, and integrations that turn complex workflows into competitive advantages.",
    tags: ["AI / LLM", "APIs", "Cloud", "DevOps"],
  },
];

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
}

export const Services = () => {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="glass inline-block rounded-full px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-primary-glow mb-5">
            What We Build
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight">
            Services engineered for <span className="text-gradient-brand">velocity</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            Three pillars. One promise — software that ships fast and scales smart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
            >
              <TiltCard>
                <div className="glass-strong group relative rounded-3xl p-7 h-full overflow-hidden hover:border-primary/40 transition-colors">
                  {/* Glow */}
                  <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="h-44 -mx-3 -mt-3 mb-5">
                    <Suspense fallback={null}>
                      <ServiceIconScene kind={s.kind} />
                    </Suspense>
                  </div>

                  <h3 className="font-display text-2xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{s.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-foreground/5 border border-foreground/10 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-primary-glow font-medium">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

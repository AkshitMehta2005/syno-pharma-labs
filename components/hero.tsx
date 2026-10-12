"use client";

import { motion } from "motion/react";
import { Activity, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: ShieldCheck, title: "100% Quality & Ethics", note: "Compliant, audited manufacturing" },
  { icon: HeartHandshake, title: "Dedicated Patient Care", note: "Patient-first at every step" },
  { icon: Activity, title: "Evidence-Based", note: "Clinically backed formulations" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-hero-glow pt-28 pb-16 sm:pt-32 lg:pb-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            <Sparkles className="size-3.5" /> Togetherness in Healthcare
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
            Delivering <span className="text-gradient-brand">Ethical &amp; Evidence-Based</span>{" "}
            Healthcare Solutions
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Your trusted pharmaceutical partner committed to improving patient outcomes through
            quality, ethics, and innovation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href="#products">Explore Our Products</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contact Our Office</a>
            </Button>
          </div>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            {[
              ["14+", "Products"],
              ["6", "Therapy areas"],
              ["9–6", "Support hours"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-extrabold text-primary">{value}</dt>
                <dd className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ y: 26 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-3xl border border-border shadow-lift">
            <img
              src="/hero-banner.png"
              alt="Smiling doctor with a stethoscope in front of healthcare colleagues"
              width={668}
              height={561}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:absolute lg:-bottom-10 lg:left-4 lg:right-4 lg:mt-0">
            {stats.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.12 }}
              >
                <Card className="card-lift h-full border-border/70 bg-card/95 p-4 backdrop-blur">
                  <s.icon className="size-5 text-teal" />
                  <p className="mt-2 text-sm font-bold leading-tight text-foreground">{s.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

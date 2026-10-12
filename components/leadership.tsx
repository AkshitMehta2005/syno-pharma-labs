"use client";

import { Quote, HeartHandshake, UserRound } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./reveal";

const directors = [
  {
    name: "Mr. Satish Kumar Thakur",
    role: "Managing Director",
    note: "Two decades of building ethical distribution and doctor-first relationships.",
  },
  {
    name: "Mrs. K K Mishra",
    role: "Managing Director",
    note: "Champions quality systems, compliance and patient-centred product design.",
  },
];

const message = [
  "It is my privilege to welcome you to Syno Pharma—a company founded with a clear purpose: to contribute meaningfully to healthcare by delivering quality pharmaceutical solutions with integrity and responsibility.",
  "The pharmaceutical industry carries a unique responsibility. Behind every medicine is a patient, a family and a healthcare professional who places their trust in the quality and reliability of that product. We understand this responsibility and make it central to everything we do.",
  "At Syno Pharma, we are committed to building a culture where quality is a habit, integrity is non-negotiable and innovation drives progress. We continuously work towards strengthening our product portfolio, improving our capabilities and responding to the changing needs of the healthcare community.",
  "Our growth is not measured only by business milestones. We measure our success by the trust we earn, the relationships we build and the positive impact we create.",
  "We are grateful to the doctors, healthcare professionals, distributors, business associates and customers who place their confidence in Syno Pharma. Their trust motivates us to raise our standards and continuously improve.",
  "Looking ahead, our ambition is to build Syno Pharma into a reliable, responsible and globally respected pharmaceutical organization, while remaining firmly committed to quality, ethical practices and the welfare of society.",
  "I invite you to join us on this journey as we work towards a healthier tomorrow.",
];

export function Leadership() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground">
            Leadership
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
            Message from Our Managing Directors
          </h2>
          <figure className="mt-6 rounded-3xl border border-border bg-secondary/60 p-6 shadow-soft sm:p-8">
            <Quote className="size-8 text-teal" />
            <blockquote className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p className="text-lg font-semibold text-foreground">
                Welcome to Syno Pharma Laboratories Private Limited.
              </p>
              {message.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </blockquote>
            <figcaption className="mt-8 border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">With sincere regards,</p>
              <p className="mt-2 flex items-center gap-2 text-base font-bold text-foreground">
                <HeartHandshake className="size-4 text-primary" />
                Satish Kumar Thakur &amp; K K Mishra
              </p>
              <p className="text-sm font-semibold text-primary">Managing Directors</p>
              <p className="text-sm text-muted-foreground">
                Syno Pharma Laboratories Private Limited
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-teal">
                Innovation • Integrity • Impact
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:sticky lg:top-28 lg:mt-24 lg:grid-cols-1">
          {directors.map((d, i) => (
            <Reveal key={d.name} delay={0.12 + i * 0.12}>
              <Card className="card-lift border-border/70 shadow-soft">
                <CardContent className="flex items-start gap-4 p-6">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
                    <UserRound className="size-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{d.name}</h3>
                    <p className="text-sm font-semibold text-primary">{d.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.note}</p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

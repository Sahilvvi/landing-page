"use client";

import { motion } from "framer-motion";
import { Layers, Shuffle, TimerOff } from "lucide-react";
import { PROBLEMS } from "@/lib/data";
import { BrandBadge, SectionHeading } from "./ui";

const ICONS = [Layers, Shuffle, TimerOff];

export function Problems() {
  return (
    <section id="problem" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The reward dilemma"
          title="Why ₹1,000s of your rewards quietly die every month"
          sub="Digital scratch cards and cashback coupons are everywhere — and almost none of them are for the things you actually buy."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PROBLEMS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card card-hover relative overflow-hidden p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-tint text-emerald-deep">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div className="text-right">
                    <div className="font-display text-3xl font-extrabold text-ink">
                      {p.stat}
                    </div>
                    <div className="text-xs font-medium text-muted">{p.statLabel}</div>
                  </div>
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.brands.map((b) => (
                    <BrandBadge key={b} id={b} size="sm" />
                  ))}
                </div>
                {i === 2 && (
                  <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-emerald-tint">
                    <motion.div
                      initial={{ width: "100%" }}
                      whileInView={{ width: "6%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald to-crimson"
                    />
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

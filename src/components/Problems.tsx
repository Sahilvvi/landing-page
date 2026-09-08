"use client";

import { motion } from "framer-motion";
import { Layers, Shuffle, TimerOff, Bell } from "lucide-react";
import { PROBLEMS } from "@/lib/data";
import { BrandBadge, SectionHeading } from "./ui";
import { CountUp, EASE, TiltCard, fadeUp, stagger, useLoop } from "./motion";

const ICONS = [Layers, Shuffle, TimerOff];

function ScatteredApps() {
  const apps = ["gpay", "phonepe", "paytm", "zepto", "blinkit", "cred", "swiggy"];
  const spots = [
    { x: 6, y: 18, r: -12 },
    { x: 58, y: 8, r: 8 },
    { x: 30, y: 46, r: -4 },
    { x: 68, y: 52, r: 14 },
    { x: 8, y: 74, r: 6 },
    { x: 46, y: 78, r: -10 },
    { x: 78, y: 26, r: -6 },
  ];
  return (
    <div className="relative h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-bg to-emerald-tint/60 ring-1 ring-line">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(11,31,23,.12)_1px,transparent_1px)] [background-size:14px_14px]" />
      {apps.map((id, i) => (
        <motion.div
          key={id}
          className="absolute"
          style={{ left: `${spots[i].x}%`, top: `${spots[i].y}%` }}
          initial={{ opacity: 0, scale: 0.6, rotate: spots[i].r }}
          whileInView={{ opacity: 1, scale: 1, rotate: spots[i].r }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: EASE }}
        >
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [spots[i].r, spots[i].r + 4, spots[i].r] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          >
            <BrandBadge id={id} size="sm" />
          </motion.div>
        </motion.div>
      ))}
      <motion.div
        className="absolute bottom-2 right-2 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold text-muted shadow-sm ring-1 ring-line"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
      >
        Which one had that ₹75?
      </motion.div>
    </div>
  );
}

function Mismatch() {
  const have = [
    { id: "myntra", t: "Myntra ₹500" },
    { id: "uber", t: "Uber ₹150" },
    { id: "bookmyshow", t: "BMS BOGO" },
  ];
  const need = [
    { id: "zomato", t: "Lunch" },
    { id: "blinkit", t: "Groceries" },
    { id: "paytm", t: "Recharge" },
  ];
  const i = useLoop(3, 1600);
  return (
    <div className="relative h-40 rounded-2xl bg-gradient-to-br from-bg to-emerald-tint/60 p-3 ring-1 ring-line">
      <div className="grid h-full grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="min-w-0 space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-wider text-muted">You have</div>
          {have.map((h, k) => (
            <motion.div
              key={h.id}
              animate={{ opacity: k === i ? 1 : 0.45, x: k === i ? 4 : 0 }}
              transition={{ duration: 0.4 }}
              className="flex min-w-0 items-center gap-1.5 rounded-lg bg-white px-2 py-1 text-[11px] font-medium shadow-sm ring-1 ring-line"
            >
              <BrandBadge id={h.id} size="sm" />
              <span className="truncate">{h.t}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "linear" }}
          className="grid h-8 w-8 place-items-center rounded-full bg-white text-crimson shadow-sm ring-1 ring-line"
        >
          <Shuffle className="h-4 w-4" />
        </motion.div>
        <div className="min-w-0 space-y-2">
          <div className="text-right text-[10px] font-bold uppercase tracking-wider text-muted">You need</div>
          {need.map((n, k) => (
            <motion.div
              key={n.id}
              animate={{ opacity: k === i ? 1 : 0.45, x: k === i ? -4 : 0 }}
              transition={{ duration: 0.4 }}
              className="flex min-w-0 items-center justify-end gap-1.5 rounded-lg bg-white px-2 py-1 text-[11px] font-medium shadow-sm ring-1 ring-line"
            >
              <span className="truncate">{n.t}</span>
              <BrandBadge id={n.id} size="sm" />
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="absolute left-1/2 top-2 -translate-x-1/2 rounded-full bg-crimson/10 px-2 py-0.5 text-[10px] font-bold text-crimson"
      >
        No match
      </motion.div>
    </div>
  );
}

function Deadline() {
  const items = [
    { id: "swiggy", t: "Swiggy 50% off", days: 0, pct: 4 },
    { id: "amazon", t: "Amazon ₹100", days: 2, pct: 18 },
    { id: "cred", t: "CRED ₹250", days: 6, pct: 42 },
  ];
  return (
    <div className="relative h-40 space-y-2 rounded-2xl bg-gradient-to-br from-bg to-emerald-tint/60 p-3 ring-1 ring-line">
      {items.map((it, k) => (
        <div key={it.id} className="rounded-lg bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-line">
          <div className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-1.5 font-medium">
              <BrandBadge id={it.id} size="sm" /> {it.t}
            </span>
            <motion.span
              className={`font-bold ${it.days === 0 ? "text-crimson" : "text-muted"}`}
              animate={it.days === 0 ? { opacity: [1, 0.3, 1] } : undefined}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {it.days === 0 ? "Expires today" : `${it.days}d left`}
            </motion.span>
          </div>
          <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-emerald-tint">
            <motion.div
              initial={{ width: "100%" }}
              whileInView={{ width: `${it.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 2.2 + k * 0.4, ease: "easeInOut", delay: 0.3 }}
              className={`h-full rounded-full ${
                it.days === 0
                  ? "bg-gradient-to-r from-orange to-crimson"
                  : "bg-gradient-to-r from-emerald to-amber"
              }`}
            />
          </div>
        </div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.5, ease: EASE }}
        className="absolute -right-2 -top-3 flex items-center gap-1.5 rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-white shadow-lift"
      >
        <Bell className="h-3 w-3 text-amber" /> No reminder was sent
      </motion.div>
    </div>
  );
}

const VISUALS = [ScatteredApps, Mismatch, Deadline];
const STATS = [
  { to: 10, suffix: "+", decimals: 0 },
  { to: 90, suffix: "%", decimals: 0 },
  { to: 1.2, prefix: "₹", suffix: " Cr", decimals: 1 },
];

export function Problems() {
  return (
    <section id="problem" className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-light/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The reward dilemma"
          title="Why ₹1,000s of your rewards quietly die every month"
          sub="There is no shortage of coupons in your phone, just a shortage of useful ones."
        />
        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3 [perspective:1400px]"
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PROBLEMS.map((p, i) => {
            const Icon = ICONS[i];
            const Visual = VISUALS[i];
            const s = STATS[i];
            return (
              <motion.article key={p.title} variants={fadeUp} className="group min-w-0">
                <TiltCard className="card h-full overflow-hidden p-6 transition-shadow duration-300 group-hover:shadow-lift">
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-tint to-white text-emerald-deep shadow-sm ring-1 ring-line transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="text-right">
                      <CountUp
                        {...s}
                        className="font-display text-3xl font-extrabold tabular-nums text-ink"
                      />
                      <div className="text-xs font-medium text-muted">{p.statLabel}</div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Visual />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </TiltCard>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

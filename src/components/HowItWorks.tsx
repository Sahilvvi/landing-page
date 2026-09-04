"use client";

import { motion } from "framer-motion";
import { Camera, MessageSquare, Search, Check, ArrowLeftRight } from "lucide-react";
import { STEPS } from "@/lib/data";
import { BrandBadge, SectionHeading } from "./ui";

function StepVisual({ i }: { i: number }) {
  if (i === 0) {
    return (
      <div className="relative h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-tint to-white p-4">
        <div className="absolute inset-x-6 top-4 rounded-xl border-2 border-dashed border-emerald/40 bg-white/70 p-3">
          <div className="flex items-center gap-2">
            <BrandBadge id="gpay" size="sm" />
            <span className="text-[11px] font-semibold text-ink">Scratch card detected</span>
          </div>
          <div className="mt-2 font-mono text-xs text-ink-2">GPAY-7X2K-QW9</div>
          <div className="mt-1 text-[10px] text-muted">Min order ₹299 · Expires in 6 days</div>
        </div>
        <motion.div
          initial={{ top: 16 }}
          animate={{ top: [16, 130, 16] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-x-6 h-0.5 bg-emerald shadow-[0_0_12px_2px_rgba(31,168,112,0.6)]"
        />
        <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-ink text-white">
          <Camera className="h-4 w-4" />
        </span>
      </div>
    );
  }
  if (i === 1) {
    const rows = [
      { id: "zomato", txt: "Zomato 30% off", tag: "Dining" },
      { id: "myntra", txt: "Myntra ₹500", tag: "Fashion" },
      { id: "uber", txt: "Uber ₹150", tag: "Travel" },
    ];
    return (
      <div className="h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-tint to-white p-4">
        <div className="flex gap-1.5">
          {["All", "Dining", "Grocery", "Fashion"].map((t, k) => (
            <span
              key={t}
              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${k === 0 ? "bg-ink text-white" : "bg-white text-muted"}`}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {rows.map((r, k) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 * k }}
              className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <BrandBadge id={r.id} size="sm" />
                <span className="text-[11px] font-semibold text-ink">{r.txt}</span>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-tint px-2 py-0.5 text-[10px] font-bold text-emerald-deep">
                <ArrowLeftRight className="h-3 w-3" /> Swap
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="h-44 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-tint to-white p-4">
      <div className="space-y-2 text-[11px]">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[80%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-ink shadow-sm"
        >
          Hey! Is the Zomato code still valid?
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-emerald px-3 py-2 text-white shadow-sm"
        >
          Yes, till 31 May. Sending code now 👍
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-3 inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 font-semibold text-white"
        >
          <Check className="h-3.5 w-3.5 text-emerald-light" /> Trade settled · Rate Riya
        </motion.div>
      </div>
    </div>
  );
}

const ICONS = [Camera, Search, MessageSquare];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-bg-2/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps from junk coupon to real discount"
          sub="A peer-to-peer trade loop — no middlemen, no fees, just people swapping value they don't need for value they do."
        />
        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          <div className="pointer-events-none absolute inset-x-[16%] top-24 hidden h-px border-t-2 border-dashed border-emerald/30 lg:block" />
          {STEPS.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card card-hover relative p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-emerald to-emerald-deep text-white shadow-lift">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-sm font-bold text-emerald-deep">Step {s.n}</span>
                </div>
                <div className="mt-5">
                  <StepVisual i={i} />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

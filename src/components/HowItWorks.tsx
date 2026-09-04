"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Camera, MessageSquare, Search, Check, ArrowLeftRight, ScanLine } from "lucide-react";
import { STEPS } from "@/lib/data";
import { BrandBadge, SectionHeading } from "./ui";
import { EASE, TiltCard, useLoop } from "./motion";

const STEP_MS = 3600;

function ScanVisual() {
  return (
    <div className="relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-tint to-white p-4 ring-1 ring-line">
      <motion.div
        initial={{ opacity: 0, y: 10, rotate: -3 }}
        animate={{ opacity: 1, y: 0, rotate: -3 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="absolute inset-x-8 top-5 rounded-xl bg-white p-3 shadow-card ring-1 ring-line"
      >
        <div className="flex items-center gap-2">
          <BrandBadge id="gpay" size="sm" />
          <span className="text-[11px] font-semibold text-ink">Scratch card</span>
        </div>
        <div className="mt-2 font-mono text-xs text-ink-2">GPAY-7X2K-QW9</div>
        <div className="mt-1 text-[10px] text-muted">₹75 cashback · Min ₹299</div>
      </motion.div>
      <motion.div
        initial={{ top: 16 }}
        animate={{ top: [16, 150, 16] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-x-5 h-0.5 bg-emerald shadow-[0_0_16px_3px_rgba(31,168,112,0.55)]"
      />
      {[
        { t: "Brand: Google Pay", d: 0.8 },
        { t: "Min order: ₹299", d: 1.3 },
        { t: "Expires: 6 days", d: 1.8 },
      ].map((c) => (
        <motion.span
          key={c.t}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: c.d, duration: 0.4, ease: EASE }}
          className="absolute right-3 flex items-center gap-1 rounded-full bg-ink px-2 py-0.5 text-[10px] font-semibold text-white"
          style={{ top: 104 + (c.d - 0.8) * 46 }}
        >
          <Check className="h-3 w-3 text-emerald-light" /> {c.t}
        </motion.span>
      ))}
      <span className="absolute bottom-3 left-3 grid h-9 w-9 place-items-center rounded-full bg-white text-emerald-deep shadow-sm ring-1 ring-line">
        <ScanLine className="h-4 w-4" />
      </span>
    </div>
  );
}

function BrowseVisual() {
  const rows = [
    { id: "zomato", txt: "Zomato 30% off", tag: "Dining" },
    { id: "myntra", txt: "Myntra ₹500", tag: "Fashion" },
    { id: "uber", txt: "Uber ₹150", tag: "Travel" },
  ];
  return (
    <div className="relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-tint to-white p-4 ring-1 ring-line">
      <div className="flex gap-1.5">
        {["All", "Dining", "Grocery", "Fashion"].map((t, k) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: k * 0.06 }}
            className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${k === 0 ? "bg-ink text-white" : "bg-white text-muted ring-1 ring-line"}`}
          >
            {t}
          </motion.span>
        ))}
      </div>
      <div className="mt-3 space-y-2">
        {rows.map((r, k) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + 0.15 * k, duration: 0.45, ease: EASE }}
            className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-line"
          >
            <div className="flex items-center gap-2">
              <BrandBadge id={r.id} size="sm" />
              <span className="text-[11px] font-semibold text-ink">{r.txt}</span>
            </div>
            <motion.span
              animate={k === 0 ? { scale: [1, 1.12, 1] } : undefined}
              transition={{ delay: 1.4, duration: 0.5 }}
              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${k === 0 ? "bg-emerald text-white" : "bg-emerald-tint text-emerald-deep"}`}
            >
              <ArrowLeftRight className="h-3 w-3" /> Swap
            </motion.span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1.9, duration: 0.45, ease: EASE }}
        className="absolute bottom-3 right-3 rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-white shadow-lift"
      >
        Swap request sent → Riya
      </motion.div>
    </div>
  );
}

function ChatVisual() {
  return (
    <div className="relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-tint to-white p-4 ring-1 ring-line">
      <div className="space-y-2 text-[11px]">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="max-w-[82%] rounded-2xl rounded-bl-sm bg-white px-3 py-2 text-ink shadow-sm ring-1 ring-line"
        >
          Hey! Is the Zomato code still valid?
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ delay: 0.5, duration: 0.9, times: [0, 0.2, 0.8, 1] }}
          className="ml-auto flex w-12 justify-center gap-1 rounded-2xl bg-emerald/80 px-3 py-2"
        >
          {[0, 1, 2].map((d) => (
            <motion.span
              key={d}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
              className="h-1.5 w-1.5 rounded-full bg-white"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.4, ease: EASE }}
          className="-mt-9 ml-auto max-w-[82%] rounded-2xl rounded-br-sm bg-emerald px-3 py-2 text-white shadow-sm"
        >
          Yes, till 31 May. Sending code now 👍
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.3, duration: 0.45, ease: EASE }}
          className="mx-auto mt-3 flex w-max items-center gap-2 rounded-full bg-ink px-3 py-1.5 font-semibold text-white shadow-lift"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2.6, type: "spring", stiffness: 400, damping: 14 }}
            className="grid h-4 w-4 place-items-center rounded-full bg-emerald"
          >
            <Check className="h-3 w-3" />
          </motion.span>
          Trade settled · Rate Riya
        </motion.div>
      </div>
    </div>
  );
}

const VISUALS = [ScanVisual, BrowseVisual, ChatVisual];
const ICONS = [Camera, Search, MessageSquare];

export function HowItWorks() {
  const active = useLoop(3, STEP_MS);

  return (
    <section id="how-it-works" className="relative scroll-mt-20 overflow-hidden bg-bg-2/60 py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-emerald-light/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-amber/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps from junk coupon to real discount"
          sub="A peer-to-peer trade loop — no middlemen, no fees, just people swapping value they don't need for value they do."
        />

        <div className="relative mt-14 grid gap-6 lg:grid-cols-3 [perspective:1400px]">
          <div className="pointer-events-none absolute inset-x-[16%] top-[46px] hidden h-1 rounded-full bg-emerald/15 lg:block">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-emerald to-emerald-light"
              animate={{ width: `${(active / 2) * 100}%` }}
              transition={{ duration: 0.7, ease: EASE }}
            />
          </div>

          {STEPS.map((s, i) => {
            const Icon = ICONS[i];
            const Visual = VISUALS[i];
            const isActive = i === active;
            return (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: EASE }}
                className="group relative"
              >
                <TiltCard
                  intensity={5}
                  className={`card h-full p-6 transition-all duration-500 ${
                    isActive ? "shadow-lift ring-1 ring-emerald/40" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-11 w-11 place-items-center rounded-full text-white transition-all duration-500 ${
                          isActive
                            ? "scale-110 bg-gradient-to-br from-emerald to-emerald-deep shadow-lift"
                            : "bg-ink/80"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-sm font-bold text-emerald-deep">Step {s.n}</span>
                    </div>
                    <div className="h-1 w-16 overflow-hidden rounded-full bg-emerald/15">
                      {isActive && (
                        <motion.div
                          key={active}
                          className="h-full bg-emerald"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: STEP_MS / 1000, ease: "linear" }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={isActive ? `on-${active}` : "off"}
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0.6 }}
                      >
                        <Visual />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </TiltCard>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

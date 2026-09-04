"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight, Check, Home, Search, Plus, Ticket, MessageCircle } from "lucide-react";
import { BRANDS } from "@/lib/data";

type Phase = "upload" | "swap" | "redeemed";

const STAGES: {
  phase: Phase;
  brand: keyof typeof BRANDS;
  title: string;
  sub: string;
  code: string;
  chip: string;
}[] = [
  {
    phase: "upload",
    brand: "zomato",
    title: "Zomato Voucher",
    sub: "Flat 30% off · Min order ₹399",
    code: "ZOM30-XXXX",
    chip: "Uploaded · Auto-detected",
  },
  {
    phase: "swap",
    brand: "zomato",
    title: "Swap requested",
    sub: "Zomato 30% ⇄ Myntra ₹500",
    code: "Waiting for Riya…",
    chip: "Trade in progress",
  },
  {
    phase: "redeemed",
    brand: "myntra",
    title: "Myntra Coupon",
    sub: "₹500 off · Min order ₹1,499",
    code: "MYN500-K7Q2",
    chip: "Redeemed · Saved ₹500",
  },
];

export function PhoneScreen({ interval = 2600 }: { interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % STAGES.length), interval);
    return () => clearInterval(t);
  }, [interval]);
  const s = STAGES[i];
  const b = BRANDS[s.brand];

  return (
    <div className="flex h-full w-full flex-col bg-[#f2faf5] font-sans text-ink">
      <div className="relative bg-gradient-to-b from-emerald to-emerald-light px-4 pb-10 pt-12 text-white">
        <div className="flex items-center justify-between text-[10px] font-medium opacity-90">
          <span>9:41</span>
          <span>●●● ▲ ▮</span>
        </div>
        <div className="mt-4 text-[11px] opacity-90">Good evening, Aarav</div>
        <div className="font-display text-lg font-extrabold leading-tight">
          Your vault · 12 coupons
        </div>
        <div className="mt-3 flex gap-1.5">
          {["Dining", "Grocery", "Fashion", "Travel"].map((c, k) => (
            <span
              key={c}
              className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                k === 0 ? "bg-white text-emerald-deep" : "bg-white/20"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="-mt-6 flex-1 px-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24, rotateX: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.97 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="rounded-2xl bg-white p-3 shadow-[0_12px_30px_-12px_rgba(11,31,23,.25)]"
            style={{ transformPerspective: 600 }}
          >
            <div className="flex items-center justify-between">
              <span
                className="rounded-full px-2 py-0.5 text-[9px] font-bold ring-2 ring-white"
                style={{ background: b.bg, color: b.fg }}
              >
                {b.name}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                  s.phase === "redeemed"
                    ? "bg-emerald-tint text-emerald-deep"
                    : s.phase === "swap"
                      ? "bg-amber/25 text-[#8a5a00]"
                      : "bg-bg text-muted"
                }`}
              >
                {s.chip}
              </span>
            </div>
            <div className="mt-2 font-display text-sm font-extrabold">{s.title}</div>
            <div className="text-[10px] text-muted">{s.sub}</div>
            <div className="mt-2 flex items-center justify-between rounded-lg border border-dashed border-line bg-bg px-2 py-1.5">
              <span className="font-mono text-[10px] font-semibold tracking-wider">
                {s.code}
              </span>
              {s.phase === "swap" ? (
                <ArrowLeftRight className="h-3 w-3 text-amber" />
              ) : s.phase === "redeemed" ? (
                <Check className="h-3 w-3 text-emerald" />
              ) : (
                <Ticket className="h-3 w-3 text-muted" />
              )}
            </div>
            <div className="mt-2 flex items-center gap-1 text-[9px] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald" />
              Expires 31/05/2025
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-3 space-y-2">
          {[
            ["swiggy", "Swiggy · 50% off", "2 days left"],
            ["phonepe", "PhonePe scratch · ₹75", "12 days left"],
          ].map(([id, t, e]) => {
            const bb = BRANDS[id];
            return (
              <div
                key={id}
                className="flex items-center gap-2 rounded-xl bg-white p-2 shadow-card"
              >
                <span
                  className="h-6 w-6 shrink-0 rounded-full"
                  style={{ background: bb.bg }}
                />
                <div className="flex-1 leading-tight">
                  <div className="text-[10px] font-semibold">{t}</div>
                  <div className="text-[9px] text-muted">{e}</div>
                </div>
                <span className="rounded-full bg-emerald-tint px-2 py-0.5 text-[9px] font-semibold text-emerald-deep">
                  Swap
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-around border-t border-line bg-white px-2 py-2 text-muted">
        <Home className="h-4 w-4 text-emerald" />
        <Search className="h-4 w-4" />
        <span className="-mt-5 grid h-9 w-9 place-items-center rounded-full bg-emerald text-white shadow-lift">
          <Plus className="h-4 w-4" />
        </span>
        <Ticket className="h-4 w-4" />
        <MessageCircle className="h-4 w-4" />
      </div>
    </div>
  );
}

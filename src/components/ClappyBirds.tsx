"use client";

import { motion } from "framer-motion";
import { Gamepad2, Gift, Trophy, Zap } from "lucide-react";
import { LEADERBOARD } from "@/lib/data";
import { GetAppButton } from "./Header";

function Arcade() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-[2rem] border-4 border-[#1c2b24] bg-[#0f1a15] p-4 shadow-lift">
      <div className="flex items-center justify-between font-mono text-xs text-emerald-light">
        <span className="flex items-center gap-1">
          <Zap className="h-3.5 w-3.5 text-amber" /> PLAYS 3/3
        </span>
        <span className="animate-[blink_1.2s_steps(2)_infinite]">▶ TAP TO FLAP</span>
        <span>HI 0184</span>
      </div>
      <div className="relative mt-3 h-72 overflow-hidden rounded-2xl bg-gradient-to-b from-[#5cc8ff] via-[#9fe0ff] to-[#d9f5ff]">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:24px_24px]" />
        {[0, 1, 2].map((k) => (
          <motion.div
            key={k}
            animate={{ x: [420, -60] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: k * 1.5 }}
            className="absolute inset-y-0 w-12"
          >
            <div className="absolute top-0 h-[38%] w-full rounded-b-md border-2 border-[#0e7a52] bg-gradient-to-r from-emerald to-emerald-deep" />
            <div className="absolute bottom-0 h-[38%] w-full rounded-t-md border-2 border-[#0e7a52] bg-gradient-to-r from-emerald to-emerald-deep" />
          </motion.div>
        ))}
        <motion.div
          animate={{ y: [0, -22, 6, -18, 0], rotate: [0, -12, 8, -10, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-16 top-[45%] h-10 w-12 rounded-full bg-amber shadow-md"
        >
          <span className="absolute -right-1.5 top-3 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-orange" />
          <span className="absolute left-7 top-2 h-3 w-3 rounded-full bg-white">
            <span className="absolute left-1.5 top-0.5 h-1.5 w-1.5 rounded-full bg-ink" />
          </span>
          <motion.span
            animate={{ scaleY: [1, 0.4, 1] }}
            transition={{ duration: 0.4, repeat: Infinity }}
            className="absolute left-1 top-4 h-3 w-5 origin-top rounded-full bg-orange/80"
          />
        </motion.div>
        <div className="absolute left-1/2 top-4 -translate-x-1/2 font-display text-4xl font-extrabold text-white drop-shadow-[0_3px_0_rgba(14,122,82,.6)]">
          42
        </div>
        <div className="absolute inset-x-0 bottom-0 h-6 bg-[#7bc043]" />
        <div className="absolute inset-x-0 bottom-0 h-2 bg-[#5a9a2c]" />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-white/70">
        <div className="rounded-lg bg-white/5 py-2">
          <div className="text-base font-bold text-white">3</div>
          free plays / day
        </div>
        <div className="rounded-lg bg-white/5 py-2">
          <div className="text-base font-bold text-white">24h</div>
          leaderboard reset
        </div>
        <div className="rounded-lg bg-white/5 py-2">
          <div className="text-base font-bold text-amber">₹100</div>
          Amazon gift card
        </div>
      </div>
    </div>
  );
}

function Leaderboard() {
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-display text-sm font-bold text-ink">
          <Trophy className="h-4 w-4 text-amber" /> Today&apos;s leaderboard
        </span>
        <span className="text-[11px] text-muted">Resets in 6h 12m</span>
      </div>
      <ul className="mt-4 divide-y divide-line">
        {LEADERBOARD.map((r, i) => (
          <motion.li
            key={r.rank}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex items-center gap-3 py-2.5 text-sm"
          >
            <span
              className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${
                r.rank <= 3 ? "bg-amber text-ink" : "bg-bg-2 text-muted"
              }`}
            >
              {r.rank}
            </span>
            <span className="flex-1 font-semibold text-ink">{r.name}</span>
            <span className="font-mono text-xs text-muted">{r.score}</span>
            {r.prize && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-tint px-2 py-0.5 text-[10px] font-bold text-emerald-deep">
                <Gift className="h-3 w-3" /> {r.prize}
              </span>
            )}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export function ClappyBirds() {
  return (
    <section id="clappy-birds" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-bg via-bg-2 to-bg" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Arcade />
          </motion.div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1 font-mono text-xs font-bold text-emerald-light">
              <Gamepad2 className="h-3.5 w-3.5" /> CLAPPY BIRDS ARENA
            </span>
            <h2 className="section-title mt-4 text-ink">
              Play for 2 minutes.
              <br />
              Win <span className="text-emerald">₹100 Amazon Gift Cards</span> daily.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Every user gets three complimentary Clappy Birds attempts each 24 hours. Flap through the pipes, climb the daily leaderboard, and the top scorers take home real Amazon gift cards — no purchase, no catch.
            </p>
            <div className="mt-8">
              <Leaderboard />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <GetAppButton label="Play Clappy Birds Free" />
              <a href="#how-it-works" className="btn-secondary">
                How trading works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

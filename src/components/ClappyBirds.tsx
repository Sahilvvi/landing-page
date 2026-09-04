"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, Gift, Trophy, Zap } from "lucide-react";
import { LEADERBOARD } from "@/lib/data";
import { GetAppButton } from "./Header";
import { TiltCard, useLoop } from "./motion";

function Arcade() {
  const tick = useLoop(60, 900);
  const score = 42 + (tick % 20);
  const plays = 3 - Math.floor(tick / 20);
  const hi = tick % 20 >= 14;
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-emerald-light/40 via-amber/20 to-[#5cc8ff]/30 blur-3xl" />
      <TiltCard intensity={5} className="rounded-[2rem] border-4 border-[#1c2b24] bg-[#0f1a15] p-4 shadow-lift ring-1 ring-white/10">
        <div className="flex items-center justify-between font-mono text-xs text-emerald-light">
          <span className="flex items-center gap-1">
            <Zap className="h-3.5 w-3.5 text-amber" /> PLAYS {plays}/3
          </span>
          <span className="animate-[blink_1.2s_steps(2)_infinite]">▶ TAP TO FLAP</span>
          <span>HI 0184</span>
        </div>
        <div className="relative mt-3 h-72 overflow-hidden rounded-2xl bg-gradient-to-b from-[#5cc8ff] via-[#9fe0ff] to-[#d9f5ff]">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:24px_24px]" />
          {[0, 1, 2].map((k) => (
            <motion.div
              key={`c${k}`}
              animate={{ x: [440, -120] }}
              transition={{ duration: 18 + k * 4, repeat: Infinity, ease: "linear", delay: k * 5 }}
              className="absolute flex gap-1 opacity-80"
              style={{ top: 18 + k * 34 }}
            >
              <span className="h-5 w-10 rounded-full bg-white" />
              <span className="-ml-4 mt-2 h-4 w-8 rounded-full bg-white" />
            </motion.div>
          ))}
          {[0, 1, 2].map((k) => (
            <motion.div
              key={k}
              animate={{ x: [420, -60] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: k * 1.5 }}
              className="absolute inset-y-0 w-12"
            >
              <div
                className="absolute top-0 w-full rounded-b-md border-2 border-[#0e7a52] bg-gradient-to-r from-emerald via-emerald-light to-emerald-deep"
                style={{ height: `${30 + (k * 11) % 20}%` }}
              />
              <div
                className="absolute bottom-6 w-full rounded-t-md border-2 border-[#0e7a52] bg-gradient-to-r from-emerald via-emerald-light to-emerald-deep"
                style={{ height: `${28 + ((k + 1) * 9) % 20}%` }}
              />
              <motion.span
                animate={{ y: [0, -6, 0], rotateY: [0, 180, 360] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="absolute left-3 top-[48%] grid h-6 w-6 place-items-center rounded-full bg-amber text-[9px] font-black text-ink shadow-[0_0_12px_rgba(255,184,0,.8)]"
              >
                ₹
              </motion.span>
            </motion.div>
          ))}
          <motion.div
            animate={{ y: [0, -22, 6, -18, 0], rotate: [0, -12, 8, -10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-16 top-[45%] h-10 w-12 rounded-full bg-amber shadow-[0_6px_0_rgba(0,0,0,.12)]"
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
          <motion.div
            key={score}
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="absolute left-1/2 top-4 -translate-x-1/2 font-display text-4xl font-extrabold text-white drop-shadow-[0_3px_0_rgba(14,122,82,.6)]"
          >
            {score}
          </motion.div>
          <AnimatePresence>
            {hi && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-1/2 top-16 -translate-x-1/2 rounded-full bg-ink px-3 py-1 font-mono text-[10px] font-bold text-amber shadow-lift"
              >
                ★ NEW HIGH SCORE
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            animate={{ backgroundPositionX: ["0px", "-48px"] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 bottom-0 h-6 bg-[#7bc043] [background-image:repeating-linear-gradient(90deg,transparent_0_24px,rgba(0,0,0,.08)_24px_48px)]"
          />
          <div className="absolute inset-x-0 bottom-0 h-2 bg-[#5a9a2c]" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center font-mono text-[10px] text-white/70">
          {[
            { v: "3", l: "free plays / day", c: "text-white" },
            { v: "24h", l: "leaderboard reset", c: "text-white" },
            { v: "₹100", l: "Amazon gift card", c: "text-amber" },
          ].map((x, i) => (
            <motion.div
              key={x.l}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-lg bg-white/5 py-2 ring-1 ring-white/5"
            >
              <div className={`text-base font-bold ${x.c}`}>{x.v}</div>
              {x.l}
            </motion.div>
          ))}
        </div>
      </TiltCard>
    </div>
  );
}

function Leaderboard() {
  return (
    <div className="card p-5 shadow-lift">
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
            className="flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm transition-colors hover:bg-bg-2/70"
          >
            <span
              className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${
                r.rank === 1
                  ? "bg-gradient-to-br from-amber to-orange text-ink shadow-md"
                  : r.rank <= 3
                    ? "bg-amber/80 text-ink"
                    : "bg-bg-2 text-muted"
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
      <div className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#5cc8ff]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-amber/15 blur-3xl" />
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
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1 font-mono text-xs font-bold text-emerald-light"
            >
              <Gamepad2 className="h-3.5 w-3.5" /> CLAPPY BIRDS ARENA
            </motion.span>
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

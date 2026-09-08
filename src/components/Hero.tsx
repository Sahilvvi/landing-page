"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Trophy } from "lucide-react";
import { PhoneScreen } from "./PhoneScreen";
import { BrandBadge, StoreButtons } from "./ui";
import { STORE_LINKS, LIVE_TRADES } from "@/lib/data";

const HERO_POINTS = [
  "Get reminders before coupons expire",
  "Get discounted products from small businesses & individuals",
];

const PhoneScene = dynamic(() => import("./PhoneScene").then((m) => m.PhoneScene), {
  ssr: false,
  loading: () => <StaticPhone />,
});

function StaticPhone() {
  return (
    <div className="relative mx-auto h-[480px] w-[232px] animate-float [perspective:1200px] sm:h-[560px] sm:w-[270px]">
      <div className="absolute -left-8 top-16 z-10 animate-float sm:-left-10"><BrandBadge id="zomato" size="lg" /></div>
      <div className="absolute -right-8 top-28 z-10 animate-float [animation-delay:1s] sm:-right-12"><BrandBadge id="swiggy" size="lg" /></div>
      <div className="absolute -left-8 bottom-40 z-10 animate-float [animation-delay:2s] sm:-left-14"><BrandBadge id="myntra" size="lg" /></div>
      <div className="absolute -right-8 bottom-24 z-10 animate-float [animation-delay:.5s] sm:-right-10"><BrandBadge id="phonepe" size="lg" /></div>
      <div className="h-full w-full overflow-hidden rounded-[44px] border-[10px] border-[#0f1a15] bg-[#0f1a15] shadow-[0_40px_80px_-30px_rgba(11,31,23,.5)] [transform:rotateY(-14deg)_rotateX(4deg)]">
        <div className="relative h-full w-full overflow-hidden rounded-[34px]">
          <div className="absolute left-1/2 top-2.5 z-10 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
          <PhoneScreen />
        </div>
      </div>
    </div>
  );
}

const REDUCED_MQ = "(prefers-reduced-motion: reduce)";
const SMALL_MQ = "(max-width: 767px)";

let webglSupported: boolean | null = null;
function hasWebGL() {
  if (webglSupported === null) {
    try {
      const c = document.createElement("canvas");
      webglSupported = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webglSupported = false;
    }
  }
  return webglSupported;
}

function subscribeCan3D(cb: () => void) {
  const mqs = [window.matchMedia(REDUCED_MQ), window.matchMedia(SMALL_MQ)];
  mqs.forEach((m) => m.addEventListener("change", cb));
  return () => mqs.forEach((m) => m.removeEventListener("change", cb));
}

function getCan3D() {
  return (
    hasWebGL() &&
    !window.matchMedia(REDUCED_MQ).matches &&
    !window.matchMedia(SMALL_MQ).matches
  );
}

function useCan3D() {
  return useSyncExternalStore(subscribeCan3D, getCan3D, () => false);
}

function ActivityPill({
  icon,
  text,
  time,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`glass absolute z-20 flex items-center gap-2.5 rounded-2xl px-3.5 py-2.5 shadow-card ${className}`}
      initial={{ opacity: 0, y: 16, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-tint text-emerald-deep">
        {icon}
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-semibold text-ink">{text}</span>
        <span className="block text-[10px] text-muted">{time}</span>
      </span>
    </motion.div>
  );
}

export function Hero() {
  const can3D = useCan3D();

  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="mint-rays pointer-events-none absolute inset-x-0 top-0 h-[720px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-8 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-6">
        <div className="relative z-10 text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem]"
          >
            Turn Your Earned Vouchers into{" "}
            <span className="bg-gradient-to-r from-emerald-deep via-emerald to-emerald-light bg-clip-text text-transparent">
              Discounts You Actually Need.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl lg:mx-0"
          >
            <p className="text-lg font-semibold text-ink-2">
              India&apos;s first peer-to-peer coupon exchange platform.
            </p>
            <ul className="mt-3 space-y-2 text-left text-base text-muted">
              {HERO_POINTS.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-emerald" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-5 sm:flex-row lg:items-center"
          >
            <StoreButtons appStore={STORE_LINKS.appStore} playStore={STORE_LINKS.playStore} />
          </motion.div>
        </div>

        <div className="relative h-[520px] sm:h-[620px] lg:h-[680px]">
          <ActivityPill
            icon={<Sparkles className="h-4 w-4" />}
            text="Aman swapped Swiggy 50% for Uber ₹150"
            time="Just now"
            className="hidden sm:flex sm:left-2 sm:top-6 lg:-left-6"
            delay={0.8}
          />
          <ActivityPill
            icon={<Trophy className="h-4 w-4 text-[#8a5a00]" />}
            text="Sneha won ₹100 Amazon Voucher in Clappy Birds"
            time="2 min ago"
            className="hidden sm:flex sm:bottom-10 sm:right-2 lg:-right-4"
            delay={1.1}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {can3D ? <PhoneScene /> : <StaticPhone />}
          </div>
        </div>
      </div>

      <TradeMarquee />
    </section>
  );
}

export function TradeMarquee() {
  const items = [...LIVE_TRADES, ...LIVE_TRADES];
  return (
    <div className="relative border-y border-line bg-white/60 py-3 backdrop-blur">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="flex w-max animate-marquee gap-3 will-change-transform hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-3.5 py-1.5 text-sm shadow-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald" />
            <span className="font-semibold text-ink">{t.who}</span>
            <span className="text-muted">swapped</span>
            <span className="font-medium">{t.gave}</span>
            <span className="text-muted">for</span>
            <span className="font-medium text-emerald-deep">{t.got}</span>
            <span className="text-xs text-muted">· {t.when}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

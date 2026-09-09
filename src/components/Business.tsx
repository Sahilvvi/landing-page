"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Building2,
  Eye,
  Footprints,
  Gamepad2,
  Handshake,
  MapPin,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Percent,
  Store,
  Target,
  Ticket,
  TrendingUp,
  User,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { STORE_LINKS } from "@/lib/data";
import { CountUp, EASE, TiltCard, fadeUp, stagger, useLoop } from "./motion";

const CONTACT = "mailto:saransh@couponbaazi.com";

const GAINS = [
  { icon: Target, t: "High-intent potential customers" },
  { icon: BarChart3, t: "Real-time marketing data" },
  { icon: MessageCircle, t: "Direct interaction with buyers" },
  { icon: TrendingUp, t: "Performance-driven advertising" },
];

const PERKS = [
  { icon: Ticket, t: "Create your own coupons" },
  { icon: Eye, t: "Track engagement on every coupon" },
  { icon: Handshake, t: "Generate warm leads" },
  { icon: MessageCircle, t: "Interact directly with buyers" },
  { icon: Footprints, t: "Increase footfall in-store & online" },
  { icon: Megaphone, t: "Improve brand visibility" },
];

const AUDIENCE = [
  { icon: User, t: "Individual owners" },
  { icon: Store, t: "Service providers" },
  { icon: Building2, t: "MSMEs" },
  { icon: Users, t: "Product brands & corporates" },
];

/* ---------- animated mini-visuals ---------- */

function CouponBuilder() {
  const examples = [
    { big: "50% Off", small: "on first purchase" },
    { big: "₹2,000 Off", small: "on ₹15,000 purchase" },
    { big: "Buy 1 Get 1", small: "free" },
    { big: "Limited Time", small: "48-hour offer" },
  ];
  const i = useLoop(examples.length, 1800);
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-muted">Coupon preview</div>
      <div className="relative mt-2 h-[84px] overflow-hidden rounded-xl border border-dashed border-emerald/40 bg-gradient-to-br from-emerald-tint to-white px-4 py-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="font-display text-2xl font-extrabold text-ink">{examples[i].big}</div>
            <div className="text-xs text-muted">{examples[i].small}</div>
          </motion.div>
        </AnimatePresence>
        <span className="absolute right-3 top-3 rounded-full bg-emerald px-2 py-0.5 text-[10px] font-bold text-white">
          Your brand
        </span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
        {[
          ["Discount value", "Set"],
          ["Expiry date", "Set"],
          ["Redemption limit", "Set"],
          ["Target audience", "Soon"],
        ].map(([k, v]) => (
          <div key={k} className="flex items-center justify-between rounded-lg bg-bg-2 px-2.5 py-1.5">
            <span className="text-ink-2">{k}</span>
            <span className={`font-bold ${v === "Soon" ? "text-amber" : "text-emerald-deep"}`}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsBoard() {
  const tick = useLoop(2, 2600);
  const bars = [42, 68, 55, 90, 74, 61, 83];
  const stats = [
    { icon: Eye, k: "Views", v: 4820 },
    { icon: MousePointerClick, k: "Redeem tries", v: 1140 },
    { icon: Percent, k: "Redemption", v: 23.6, suffix: "%", dec: 1 },
    { icon: MapPin, k: "Top city", text: "Bengaluru" },
  ];
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted">Coupon performance</span>
        <span className="flex items-center gap-1 text-[10px] font-semibold text-emerald-deep">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald" /> Live
        </span>
      </div>
      <div className="mt-3 flex h-20 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: `${tick ? h : Math.max(20, h - 25)}%` }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.05 }}
            className={`flex-1 rounded-t-md ${i === 3 ? "bg-gradient-to-t from-emerald-deep to-emerald-light" : "bg-emerald/25"}`}
          />
        ))}
      </div>
      <div className="mt-1 flex justify-between text-[9px] text-muted">
        <span>Mon</span>
        <span>Peak · 7–9 pm</span>
        <span>Sun</span>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.k} className="rounded-lg bg-bg-2 px-2.5 py-2">
              <div className="flex items-center gap-1 text-[10px] text-muted">
                <Icon className="h-3 w-3" /> {s.k}
              </div>
              <div className="font-display text-sm font-bold text-ink">
                {s.text ?? <CountUp to={s.v ?? 0} suffix={s.suffix} decimals={s.dec} />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PushPhone() {
  const show = useLoop(2, 2400) === 1;
  return (
    <div className="relative mx-auto h-[210px] w-[150px] overflow-hidden rounded-[1.6rem] border-[5px] border-ink bg-gradient-to-b from-emerald-deep via-emerald to-emerald-light shadow-lift">
      <div className="absolute left-1/2 top-2 h-3 w-14 -translate-x-1/2 rounded-full bg-ink" />
      <div className="mt-10 text-center font-display text-3xl font-bold text-white">9:41</div>
      <div className="text-center text-[9px] text-white/80">Friday, 12 June</div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mx-2 mt-5 rounded-xl bg-white/95 p-2 text-[9px] text-ink shadow-lift backdrop-blur"
          >
            <div className="flex items-center gap-1 font-bold">
              <span className="grid h-3.5 w-3.5 place-items-center rounded bg-emerald text-white">
                <Bell className="h-2 w-2" />
              </span>
              Couponbaazi · now
            </div>
            <p className="mt-0.5 leading-snug">
              <b>XYZ Brand</b> just dropped a new coupon on Couponbaazi. Grab it before it&apos;s gone.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GameLeads() {
  const step = useLoop(3, 1700);
  const flow = ["Sponsor a slot", "Users compete", "Chat with winners"];
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted">Sponsored game event</span>
        <span className="rounded-full bg-amber/20 px-2 py-0.5 text-[10px] font-bold text-ink">3× daily</span>
      </div>
      <div className="mt-3 flex items-center gap-1.5">
        {flow.map((f, i) => (
          <div key={f} className="flex flex-1 items-center gap-1.5">
            <motion.div
              animate={{ scale: step === i ? 1.04 : 1, opacity: step >= i ? 1 : 0.5 }}
              className={`flex-1 rounded-lg px-2 py-2 text-center text-[10px] font-semibold ${
                step === i ? "bg-ink text-white shadow-lift" : "bg-bg-2 text-ink-2"
              }`}
            >
              {f}
            </motion.div>
            {i < flow.length - 1 && <ArrowRight className="h-3 w-3 shrink-0 text-muted" />}
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-xl bg-gradient-to-r from-emerald-tint to-white p-3">
        <div className="flex items-center gap-2 text-xs">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-amber to-orange text-[11px] font-bold text-white">
            S
          </span>
          <div className="flex-1">
            <div className="font-bold text-ink">Sneha R. · Winner</div>
            <div className="text-[10px] text-muted">Won your ₹500 coupon · warm lead</div>
          </div>
          <span className="rounded-full bg-emerald px-2 py-0.5 text-[10px] font-bold text-white">Chat</span>
        </div>
      </div>
    </div>
  );
}

function InsightsChips() {
  const chips = [
    "Age groups",
    "Gender",
    "Location / City",
    "Brands they engage with",
    "Coupon categories",
    "Spending patterns",
    "Peak browsing times",
    "Redemption frequency",
    "Income bracket (est.)",
  ];
  const hot = useLoop(chips.length, 900);
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-muted">Available segments</div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {chips.map((c, i) => (
          <motion.span
            key={c}
            animate={{ scale: hot === i ? 1.06 : 1 }}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors duration-300 ${
              hot === i ? "bg-emerald text-white shadow-card" : "bg-bg-2 text-ink-2"
            }`}
          >
            {c}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

function WalletCard() {
  const tick = useLoop(4, 1500);
  const balance = 12000 - tick * 1500;
  const uses = ["New coupon uploads", "Push notifications", "In-game slot sponsoring", "Data & qualified leads"];
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
      <div className="rounded-xl bg-ink p-3 text-white">
        <div className="flex items-center justify-between text-[10px] text-white/60">
          <span>Ad wallet</span>
          <span className="flex items-center gap-1">
            <Zap className="h-3 w-3 text-emerald-light" /> Auto top-up on
          </span>
        </div>
        <motion.div key={balance} initial={{ opacity: 0.4 }} animate={{ opacity: 1 }} className="mt-1 font-display text-2xl font-bold">
          ₹{balance.toLocaleString("en-IN")}
        </motion.div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/15">
          <motion.div
            animate={{ width: `${(balance / 12000) * 100}%` }}
            transition={{ duration: 0.8, ease: EASE }}
            className="h-full rounded-full bg-gradient-to-r from-emerald to-emerald-light"
          />
        </div>
        <div className="mt-1 text-[9px] text-white/60">Spending limit ₹15,000 / month</div>
      </div>
      <ul className="mt-3 space-y-1.5 text-[11px]">
        {uses.map((u, i) => (
          <li key={u} className="flex items-center justify-between rounded-lg bg-bg-2 px-2.5 py-1.5">
            <span className="text-ink-2">{u}</span>
            <motion.span
              animate={{ opacity: tick === i ? 1 : 0 }}
              className="rounded-full bg-emerald-tint px-1.5 py-0.5 text-[9px] font-bold text-emerald-deep"
            >
              −₹1,500
            </motion.span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- feature blocks ---------- */

const MODULES = [
  {
    icon: Ticket,
    title: "Create your own discount coupons",
    body: "Instantly publish custom offers that appear inside the Couponbaazi marketplace where users actively browse and exchange coupons. You stay in complete control of value, expiry and redemption limits.",
    visual: <CouponBuilder />,
  },
  {
    icon: BarChart3,
    title: "Advanced coupon analytics",
    body: "Detailed performance insights for every coupon: total views, redeem attempts, redemption rate, top-performing offers, peak engagement time and city-level customer location. Unlike flyers or newspaper ads, every interaction is measurable.",
    visual: <AnalyticsBoard />,
  },
  {
    icon: Bell,
    title: "Push notification promotion",
    body: "Coupons normally live in the marketplace feed. Boost visibility with a notification straight to users' lock screens — significantly increasing coupon views, redemption clicks and brand awareness.",
    visual: <PushPhone />,
  },
  {
    icon: Gamepad2,
    title: "Lead generation via sponsored game events",
    body: "Couponbaazi hosts a competitive mobile game three times a day. Sponsor the prizes, put your coupons in the hands of highly engaged users, get direct chat access with winners and turn a coupon into a warm sales lead.",
    visual: <GameLeads />,
  },
  {
    icon: Users,
    title: "User data & customer insights",
    body: "Understand buyer behaviour with targeted consumer insights — age, gender, city, favourite brands, coupon categories, spending patterns and peak times — and design offers that reach the right customers.",
    visual: <InsightsChips />,
  },
  {
    icon: Wallet,
    title: "Wallet-based advertising",
    body: "A wallet model similar to Meta Ads: add money, use the balance whenever you want to promote, enable auto top-up and set spending limits so campaigns never stop running. You only spend when you choose to promote.",
    visual: <WalletCard />,
  },
];

export function Business() {
  return (
    <section id="business" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-white sm:px-12 lg:px-16"
        >
          <motion.div
            aria-hidden
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald/30 blur-3xl"
          />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-amber/20 blur-3xl" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-light ring-1 ring-white/15">
                Couponbaazi for Business (CBz)
              </span>
              <h2 className="section-title mt-4 text-white">
                Turn promotion into{" "}
                <span className="bg-gradient-to-r from-emerald-light to-amber bg-clip-text text-transparent">
                  performance.
                </span>
              </h2>
              <p className="mt-4 text-lg text-white/70">
                CBz is a customer acquisition and marketing platform that helps businesses attract new buyers with
                digital coupons and promotions. Traditional advertising gives impressions — CBz gives intent-based
                customers who are actively looking for deals.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={STORE_LINKS.merchant}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald to-emerald-light px-6 py-3 font-semibold text-ink shadow-lift transition hover:-translate-y-0.5"
                >
                  Publish your first coupon <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={CONTACT}
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Talk to us
                </a>
              </div>
            </div>
            <motion.ul
              variants={stagger(0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-3 sm:grid-cols-2"
            >
              {GAINS.map((g, i) => {
                const Icon = g.icon;
                return (
                  <motion.li
                    key={g.t}
                    variants={fadeUp}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald/20 text-emerald-light">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-2xl font-bold text-white/20">{i + 1}</span>
                    </div>
                    <div className="mt-3 font-display text-sm font-bold leading-snug">{g.t}</div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </motion.div>

        {/* Instead of ads */}
        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 text-center"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-wide text-emerald-deep">
            Instead of spending uncontrollably on ads
          </motion.p>
          <motion.h3 variants={fadeUp} className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Everything a business needs, all from one platform
          </motion.h3>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PERKS.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.t}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 text-left shadow-card transition-shadow hover:shadow-lift"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-tint text-emerald-deep">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-ink">{p.t}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Modules */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 [perspective:1400px]"
        >
          {MODULES.map((m) => {
            const Icon = m.icon;
            return (
              <motion.div key={m.title} variants={fadeUp} className="min-w-0">
                <TiltCard className="card-hover flex h-full flex-col rounded-3xl border border-line bg-gradient-to-b from-white to-bg p-6 shadow-card">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-ink text-emerald-light">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h4 className="font-display text-lg font-bold leading-tight text-ink">{m.title}</h4>
                  </div>
                  <p className="mt-3 text-sm text-muted">{m.body}</p>
                  <div className="mt-5 flex-1">{m.visual}</div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Audience + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid items-center gap-8 rounded-[2rem] border border-line bg-white p-8 shadow-card lg:grid-cols-[1fr_auto]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-deep">Who benefits the most</p>
            <h3 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Any service provider or product-based business.
            </h3>
            <p className="mt-3 max-w-2xl text-muted">
              Whether you are an individual business owner, an MSME or a corporate, Couponbaazi users are diverse
              enough to absorb most in-trend businesses and initiate warm interest in them. Publish your first coupon,
              engage with potential buyers, and convert interest into sales.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {AUDIENCE.map((a) => {
                const Icon = a.icon;
                return (
                  <span
                    key={a.t}
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-tint px-3 py-1.5 text-xs font-semibold text-emerald-deep"
                  >
                    <Icon className="h-3.5 w-3.5" /> {a.t}
                  </span>
                );
              })}
            </div>
          </div>
          <a
            href={STORE_LINKS.merchant}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 font-semibold text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-ink-2"
          >
            Get started with CBz <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

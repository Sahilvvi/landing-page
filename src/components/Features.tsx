"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Bookmark,
  AtSign,
  MessageCircle,
  Search,
  Share2,
  ShieldCheck,
  Store,
  Star,
  Users,
} from "lucide-react";
import { BrandBadge, Pill, SectionHeading } from "./ui";
import { CountUp, EASE, useLoop } from "./motion";

function MarketplaceDemo() {
  const listings = [
    { id: "zomato", title: "Zomato 30% off", meta: "Min ₹399 · 6d left", cat: "Dining" },
    { id: "blinkit", title: "Blinkit ₹200", meta: "Min ₹999 · 12d left", cat: "Grocery" },
    { id: "myntra", title: "Myntra ₹500", meta: "Min ₹1,999 · 20d left", cat: "Fashion" },
    { id: "uber", title: "Uber ₹150", meta: "3 rides · 9d left", cat: "Travel" },
  ];
  const step = useLoop(listings.length + 1, 1500);
  const hot = step < listings.length ? step : -1;
  return (
    <div className="relative">
      <div className="mb-3 flex items-center gap-2 rounded-2xl border border-line bg-white/80 px-3 py-2 text-xs text-muted shadow-card backdrop-blur">
        <Search className="h-3.5 w-3.5" />
        <span className="flex-1">Search brands, categories…</span>
        <span className="rounded-full bg-emerald-tint px-2 py-0.5 text-[10px] font-bold text-emerald-deep">
          <CountUp to={412} suffix=" live" />
        </span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 [perspective:1000px]">
        {listings.map((l, i) => {
          const isHot = i === hot;
          return (
            <motion.div
              key={l.id}
              initial={{ opacity: 0, y: 20, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: EASE }}
              animate={{ scale: isHot ? 1.03 : 1, y: isHot ? -4 : 0 }}
              className={`relative rounded-2xl border bg-white p-4 transition-shadow duration-500 ${
                isHot ? "border-emerald/40 shadow-lift" : "border-line shadow-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <BrandBadge id={l.id} size="sm" />
                <span className="text-[10px] font-semibold uppercase tracking-wide text-muted">{l.cat}</span>
              </div>
              <div className="mt-3 font-display text-sm font-bold text-ink">{l.title}</div>
              <div className="text-xs text-muted">{l.meta}</div>
              <div className="mt-3 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] text-muted">
                  <Star className="h-3 w-3 fill-amber text-amber" /> 4.9 · verified
                </span>
                <motion.span
                  animate={isHot ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`rounded-full px-3 py-1 text-[11px] font-bold transition-colors ${
                    isHot ? "bg-emerald text-white" : "bg-emerald-tint text-emerald-deep"
                  }`}
                >
                  {isHot ? "Requesting…" : "Request swap"}
                </motion.span>
              </div>
              <AnimatePresence>
                {isHot && (
                  <motion.span
                    initial={{ opacity: 0, y: 6, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute -right-2 -top-2 rounded-full bg-ink px-2 py-0.5 text-[10px] font-semibold text-white shadow-lift"
                  >
                    2 people viewing
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function ChatDemo() {
  const msgs = [
    { me: false, t: "Hi Aarav! I'd like your Zomato 30% for my Myntra ₹500." },
    { me: true, t: "Sounds fair. Is the Myntra code unused?" },
    { me: false, t: "Yes, fresh from CRED. Valid till 30 Jun." },
    { me: true, t: "Deal. Let's swap 🤝" },
  ];
  const step = useLoop(msgs.length + 3, 1300);
  const shown = Math.min(step, msgs.length);
  const typing = step < msgs.length;
  const done = step >= msgs.length + 1;
  return (
    <div className="rounded-3xl border border-line bg-white p-4 shadow-lift">
      <div className="flex items-center gap-3 border-b border-line pb-3">
        <span className="relative grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-amber to-orange font-bold text-white">
          R
          <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald" />
        </span>
        <div className="flex-1">
          <div className="text-sm font-bold text-ink">Riya S.</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-deep">
            <ShieldCheck className="h-3 w-3" /> Phone verified · 42 trades
          </div>
        </div>
        <span className="rounded-full bg-bg-2 px-2 py-0.5 text-[10px] font-semibold text-muted">Zomato ↔ Myntra</span>
      </div>
      <div className="mt-3 min-h-[228px] space-y-2 text-xs">
        <AnimatePresence initial={false}>
          {msgs.slice(0, shown).map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                m.me ? "ml-auto rounded-br-sm bg-emerald text-white" : "rounded-bl-sm bg-bg-2 text-ink"
              }`}
            >
              {m.t}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`flex w-14 justify-center gap-1 rounded-2xl px-3 py-2.5 ${
                msgs[shown].me ? "ml-auto bg-emerald/80" : "bg-bg-2"
              }`}
            >
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: d * 0.15 }}
                  className={`h-1.5 w-1.5 rounded-full ${msgs[shown].me ? "bg-white" : "bg-muted"}`}
                />
              ))}
            </motion.div>
          )}
          {done && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="mx-auto mt-3 flex w-fit items-center gap-2 rounded-full bg-ink px-3 py-1.5 text-[11px] font-semibold text-white shadow-lift"
            >
              <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald">
                <ShieldCheck className="h-3 w-3" />
              </span>
              Both users confirmed · Trade complete
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ExpiryDemo() {
  const items = [
    { id: "swiggy", t: "Swiggy 50% off", days: 2, pct: 92, tone: "from-orange to-crimson" },
    { id: "phonepe", t: "PhonePe ₹75 scratch", days: 9, pct: 60, tone: "from-amber to-orange" },
    { id: "amazon", t: "Amazon ₹100 gift card", days: 24, pct: 25, tone: "from-emerald-light to-emerald" },
  ];
  const step = useLoop(4, 1800);
  return (
    <div className="relative rounded-3xl border border-line bg-white p-4 shadow-lift">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-ink">Expiry tracker</span>
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.4, repeat: Infinity }}
          className="inline-flex items-center gap-1 rounded-full bg-crimson/10 px-2 py-0.5 text-[10px] font-bold text-crimson"
        >
          <Bell className="h-3 w-3" /> 1 urgent
        </motion.span>
      </div>
      <div className="mt-4 space-y-4">
        {items.map((it, i) => (
          <motion.div
            key={it.id}
            animate={{ opacity: step === 3 || step === i ? 1 : 0.55 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-semibold text-ink">
                <BrandBadge id={it.id} size="sm" /> {it.t}
              </span>
              <span className={`font-semibold ${it.days <= 2 ? "text-crimson" : "text-muted"}`}>
                {it.days} days left
              </span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-bg-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${it.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.15 * i, ease: EASE }}
                className={`relative h-full rounded-full bg-gradient-to-r ${it.tone}`}
              >
                <motion.span
                  animate={{ x: ["-100%", "250%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                  className="absolute inset-y-0 w-1/3 bg-white/40 blur-[2px]"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={step === 3 ? "nudge" : "idle"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="mt-4 flex items-start gap-2 rounded-2xl bg-emerald-tint p-3 text-xs text-emerald-deep"
        >
          <Bell className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <span>
            <span className="font-bold">{step === 3 ? "Nudge sent: " : "Watching: "}</span>
            {step === 3
              ? "“Your Swiggy 50% expires in 2 days — list it for swap now?”"
              : "3 coupons tracked · reminders at 7d, 2d and 12h"}
          </span>
        </motion.div>
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.5, ease: EASE }}
        className="absolute -right-3 -top-4 rounded-2xl bg-ink px-3 py-2 text-[11px] font-semibold text-white shadow-lift"
      >
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber" /> Push · Swiggy 50% expiring soon
        </span>
      </motion.div>
    </div>
  );
}

const SELLER_POINTS = [
  "Save coupons in your locker for later",
  "Chat directly with the seller — no personal details shared",
  "Visit the seller's social media for credibility",
  "Share the coupon with others",
];

function SellerDemo({ kind }: { kind: "business" | "individual" }) {
  const isBiz = kind === "business";
  const seller = isBiz
    ? { name: "Brew & Bean Café", meta: "Local business · Indiranagar", initial: "B", handle: "@brewandbean" }
    : { name: "Kabir M.", meta: "Individual seller · 28 trades", initial: "K", handle: "@kabir.m" };
  const offer = isBiz
    ? { title: "Flat 40% off on any 2 coffees", sub: "Valid till 30 Jun · 120 left", price: "Free to claim" }
    : { title: "Myntra ₹500 voucher", sub: "Min ₹1,999 · 20d left", price: "Buy for ₹350" };
  const actions = [
    { icon: Bookmark, label: "Save to locker" },
    { icon: MessageCircle, label: "Chat" },
    { icon: AtSign, label: "Socials" },
    { icon: Share2, label: "Share" },
  ];
  const step = useLoop(actions.length + 1, 1400);
  const active = step < actions.length ? step : -1;
  const toasts = ["Saved to your locker", "Chat opened · details stay private", `Opening ${seller.handle}`, "Share link copied"];
  return (
    <div className="relative rounded-3xl border border-line bg-white p-4 shadow-lift">
      <div className="flex items-center gap-3">
        <span
          className={`grid h-11 w-11 place-items-center rounded-2xl font-display text-lg font-bold text-white ${
            isBiz ? "bg-gradient-to-br from-emerald to-emerald-deep" : "bg-gradient-to-br from-amber to-orange"
          }`}
        >
          {seller.initial}
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-1.5 text-sm font-bold text-ink">
            {seller.name}
            <ShieldCheck className="h-3.5 w-3.5 text-emerald" />
          </div>
          <div className="text-[11px] text-muted">{seller.meta}</div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-bg-2 px-2 py-0.5 text-[10px] font-semibold text-muted">
          <Star className="h-3 w-3 fill-amber text-amber" /> 4.8
        </span>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-dashed border-emerald/40 bg-gradient-to-br from-emerald-tint to-white p-4">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-emerald px-2 py-0.5 text-[10px] font-bold text-white">COUPON</span>
          <span className="text-[10px] font-semibold text-emerald-deep">{offer.price}</span>
        </div>
        <div className="mt-3 font-display text-lg font-extrabold text-ink">{offer.title}</div>
        <div className="text-xs text-muted">{offer.sub}</div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {actions.map((a, i) => {
          const Icon = a.icon;
          const on = i === active;
          return (
            <motion.div
              key={a.label}
              animate={{ y: on ? -3 : 0, scale: on ? 1.04 : 1 }}
              className={`flex flex-col items-center gap-1.5 rounded-xl px-1 py-2.5 text-center text-[10px] font-semibold transition-colors duration-300 ${
                on ? "bg-ink text-white shadow-lift" : "bg-bg-2 text-ink-2"
              }`}
            >
              <Icon className={`h-4 w-4 ${on ? "text-emerald-light" : "text-emerald-deep"}`} />
              <span className="leading-tight">{a.label}</span>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-3 h-8">
        <AnimatePresence mode="wait">
          {active >= 0 && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="flex items-center gap-2 rounded-xl bg-emerald-tint px-3 py-1.5 text-[11px] font-semibold text-emerald-deep"
            >
              <ShieldCheck className="h-3.5 w-3.5" /> {toasts[active]}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const FEATURES = [
  {
    id: "features",
    icon: Store,
    eyebrow: "P2P Marketplace",
    title: "One vault. Every reward. Real people to trade with.",
    body: "Store all your coupons in one place and browse hundreds of active listings from real users across Dining, Grocery, Fashion, and Travel. Filter by brand, value, or expiry and request a swap in one tap.",
    bullets: ["Universal coupon vault", "Category & brand filters", "Zero platform fees"],
    demo: <MarketplaceDemo />,
  },
  {
    id: "chat",
    icon: MessageCircle,
    eyebrow: "Direct Trade Chat",
    title: "Negotiate 1-on-1. Settle with confidence.",
    body: "Every swap opens a dedicated chat between the two traders. Confirm details, complete the trade, and rate each other — reputation keeps the community honest.",
    bullets: ["Phone-verified traders", "Private in-app chat", "Public trust ratings"],
    demo: <ChatDemo />,
  },
  {
    id: "expiry",
    icon: Bell,
    eyebrow: "Smart Expiry Tracker",
    title: "Never lose a coupon to a silent deadline again.",
    body: "Couponbaazi reads the expiry date the moment you upload and nudges you well before it lapses — with a one-tap shortcut to list it for swap so someone else gets the value instead of the void.",
    bullets: ["Auto-detected expiry", "Timed push reminders", "Swap-before-expiry prompts"],
    demo: <ExpiryDemo />,
  },
  {
    id: "small-business",
    icon: Store,
    eyebrow: "Buy Directly from Small Businesses",
    title: "Real offers from local shops and growing brands.",
    body: "Small businesses publish their own coupons on Couponbaazi. Save the ones you like to your locker, chat with the business directly, check out their social media for credibility, and share the deal with friends.",
    bullets: SELLER_POINTS,
    demo: <SellerDemo kind="business" />,
  },
  {
    id: "individual-sellers",
    icon: Users,
    eyebrow: "Buy from Individual Sellers",
    title: "Pick up coupons other users don't need — at a discount.",
    body: "Individuals list the vouchers they won't use. Save them to your locker for later, chat with the seller without sharing your personal details, verify them through their social profile, and pass the coupon on to others.",
    bullets: SELLER_POINTS,
    demo: <SellerDemo kind="individual" />,
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core features"
          title="Everything your rewards were missing"
          sub="Built for the way Indians actually earn and spend digital rewards."
        />
        <div className="mt-16 space-y-20">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const flip = i % 2 === 1;
            return (
              <div
                key={f.id}
                id={f.id}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 scroll-mt-28"
              >
                <motion.div
                  initial={{ opacity: 0, x: flip ? 24 : -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className={flip ? "lg:order-2" : ""}
                >
                  <Pill>
                    <Icon className="h-3.5 w-3.5" /> {f.eyebrow}
                  </Pill>
                  <h3 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                    {f.title}
                  </h3>
                  <p className="mt-4 text-lg text-muted">{f.body}</p>
                  <ul className="mt-6 space-y-2">
                    {f.bullets.map((b) => (
                      <motion.li
                        key={b}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + f.bullets.indexOf(b) * 0.1 }}
                        className="flex items-center gap-2 text-sm font-medium text-ink-2"
                      >
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-tint text-emerald-deep">
                          <ShieldCheck className="h-3 w-3" />
                        </span>
                        {b}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative ${flip ? "lg:order-1" : ""}`}
                >
                  <motion.div
                    aria-hidden
                    animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.04, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-light/40 via-white to-amber/25 blur-2xl"
                  />
                  {f.demo}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

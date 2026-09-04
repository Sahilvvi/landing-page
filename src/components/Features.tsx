"use client";

import { motion } from "framer-motion";
import { Bell, Gamepad2, MessageCircle, ShieldCheck, Store, Star } from "lucide-react";
import { BrandBadge, Pill, SectionHeading } from "./ui";

function MarketplaceDemo() {
  const listings = [
    { id: "zomato", title: "Zomato 30% off", meta: "Min ₹399 · 6d left", cat: "Dining" },
    { id: "blinkit", title: "Blinkit ₹200", meta: "Min ₹999 · 12d left", cat: "Grocery" },
    { id: "myntra", title: "Myntra ₹500", meta: "Min ₹1,999 · 20d left", cat: "Fashion" },
    { id: "uber", title: "Uber ₹150", meta: "3 rides · 9d left", cat: "Travel" },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {listings.map((l, i) => (
        <motion.div
          key={l.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="rounded-2xl border border-line bg-white p-4 shadow-card"
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
            <button type="button" className="rounded-full bg-emerald-tint px-3 py-1 text-[11px] font-bold text-emerald-deep">
              Request swap
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ChatDemo() {
  const msgs = [
    { me: false, t: "Hi Aarav! I'd like your Zomato 30% for my Myntra ₹500." },
    { me: true, t: "Sounds fair. Is the Myntra code unused?" },
    { me: false, t: "Yes, fresh from CRED. Valid till 30 Jun." },
    { me: true, t: "Deal. Sharing my code in the secure box 🔒" },
  ];
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
      <div className="flex items-center gap-3 border-b border-line pb-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-amber to-orange font-bold text-white">
          R
        </span>
        <div>
          <div className="text-sm font-bold text-ink">Riya S.</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-deep">
            <ShieldCheck className="h-3 w-3" /> Phone verified · 42 trades
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-2 text-xs">
        {msgs.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 * i }}
            className={`max-w-[85%] rounded-2xl px-3 py-2 ${
              m.me
                ? "ml-auto rounded-br-sm bg-emerald text-white"
                : "rounded-bl-sm bg-bg-2 text-ink"
            }`}
          >
            {m.t}
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
          className="mx-auto mt-3 w-fit rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-white"
        >
          Both users confirmed · Trade complete
        </motion.div>
      </div>
    </div>
  );
}

function ExpiryDemo() {
  const items = [
    { id: "swiggy", t: "Swiggy 50% off", days: 2, pct: 92, tone: "bg-crimson" },
    { id: "phonepe", t: "PhonePe ₹75 scratch", days: 9, pct: 60, tone: "bg-orange" },
    { id: "amazon", t: "Amazon ₹100 gift card", days: 24, pct: 25, tone: "bg-emerald" },
  ];
  return (
    <div className="rounded-2xl border border-line bg-white p-4 shadow-card">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-ink">Expiry tracker</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-crimson/10 px-2 py-0.5 text-[10px] font-bold text-crimson">
          <Bell className="h-3 w-3" /> 1 urgent
        </span>
      </div>
      <div className="mt-4 space-y-4">
        {items.map((it, i) => (
          <div key={it.id}>
            <div className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 font-semibold text-ink">
                <BrandBadge id={it.id} size="sm" /> {it.t}
              </span>
              <span className="text-muted">{it.days} days left</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-bg-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${it.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15 * i, ease: "easeOut" }}
                className={`h-full rounded-full ${it.tone}`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl bg-emerald-tint p-3 text-xs text-emerald-deep">
        <span className="font-bold">Nudge sent:</span> “Your Swiggy 50% expires in 2 days — list it for swap now?”
      </div>
    </div>
  );
}

function ClappyTeaser() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-ink p-4 text-white shadow-card">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="relative">
        <div className="flex items-center justify-between font-mono text-[11px] text-emerald-light">
          <span>SCORE 0184</span>
          <span>3 PLAYS LEFT</span>
        </div>
        <div className="relative mt-3 h-28 overflow-hidden rounded-xl bg-gradient-to-b from-[#5cc8ff] to-[#b9ecff]">
          <motion.div
            animate={{ x: [160, -40] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-8"
          >
            <div className="h-10 w-full rounded-t-md bg-emerald-deep" />
          </motion.div>
          <motion.div
            animate={{ y: [30, 14, 34, 18, 30] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-12 h-7 w-9 rounded-full bg-amber shadow-md"
          >
            <span className="absolute -right-1 top-2 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-orange" />
            <span className="absolute left-5 top-1.5 h-2 w-2 rounded-full bg-white">
              <span className="absolute left-1 top-0.5 h-1 w-1 rounded-full bg-ink" />
            </span>
          </motion.div>
          <div className="absolute inset-x-0 bottom-0 h-3 bg-[#7bc043]" />
        </div>
        <div className="mt-3 flex items-center justify-between text-xs">
          <span className="text-white/70">Daily top 3 win</span>
          <span className="rounded-full bg-amber px-2.5 py-1 font-bold text-ink">₹100 Amazon Gift Card</span>
        </div>
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
    body: "Every swap opens a dedicated chat between the two traders. Confirm details, share codes inside a secure box, complete the trade, and rate each other — reputation keeps the community honest.",
    bullets: ["Phone-verified traders", "Secure code sharing", "Public trust ratings"],
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
    id: "arcade",
    icon: Gamepad2,
    eyebrow: "Clappy Birds Arcade",
    title: "Saving money should be fun. So we made it a game.",
    body: "Three free plays every 24 hours. Top the daily leaderboard and win ₹100 Amazon Gift Cards — real rewards for a two-minute break.",
    bullets: ["3 complimentary attempts / day", "Daily leaderboard resets", "₹100 Amazon Gift Cards"],
    demo: <ClappyTeaser />,
  },
];

export function Features() {
  return (
    <section className="relative py-20 sm:py-28">
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
                      <li key={b} className="flex items-center gap-2 text-sm font-medium text-ink-2">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-tint text-emerald-deep">
                          <ShieldCheck className="h-3 w-3" />
                        </span>
                        {b}
                      </li>
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
                  <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-tint via-white to-amber/20 blur-2xl" />
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

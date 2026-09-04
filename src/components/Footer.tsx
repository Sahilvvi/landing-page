"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { NAV_LINKS, STORE_LINKS } from "@/lib/data";
import { Logo } from "./Logo";
import { BrandBadge, StoreButtons } from "./ui";
import { EASE, Reveal } from "./motion";

const FLOATERS = [
  { id: "zomato", x: "2%", y: "14%", d: 0 },
  { id: "gpay", x: "3%", y: "70%", d: 0.8 },
  { id: "myntra", x: "50%", y: "8%", d: 0.4 },
  { id: "swiggy", x: "93%", y: "10%", d: 1.2 },
  { id: "amazon", x: "58%", y: "78%", d: 0.6 },
  { id: "phonepe", x: "92%", y: "74%", d: 1.6 },
];

const LEGAL = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Fair Trading Conduct", href: "#" },
  { label: "Merchant Portal", href: STORE_LINKS.merchant },
];

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

const SOCIAL = [
  {
    label: "Instagram",
    href: "#",
    d: "M12 2.2c3.2 0 3.6 0 4.8.1 3.2.1 4.8 1.7 4.9 4.9.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 4 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-9.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z",
  },
  {
    label: "X (Twitter)",
    href: "#",
    d: "M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9.1L1 2h7l4.8 6.4L18.2 2zm-1.2 18h1.9L7.1 3.9H5.1L17 20z",
  },
  {
    label: "LinkedIn",
    href: "#",
    d: "M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6zM8 19H5V9h3v10zM6.5 7.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6V19h-3V9h2.9v1.4c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7V19z",
  },
  {
    label: "YouTube",
    href: "#",
    d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-tint via-bg to-amber/25 p-8 shadow-card ring-1 ring-line sm:p-12">
            <motion.div
              aria-hidden
              animate={{ x: ["-10%", "10%", "-10%"], y: ["-5%", "5%", "-5%"] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-emerald-light/40 blur-3xl"
            />
            <motion.div
              aria-hidden
              animate={{ x: ["10%", "-10%", "10%"], y: ["5%", "-5%", "5%"] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-amber/30 blur-3xl"
            />
            {FLOATERS.map((f) => (
              <motion.div
                key={f.id}
                aria-hidden
                className="pointer-events-none absolute hidden lg:block"
                style={{ left: f.x, top: f.y }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 0.75, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + f.d * 0.3, duration: 0.5, ease: EASE }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [-6, 6, -6] }}
                  transition={{ duration: 5 + f.d, repeat: Infinity, ease: "easeInOut", delay: f.d }}
                >
                  <BrandBadge id={f.id} />
                </motion.div>
              </motion.div>
            ))}
            <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div className="lg:pl-24 lg:pr-8">
                <h2 className="font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Swap. Sell. Save.{" "}
                  <span className="bg-gradient-to-r from-emerald-deep to-emerald bg-clip-text text-transparent">
                    Start trading your unused coupons today.
                  </span>
                </h2>
                <p className="mt-3 text-muted">
                  Free to join. Free to trade. Three free Clappy Birds plays waiting for you.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="lg:justify-self-end"
              >
                <StoreButtons appStore={STORE_LINKS.appStore} playStore={STORE_LINKS.playStore} />
              </motion.div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              India&apos;s peer-to-peer coupon trading platform. Turn useless scratch cards into discounts you actually use.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-2 transition-all duration-300 hover:-translate-y-1 hover:border-emerald/40 hover:bg-emerald-tint hover:text-emerald-deep hover:shadow-md"
                >
                  <Icon d={s.d} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-ink">Product</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="group inline-flex items-center gap-1 transition hover:text-emerald-deep">
                    <span className="transition-transform group-hover:translate-x-0.5">{l.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-ink">Legal</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group inline-flex items-center gap-1 transition hover:text-emerald-deep">
                    <span className="transition-transform group-hover:translate-x-0.5">{l.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-ink">Get the app</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href={STORE_LINKS.appStore} className="transition hover:text-emerald-deep">
                  iOS — App Store
                </a>
              </li>
              <li>
                <a href={STORE_LINKS.playStore} className="transition hover:text-emerald-deep">
                  Android — Google Play
                </a>
              </li>
              <li>
                <a href="mailto:hello@couponbaazi.com" className="transition hover:text-emerald-deep">
                  hello@couponbaazi.com
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Couponbaazi. All rights reserved.</span>
          <span>Made in India 🇮🇳 · Coupons are traded between users; Couponbaazi is not affiliated with listed brands.</span>
        </div>
      </div>
    </footer>
  );
}

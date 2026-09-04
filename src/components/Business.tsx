"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Crosshair, Wallet } from "lucide-react";
import { STORE_LINKS } from "@/lib/data";
import { BrandBadge } from "./ui";

const PERKS = [
  {
    icon: Crosshair,
    title: "High-intent reach",
    body: "Your coupons land in front of shoppers who are actively looking to redeem, not scrolling past banner ads.",
  },
  {
    icon: Wallet,
    title: "Pay only for redemptions",
    body: "No upfront media spend. Distribute codes at scale and pay when a discount is actually used.",
  },
  {
    icon: BarChart3,
    title: "Live redemption analytics",
    body: "See listings, swaps, and redemptions in real time from a single merchant dashboard.",
  },
];

export function Business() {
  return (
    <section id="business" className="relative py-20 sm:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-14 text-white sm:px-12 lg:px-16"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-emerald/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-amber/20 blur-3xl" />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-light ring-1 ring-white/15">
                Couponbaazi for Business
              </span>
              <h2 className="section-title mt-4 text-white">
                Distribute Discounts Directly to High-Intent Shoppers.
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Skip the ad auction. Put your offers straight into the wallets of people who are already hunting for a deal in your category, and track every redemption.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={STORE_LINKS.merchant}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald to-emerald-light px-6 py-3 font-semibold text-ink shadow-lift transition hover:-translate-y-0.5"
                >
                  Open Merchant Portal <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#faq" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Talk to sales
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs text-white/50">Brands shoppers trade daily</span>
                {["zomato", "swiggy", "myntra", "zepto", "bookmyshow", "flipkart"].map((b) => (
                  <BrandBadge key={b} id={b} size="sm" />
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {PERKS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-4 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald/20 text-emerald-light">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display font-bold">{p.title}</div>
                      <p className="mt-1 text-sm text-white/65">{p.body}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

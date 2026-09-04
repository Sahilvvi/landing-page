"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus,
  ShieldCheck,
  Wallet,
  Smartphone,
  TimerOff,
  Gamepad2,
  Lock,
  MessageCircle,
} from "lucide-react";
import { FAQS } from "@/lib/data";
import { SectionHeading } from "./ui";
import { EASE, fadeUp, stagger } from "./motion";

const ICONS = [ShieldCheck, Wallet, Smartphone, TimerOff, Gamepad2, Lock];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative scroll-mt-20 overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-light/15 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered"
          sub="Everything you need to know before your first swap."
        />
        <motion.div
          className="mt-12 space-y-3"
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={f.q}
                variants={fadeUp}
                layout
                transition={{ layout: { duration: 0.35, ease: EASE } }}
                className={`card overflow-hidden transition-all duration-300 ${
                  isOpen ? "shadow-lift ring-1 ring-emerald/30" : "hover:-translate-y-0.5 hover:shadow-lift"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors duration-300 ${
                      isOpen
                        ? "bg-gradient-to-br from-emerald to-emerald-deep text-white shadow-md"
                        : "bg-emerald-tint text-emerald-deep"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 font-display text-base font-bold text-ink sm:text-lg">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "#0b1f17" : "#e6f5ec" }}
                    transition={{ duration: 0.3, ease: EASE }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                      isOpen ? "text-white" : "text-emerald-deep"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      <p className="pb-6 pl-[4.75rem] pr-6 text-sm leading-relaxed text-muted sm:pl-[5rem] sm:text-base">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-ink to-ink-2 p-6 text-white shadow-lift sm:flex-row sm:p-8"
        >
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald text-white">
              <MessageCircle className="h-6 w-6" />
            </span>
            <div>
              <div className="font-display text-lg font-bold">Still have a question?</div>
              <div className="text-sm text-white/70">Our team replies within a few hours, every day.</div>
            </div>
          </div>
          <a
            href="mailto:hello@couponbaazi.com"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ink transition hover:bg-emerald-tint"
          >
            Chat with support
          </a>
        </motion.div>
      </div>
    </section>
  );
}

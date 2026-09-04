"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Smartphone } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, STORE_LINKS } from "@/lib/data";
import { QRBadge, StoreButtons } from "./ui";

export function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

export function GetAppButton({
  className = "btn-primary",
  label = "Get the App",
}: {
  className?: string;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const mobile = useIsMobile();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (mobile) {
    return (
      <a href={STORE_LINKS.playStore} className={className}>
        <Smartphone className="h-4 w-4" /> {label}
      </a>
    );
  }

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        <Smartphone className="h-4 w-4" /> {label}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Download the Couponbaazi app"
          >
            <motion.div
              className="card relative w-full max-w-md p-8 text-center"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="absolute right-4 top-4 rounded-full p-2 text-muted hover:bg-bg"
                onClick={() => setOpen(false)}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <Logo className="justify-center" />
              <h3 className="mt-6 text-2xl">Scan to get the app</h3>
              <p className="mt-2 text-sm text-muted">
                Point your phone camera at the code. Works for both iPhone and
                Android.
              </p>
              <div className="my-6 flex justify-center">
                <QRBadge size={200} />
              </div>
              <StoreButtons
                appStore={STORE_LINKS.appStore}
                playStore={STORE_LINKS.playStore}
                size="sm"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function useActiveSection() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-3 sm:py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`glass flex h-16 items-center justify-between gap-4 rounded-full pl-4 pr-2 transition-shadow duration-300 sm:pl-5 ${
            scrolled ? "shadow-lift" : "shadow-card"
          }`}
        >
          <a href="#top" aria-label="Couponbaazi home" className="shrink-0">
            <Logo />
          </a>

          <nav
            className="hidden items-center gap-0.5 rounded-full bg-bg/70 p-1 lg:flex"
            aria-label="Primary"
          >
            {NAV_LINKS.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative whitespace-nowrap rounded-full px-3.5 py-2 text-[13px] font-semibold tracking-tight transition xl:px-4 xl:text-sm ${
                    isActive
                      ? "bg-white text-emerald-deep shadow-sm"
                      : "text-ink-2 hover:bg-white/70 hover:text-emerald-deep"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 lg:flex">
            <a
              href={STORE_LINKS.merchant}
              className="whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold text-ink-2 transition hover:bg-white hover:text-emerald-deep"
            >
              Merchant Portal
            </a>
            <GetAppButton className="btn-primary !px-5 !py-2.5 whitespace-nowrap text-sm" />
          </div>

          <button
            type="button"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-ink transition hover:bg-white lg:hidden"
            onClick={() => setMenu((m) => !m)}
            aria-label={menu ? "Close menu" : "Open menu"}
            aria-expanded={menu}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.div
              className="glass mt-2 rounded-3xl p-4 shadow-lift lg:hidden"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <nav className="flex flex-col" aria-label="Mobile">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenu(false)}
                    className="rounded-xl px-3 py-3 font-medium hover:bg-bg"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-3 flex flex-col gap-2">
                <a href={STORE_LINKS.merchant} className="btn-secondary">
                  Merchant Portal
                </a>
                <GetAppButton />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

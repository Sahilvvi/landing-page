import { BRANDS } from "@/lib/data";
import type { ReactNode } from "react";

export function BrandBadge({
  id,
  size = "md",
}: {
  id: string;
  size?: "sm" | "md" | "lg";
}) {
  const b = BRANDS[id];
  if (!b) return null;
  const dims =
    size === "sm"
      ? "h-6 px-2 text-[10px]"
      : size === "lg"
        ? "h-10 px-4 text-sm"
        : "h-8 px-3 text-xs";
  return (
    <span
      className={`inline-flex items-center rounded-full font-bold tracking-tight shadow-sm ring-2 ring-white ${dims}`}
      style={{ background: b.bg, color: b.fg }}
    >
      {b.name}
    </span>
  );
}

export function Pill({
  children,
  tone = "emerald",
  className = "",
}: {
  children: ReactNode;
  tone?: "emerald" | "amber" | "neutral";
  className?: string;
}) {
  const tones = {
    emerald: "bg-emerald-tint text-emerald-deep",
    amber: "bg-amber/20 text-[#8a5a00]",
    neutral: "bg-white text-ink border border-line",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left mx-0"}`}
    >
      {eyebrow && <Pill className="mb-4">{eyebrow}</Pill>}
      <h2 className="section-title text-ink">{title}</h2>
      {sub && <p className="mt-4 text-lg text-muted">{sub}</p>}
    </div>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path d="M3.6 2.3 13.4 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1z" fill="#00D7FE" />
      <path d="m13.4 12 3.2-3.2L5 2.3c-.5-.3-1-.3-1.4 0z" fill="#00F076" />
      <path d="m13.4 12-9.8 9.7c.4.3.9.3 1.4 0l11.6-6.5z" fill="#FF3A44" />
      <path d="m16.6 8.8 3.6 2c.9.5.9 1.8 0 2.4l-3.6 2L13.4 12z" fill="#FFD500" />
    </svg>
  );
}

export function StoreButtons({
  appStore = "#",
  playStore = "#",
  size = "md",
}: {
  appStore?: string;
  playStore?: string;
  size?: "sm" | "md";
}) {
  const pad = size === "sm" ? "px-3 py-2" : "px-4 py-2.5";
  const base = `inline-flex items-center gap-2.5 rounded-xl bg-ink text-white ${pad} transition hover:-translate-y-0.5 hover:bg-ink-2`;
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={appStore} className={base} aria-label="Download on the App Store">
        <AppleIcon />
        <span className="text-left leading-none">
          <span className="block text-[10px] opacity-80">Download on the</span>
          <span className="block text-base font-semibold">App Store</span>
        </span>
      </a>
      <a href={playStore} className={base} aria-label="Get it on Google Play">
        <PlayIcon />
        <span className="text-left leading-none">
          <span className="block text-[10px] opacity-80">GET IT ON</span>
          <span className="block text-base font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

export function QRBadge({ size = 88 }: { size?: number }) {
  const cells: boolean[] = [];
  let seed = 7;
  for (let i = 0; i < 121; i++) {
    seed = (seed * 9301 + 49297) % 233280;
    cells.push(seed / 233280 > 0.55);
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 11"
      className="rounded-lg bg-white p-1 shadow-card"
      aria-label="QR code to download the Couponbaazi app"
      role="img"
    >
      {cells.map((on, i) => {
        const x = i % 11;
        const y = Math.floor(i / 11);
        const corner =
          (x < 3 && y < 3) || (x > 7 && y < 3) || (x < 3 && y > 7);
        const edge =
          corner && (x === 0 || x === 2 || x === 8 || x === 10 || y === 0 || y === 2 || y === 8 || y === 10 || (x === 1 && y === 1) || (x === 9 && y === 1) || (x === 1 && y === 9));
        if (corner ? !edge : !on) return null;
        return <rect key={i} x={x} y={y} width="1" height="1" fill="#0b1f17" />;
      })}
    </svg>
  );
}

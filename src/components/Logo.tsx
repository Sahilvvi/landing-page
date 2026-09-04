export function LogoMark({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <g transform="rotate(-18 32 32)">
        <path
          d="M14 22h36a3 3 0 0 1 3 3v3a4 4 0 0 0 0 8v3a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3v-3a4 4 0 0 0 0-8v-3a3 3 0 0 1 3-3Z"
          fill="#E5484D"
        />
      </g>
      <g transform="rotate(-6 32 32)">
        <path
          d="M12 26h40a3 3 0 0 1 3 3v3a4 4 0 0 0 0 8v3a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3v-3a4 4 0 0 0 0-8v-3a3 3 0 0 1 3-3Z"
          fill="#1FA870"
        />
      </g>
      <g transform="rotate(8 32 32)">
        <path
          d="M10 30h44a3 3 0 0 1 3 3v3a4 4 0 0 0 0 8v3a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-3a4 4 0 0 0 0-8v-3a3 3 0 0 1 3-3Z"
          fill="#FFB800"
        />
        <path
          d="M18 39.5h20"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="3 4"
        />
        <circle cx="45" cy="39.5" r="2.5" fill="#fff" />
      </g>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark />
      <span className="font-display text-xl font-extrabold tracking-tight text-ink">
        Couponbaazi
      </span>
    </span>
  );
}

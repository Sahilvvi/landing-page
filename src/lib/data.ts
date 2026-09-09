export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "P2P Exchange", href: "#features" },
  { label: "Expiry Tracker", href: "#expiry" },
  { label: "Clappy Birds", href: "#clappy-birds" },
  { label: "For Business", href: "#business" },
];

export const STORE_LINKS = {
  appStore: "#",
  playStore: "#",
  merchant: "#business",
};

export type Brand = {
  name: string;
  bg: string;
  fg: string;
};

export const BRANDS: Record<string, Brand> = {
  zomato: { name: "Zomato", bg: "#E23744", fg: "#fff" },
  swiggy: { name: "Swiggy", bg: "#FC8019", fg: "#fff" },
  phonepe: { name: "PhonePe", bg: "#5F259F", fg: "#fff" },
  gpay: { name: "Google Pay", bg: "#1A73E8", fg: "#fff" },
  paytm: { name: "Paytm", bg: "#00BAF2", fg: "#fff" },
  myntra: { name: "Myntra", bg: "#FF3F6C", fg: "#fff" },
  uber: { name: "Uber", bg: "#000000", fg: "#fff" },
  amazon: { name: "Amazon", bg: "#FF9900", fg: "#111" },
  zepto: { name: "Zepto", bg: "#7B2FF7", fg: "#fff" },
  blinkit: { name: "Blinkit", bg: "#F8CB46", fg: "#111" },
  cred: { name: "CRED", bg: "#0D0D0D", fg: "#fff" },
  flipkart: { name: "Flipkart", bg: "#2874F0", fg: "#fff" },
  bookmyshow: { name: "BookMyShow", bg: "#C4242B", fg: "#fff" },
};

export const LIVE_TRADES = [
  { who: "Aman", gave: "Swiggy 50% off", got: "Uber ₹150", when: "Just now" },
  { who: "Sneha", gave: "Clappy Birds #1", got: "₹100 Amazon Voucher", when: "2m ago" },
  { who: "Rohit", gave: "Myntra ₹500", got: "Zomato Gold 40%", when: "4m ago" },
  { who: "Priya", gave: "MakeMyTrip ₹1,000", got: "Blinkit ₹200", when: "6m ago" },
  { who: "Karan", gave: "PhonePe Scratch ₹75", got: "Zepto ₹120", when: "9m ago" },
  { who: "Ishita", gave: "Ajio 30%", got: "Swiggy Instamart ₹150", when: "12m ago" },
  { who: "Dev", gave: "BookMyShow BOGO", got: "Uber Eats ₹200", when: "15m ago" },
  { who: "Nisha", gave: "Nykaa ₹300", got: "Zomato ₹250", when: "18m ago" },
];

export const PROBLEMS = [
  {
    title: "Trapped Across 10+ Apps",
    body: "Rewards sit hidden inside separate payment and grocery applications — nobody remembers which app holds what.",
    stat: "10+",
    statLabel: "disconnected apps",
    brands: ["gpay", "phonepe", "paytm", "zepto", "blinkit"],
  },
  {
    title: "90% Utility Mismatch",
    body: "Earning flight discounts when you actually need daily groceries, lunch discounts, or ride credits.",
    stat: "90%",
    statLabel: "rewards you'll never use",
    brands: ["myntra", "uber", "zomato"],
  },
  {
    title: "Silent Deadlines",
    body: "Unused codes slip past expiration dates without any advance warning. Value gone, forever.",
    stat: "₹1.2 Cr",
    statLabel: "recovered so far",
    brands: ["swiggy", "amazon", "cred"],
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Snap & Auto-Detect",
    body: "Upload a screenshot of your digital scratch card or coupon. Our OCR extracts the brand, minimum order value, and expiry date instantly.",
  },
  {
    n: "02",
    title: "Browse & Request Trade",
    body: "Filter active community listings across dining, grocery, fashion, travel and more. Send a direct swap proposal with one of your listed coupons.",
  },
  {
    n: "03",
    title: "In-App Chat & Settle",
    body: "A dedicated 1-on-1 chat opens between both users. Confirm coupon details, agree on terms, complete the trade, and rate the counterparty.",
  },
];

export const FAQS = [
  {
    q: "How do I ensure the coupon I receive is valid?",
    a: "Every trader is phone-verified. Before a swap is marked complete, both users confirm the code inside the dedicated trade chat, and every completed trade leaves a public feedback rating, so unreliable traders are filtered out quickly.",
  },
  {
    q: "Is Couponbaazi free to use?",
    a: "Yes. Peer-to-peer exchanges are free, your 3 daily Clappy Birds plays are free, and there is no fee on any trade. We earn from merchants who distribute coupons through Couponbaazi for Business.",
  },
  {
    q: "What happens if a coupon expires before I trade it?",
    a: "The Smart Expiry Tracker nudges you at 7 days, 2 days and 12 hours before expiry, and can auto-suggest listing it for swap. Expired codes are removed from the marketplace automatically so nobody receives a dead coupon.",
  },
  {
    q: "How does the Clappy Birds reward work?",
    a: "You get three free attempts every 24 hours. Your best score is placed on the daily leaderboard, and the top scorers receive ₹100 Amazon Gift Cards when the board resets. No purchase or trade is required to play.",
  },
];

export const LEADERBOARD = [
  { rank: 1, name: "Sneha R.", score: 184, prize: "₹100 Amazon" },
  { rank: 2, name: "Aman K.", score: 171, prize: "₹100 Amazon" },
  { rank: 3, name: "Rohit V.", score: 163, prize: "₹100 Amazon" },
  { rank: 4, name: "Ishita M.", score: 149, prize: "" },
  { rank: 5, name: "Dev P.", score: 140, prize: "" },
];

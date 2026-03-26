import { TICKER_ITEMS } from "@/lib/constants";

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="overflow-hidden bg-[var(--olive)] py-4 border-y border-[var(--olive-dk)]"
      aria-hidden="true"
    >
      <div
        className="flex animate-ticker whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="font-[var(--font-barlow-condensed)] font-semibold tracking-[0.2em] uppercase text-[var(--ink)] text-sm mx-8 flex items-center gap-3"
          >
            <span className="inline-block w-1.5 h-1.5 bg-[var(--ink)]/40 rotate-45" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

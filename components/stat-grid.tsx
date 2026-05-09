import { Reveal } from "./reveal";
import type { Stat } from "../data/profile";

export function StatGrid({ items }: { items: Stat[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <Reveal key={item.label} delay={0.02 * index}>
          <div className="rounded-2xl border border-line bg-white p-4 sm:p-5">
            <div className="font-display text-[1.75rem] tracking-tight text-foreground sm:text-[2rem]">
              {item.value}
            </div>
            <div className="mt-2 text-sm leading-6 text-muted">{item.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

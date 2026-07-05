import { DESTINASI } from "@/lib/dashboard-data";

export function SummaryCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {DESTINASI.map((d) => {
        const pctNeg = ((d.negatif / d.total) * 100).toFixed(2);
        return (
          <div
            key={d.id}
            className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm"
            style={{ borderTop: `4px solid ${d.warna}` }}
          >
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {d.nama}
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-4xl font-bold tracking-tight" style={{ color: d.warna }}>
                {pctNeg}%
              </span>
              <span className="text-sm text-muted-foreground">negatif</span>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              dari <span className="font-semibold text-foreground">{d.total.toLocaleString()}</span> total ulasan
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-emerald-100 px-3 py-1 font-medium text-emerald-700">
                ✓ {d.positif} positif
              </span>
              <span className="rounded-full bg-red-100 px-3 py-1 font-medium text-red-700">
                ✕ {d.negatif} negatif
              </span>
              <span className="rounded-full bg-slate-200 px-3 py-1 font-medium text-slate-700">
                — {d.netral} netral
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      className="rounded-2xl px-6 py-5 text-white shadow-md"
      style={{ background: "var(--header-grad)" }}
    >
      <h1 className="text-xl font-bold tracking-tight md:text-2xl">{title}</h1>
      <p className="mt-1 text-sm text-white/80">{subtitle}</p>
    </div>
  );
}
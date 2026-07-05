import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BerandaSection,
  SentimenSection,
  KlasifikasiSection,
  KlasterisasiSection,
  RadarSection,
  TopicSection,
  TrendingSection,
  WordcloudSection,
  SnaSection,
} from "@/components/dashboard/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard Perbandingan Pariwisata · Wae Rebo vs Komodo" },
      { name: "description", content: "Dashboard analisis teks ulasan Google Maps untuk Desa Wae Rebo dan Taman Nasional Komodo — sentimen, klasifikasi, klasterisasi, LDA, dan SNA." },
      { property: "og:title", content: "Dashboard Perbandingan Pariwisata NTT" },
      { property: "og:description", content: "Visualisasi hasil text mining & sentiment analysis dua destinasi wisata NTT." },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "beranda", label: "Beranda & Peta", Comp: BerandaSection },
  { id: "sentimen", label: "Analisis Sentimen", Comp: SentimenSection },
  { id: "klasifikasi", label: "Model Klasifikasi", Comp: KlasifikasiSection },
  { id: "klaster", label: "Klasterisasi", Comp: KlasterisasiSection },
  { id: "radar", label: "Radar Perbandingan", Comp: RadarSection },
  { id: "lda", label: "Topic Modeling (LDA)", Comp: TopicSection },
  { id: "trending", label: "Trending Topik", Comp: TrendingSection },
  { id: "wordcloud", label: "WordCloud Masalah", Comp: WordcloudSection },
  { id: "sna", label: "Jaringan Antar Destinasi", Comp: SnaSection },
] as const;

function Index() {
  const [active, setActive] = useState<(typeof NAV)[number]["id"]>("beranda");
  const [open, setOpen] = useState(false);
  const Current = NAV.find((n) => n.id === active)!.Comp;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-72 transform overflow-y-auto p-5 transition-transform lg:static lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ background: "var(--sidebar-bg)", color: "var(--sidebar-fg)" }}
      >
        <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
          <h2 className="text-sm font-extrabold leading-tight tracking-wide">
            DASHBOARD<br />PERBANDINGAN<br />PARIWISATA
          </h2>
          <p className="mt-2 text-xs text-white/60">Analisis Perbandingan Destinasi</p>
        </div>

        <div className="mt-6 text-[11px] font-bold uppercase tracking-widest text-white/50">
          Navigasi Utama
        </div>
        <nav className="mt-3 space-y-1">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => { setActive(n.id); setOpen(false); }}
                className={`block w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  isActive
                    ? "bg-white/15 font-semibold text-white shadow-inner"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                }`}
              >
                {n.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-8 border-t border-white/10 pt-4 text-center text-[11px] leading-relaxed text-white/55">
          Universitas Budi Luhur<br />
          Teknik Informatika · 2025<br />
          Text Mining &amp; Sentiment Analysis
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <button
          aria-label="Tutup menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
        />
      )}

      {/* Main */}
      <main className="flex-1 lg:ml-0">
        {/* Mobile top bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border bg-card px-4 py-3 lg:hidden">
          <button
            onClick={() => setOpen(true)}
            className="rounded-md border border-border px-3 py-1.5 text-sm font-medium"
          >
            ☰ Menu
          </button>
          <span className="text-sm font-bold">Dashboard Pariwisata</span>
          <span className="w-12" />
        </div>

        <div className="mx-auto max-w-7xl p-4 md:p-8">
          <Current />
        </div>
      </main>
    </div>
  );
}

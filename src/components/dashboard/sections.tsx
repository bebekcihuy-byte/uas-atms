import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
  LabelList,
  Area,
  AreaChart,
} from "recharts";
import {
  DESTINASI,
  MODEL_AKURASI,
  MODEL_DETAIL,
  SNA_NODES,
  SNA_EDGES,
} from "@/lib/dashboard-data";
import { SAMPLE_SENTIMEN, SAMPLE_RATING, type SampleReview, type DestId } from "@/lib/sample-reviews";
import { MapView } from "./MapView";
import { SectionHeader, SummaryCards } from "./SummaryCards";

const POS = "#10b981";
const NEG = "#ef4444";
const NEU = "#94a3b8";

type SentTab = "pos" | "neg" | "net";
const SENT_META: Record<SentTab, { label: string; color: string; bg: string; badge: string }> = {
  pos: { label: "Positif", color: POS, bg: "bg-emerald-50",  badge: "bg-emerald-100 text-emerald-700" },
  neg: { label: "Negatif", color: NEG, bg: "bg-red-50",      badge: "bg-red-100 text-red-700" },
  net: { label: "Netral",  color: NEU, bg: "bg-slate-50",    badge: "bg-slate-200 text-slate-700" },
};

function ReviewTable({ rows, accent }: { rows: SampleReview[]; accent: string }) {
  if (!rows.length) {
    return <div className="px-3 py-6 text-center text-xs text-muted-foreground">Tidak ada contoh ulasan.</div>;
  }
  return (
    <div className="overflow-x-auto rounded-lg border border-border bg-white">
      <table className="w-full text-xs">
        <thead className="bg-slate-50 text-muted-foreground">
          <tr>
            <th className="px-3 py-2 text-left font-semibold">Penulis</th>
            <th className="px-3 py-2 text-center font-semibold">Rating</th>
            <th className="px-3 py-2 text-left font-semibold">Tanggal</th>
            <th className="px-3 py-2 text-left font-semibold">Ulasan</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border align-top">
              <td className="whitespace-nowrap px-3 py-2 font-medium text-foreground">{r.penulis}</td>
              <td className="px-3 py-2 text-center">
                <span className="rounded-md px-2 py-0.5 text-[11px] font-bold text-white" style={{ background: accent }}>
                  {"★".repeat(r.rating)}
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-2 text-muted-foreground">{r.tanggal}</td>
              <td className="px-3 py-2 leading-relaxed text-foreground/90">{r.ulasan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SentimenPreview({ destId, nama }: { destId: DestId; nama: string }) {
  const [tab, setTab] = useState<SentTab>("pos");
  const meta = SENT_META[tab];
  const rows = SAMPLE_SENTIMEN[destId][tab];
  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-sm font-bold">{nama}</h4>
        <div className="flex gap-1.5">
          {(Object.keys(SENT_META) as SentTab[]).map((k) => {
            const m = SENT_META[k];
            const active = k === tab;
            return (
              <button
                key={k}
                onClick={() => setTab(k)}
                className="rounded-full px-3 py-1 text-xs font-semibold transition"
                style={{
                  background: active ? m.color : "transparent",
                  color: active ? "white" : m.color,
                  border: `1px solid ${m.color}`,
                }}
              >
                {m.label}
              </button>
            );
          })}
        </div>
      </div>
      <ReviewTable rows={rows} accent={meta.color} />
    </div>
  );
}

function RatingPreview({ destId, nama, accent }: { destId: DestId; nama: string; accent: string }) {
  const [star, setStar] = useState<1 | 2 | 3 | 4 | 5>(5);
  const rows = SAMPLE_RATING[destId][star];
  return (
    <div className="rounded-xl border border-border bg-white p-4">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <h4 className="text-sm font-bold">{nama}</h4>
        <div className="flex gap-1">
          {([1, 2, 3, 4, 5] as const).map((s) => {
            const active = s === star;
            return (
              <button
                key={s}
                onClick={() => setStar(s)}
                className="rounded-md px-2.5 py-1 text-xs font-bold transition"
                style={{
                  background: active ? accent : "#f1f5f9",
                  color: active ? "white" : "#475569",
                }}
              >
                {s}★
              </button>
            );
          })}
        </div>
      </div>
      <ReviewTable rows={rows} accent={accent} />
    </div>
  );
}

function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <h3 className="text-base font-bold text-foreground">{title}</h3>
      {subtitle && <p className="mb-4 text-xs text-muted-foreground">{subtitle}</p>}
      {!subtitle && <div className="mb-2" />}
      {children}
    </div>
  );
}

/* ---------------- BERANDA & PETA ---------------- */
export function BerandaSection() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Dashboard Perbandingan Pariwisata"
        subtitle="Analisis Ulasan Google Maps · Desa Wae Rebo vs Taman Nasional Komodo · Nusa Tenggara Timur"
      />
      <SummaryCards />
      <Card title="📍 Peta Lokasi Destinasi Wisata" subtitle="🟢 Hijau = positif dominan   |   🔴 Merah = negatif > 50%">
        <MapView />
      </Card>
      <Card title="📋 Ringkasan Perbandingan">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-900 text-white">
              <tr>
                {["Destinasi", "Total Ulasan", "Positif", "Negatif", "Netral", "% Negatif", "Status"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {DESTINASI.map((d) => {
                const pct = (d.negatif / d.total) * 100;
                return (
                  <tr key={d.id} className="border-b border-border">
                    <td className="px-4 py-3 font-medium">{d.nama}</td>
                    <td className="px-4 py-3 text-right">{d.total.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right text-emerald-600">{d.positif}</td>
                    <td className="px-4 py-3 text-right text-red-600">{d.negatif}</td>
                    <td className="px-4 py-3 text-right text-slate-500">{d.netral}</td>
                    <td className="px-4 py-3 text-right font-bold">{pct.toFixed(2)}%</td>
                    <td className="px-4 py-3">
                      <span className="rounded-md bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700">
                        ⚠ Perlu Perhatian
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

/* ---------------- ANALISIS SENTIMEN ---------------- */
export function SentimenSection() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Analisis Sentimen & Distribusi Rating"
        subtitle="Analisis Ulasan Google Maps · Desa Wae Rebo vs Taman Nasional Komodo"
      />
      <SummaryCards />
      <Card title="📊 Distribusi Sentimen per Destinasi" subtitle="Perbandingan jumlah ulasan positif, negatif, dan netral tiap lokasi">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DESTINASI.map((d) => {
            const data = [
              { name: "Positif", value: d.positif, fill: POS },
              { name: "Negatif", value: d.negatif, fill: NEG },
              { name: "Netral", value: d.netral, fill: NEU },
            ];
            return (
              <div key={d.id} className="rounded-xl bg-slate-50 p-4">
                <h4 className="mb-2 text-center text-lg font-bold">{d.nama}</h4>
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      <LabelList dataKey="value" position="top" className="fill-foreground font-bold" />
                      {data.map((e, i) => <Cell key={i} fill={e.fill} />)}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            );
          })}
        </div>
      </Card>
      <Card title="💬 Contoh Ulasan per Sentimen" subtitle="Pilih kategori (Positif / Negatif / Netral) untuk melihat preview ulasan tiap destinasi">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {DESTINASI.map((d) => (
            <SentimenPreview key={d.id} destId={d.id as DestId} nama={d.nama} />
          ))}
        </div>
      </Card>
      <Card title="⭐ Distribusi Rating Bintang" subtitle="Pola pemberian bintang (1–5) oleh pengunjung per destinasi">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DESTINASI.map((d) => (
            <div key={d.id} className="rounded-xl bg-slate-50 p-4">
              <h4 className="mb-2 text-center text-lg font-bold">{d.nama}</h4>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={d.rating}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="bintang" label={{ value: "Rating (★)", position: "insideBottom", offset: -2 }} />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="jumlah" fill={d.warna} radius={[6, 6, 0, 0]}>
                    <LabelList dataKey="jumlah" position="top" className="fill-foreground font-bold" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      </Card>
      <Card title="📝 Contoh Ulasan per Rating Bintang" subtitle="Pilih jumlah bintang (1–5) untuk melihat contoh ulasan dari pengunjung">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {DESTINASI.map((d) => (
            <RatingPreview key={d.id} destId={d.id as DestId} nama={d.nama} accent={d.warna} />
          ))}
        </div>
      </Card>
    </div>
  );
}

/* ---------------- KLASIFIKASI ---------------- */
const MODEL_NAMES = ["SVM", "Random Forest", "Naive Bayes"] as const;
type ModelName = (typeof MODEL_NAMES)[number];
const MODEL_PALETTE: Record<ModelName, { base: string; soft: string }> = {
  SVM: { base: "#2563eb", soft: "#dbeafe" },
  "Random Forest": { base: "#059669", soft: "#d1fae5" },
  "Naive Bayes": { base: "#ea580c", soft: "#ffedd5" },
};

function MetricBar({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
      <div className="h-full rounded-full bg-slate-700" style={{ width: `${value * 100}%` }} />
    </div>
  );
}

function ConfusionMatrix({ cm, color }: { cm: number[][]; color: string }) {
  const labels = ["Negatif", "Netral", "Positif"];
  const max = Math.max(...cm.flat());
  return (
    <div className="inline-block">
      <div className="mb-1 text-center text-xs text-muted-foreground">Prediksi →</div>
      <div className="grid" style={{ gridTemplateColumns: "auto repeat(3, minmax(0, 1fr))" }}>
        <div />
        {labels.map((l) => (
          <div key={l} className="px-2 py-1 text-center text-xs font-semibold text-muted-foreground">{l}</div>
        ))}
        {cm.map((row, i) => (
          <div key={i} className="contents">
            <div className="flex items-center justify-end pr-2 text-xs font-semibold text-muted-foreground">{labels[i]}</div>
            {row.map((v, j) => {
              const t = max ? v / max : 0;
              return (
                <div
                  key={`${i}-${j}`}
                  className="m-0.5 flex aspect-square items-center justify-center rounded-md text-sm font-bold"
                  style={{
                    background: `color-mix(in oklab, ${color} ${10 + t * 80}%, white)`,
                    color: t > 0.55 ? "white" : "#0f172a",
                  }}
                >
                  {v}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

function ClassReportTable({ detail }: { detail: typeof MODEL_DETAIL["SVM"]["wae_rebo"] }) {
  const rows: { label: string; m: { precision: number; recall: number; f1: number; support: number } }[] = [
    { label: "Negatif", m: detail.classes.Negatif },
    { label: "Netral",  m: detail.classes.Netral },
    { label: "Positif", m: detail.classes.Positif },
    { label: "Macro avg",    m: detail.macro },
    { label: "Weighted avg", m: detail.weighted },
  ];
  return (
    <table className="w-full text-xs">
      <thead>
        <tr className="text-left text-muted-foreground">
          <th className="pb-2 font-semibold">Kelas</th>
          <th className="pb-2 text-right font-semibold">Precision</th>
          <th className="pb-2 text-right font-semibold">Recall</th>
          <th className="pb-2 text-right font-semibold">F1-Score</th>
          <th className="pb-2 text-right font-semibold">Support</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r.label} className={`border-t border-border ${i >= 3 ? "bg-slate-50 font-semibold" : ""}`}>
            <td className="py-1.5">{r.label}</td>
            <td className="py-1.5 text-right">{r.m.precision.toFixed(2)}</td>
            <td className="py-1.5 text-right">{r.m.recall.toFixed(2)}</td>
            <td className="py-1.5 text-right font-bold text-foreground">{r.m.f1.toFixed(2)}</td>
            <td className="py-1.5 text-right">{r.m.support}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function KlasifikasiSection() {
  const [model, setModel] = useState<ModelName>("SVM");
  const detail = MODEL_DETAIL[model];
  const color = MODEL_PALETTE[model].base;

  const f1Compare = (["Negatif", "Netral", "Positif"] as const).map((cls) => ({
    kelas: cls,
    "Desa Wae Rebo": detail.wae_rebo.classes[cls].f1,
    "Taman Nasional Komodo": detail.komodo.classes[cls].f1,
  }));

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Perbandingan Model Klasifikasi"
        subtitle="SVM · Random Forest · Naive Bayes — akurasi, precision, recall, F1-score & confusion matrix"
      />
      <SummaryCards />

      <Card title="📊 Akurasi Keseluruhan" subtitle="Perbandingan akurasi tiga model pada kedua destinasi">
        <ResponsiveContainer width="100%" height={340}>
          <BarChart data={MODEL_AKURASI} barCategoryGap={40}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="model" tick={{ fontWeight: 700 }} />
            <YAxis domain={[0, 100]} unit="%" />
            <Tooltip />
            <Legend />
            <Bar dataKey="wae_rebo" name="Desa Wae Rebo" fill="#2563eb" radius={[6, 6, 0, 0]}>
              <LabelList dataKey="wae_rebo" position="top" formatter={(v: any) => `${v}%`} className="fill-foreground font-bold" />
            </Bar>
            <Bar dataKey="komodo" name="Taman Nasional Komodo" fill="#ef4444" radius={[6, 6, 0, 0]}>
              <LabelList dataKey="komodo" position="top" formatter={(v: any) => `${v}%`} className="fill-foreground font-bold" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card title="🔬 Evaluasi Detail per Model" subtitle="Pilih model untuk melihat precision · recall · F1-score · confusion matrix">
        <div className="mb-5 flex flex-wrap gap-2">
          {MODEL_NAMES.map((m) => {
            const active = m === model;
            const p = MODEL_PALETTE[m];
            return (
              <button
                key={m}
                onClick={() => setModel(m)}
                className="rounded-full px-4 py-2 text-sm font-semibold transition-all"
                style={{
                  background: active ? p.base : p.soft,
                  color: active ? "white" : p.base,
                  boxShadow: active ? `0 4px 12px -2px ${p.base}55` : "none",
                }}
              >
                {m}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {([
            { id: "wae_rebo", nama: "Desa Wae Rebo", det: detail.wae_rebo, accent: "#2563eb" },
            { id: "komodo", nama: "Taman Nasional Komodo", det: detail.komodo, accent: "#ef4444" },
          ] as const).map((d) => (
            <div key={d.id} className="rounded-xl border border-border bg-slate-50/50 p-4">
              <div className="flex items-baseline justify-between">
                <h4 className="text-base font-bold">{d.nama}</h4>
                <span className="text-2xl font-extrabold" style={{ color: d.accent }}>
                  {d.det.accuracy.toFixed(2)}%
                </span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Akurasi keseluruhan</div>
              <MetricBar value={d.det.accuracy / 100} />

              <div className="mt-4 overflow-x-auto rounded-lg bg-white p-3 ring-1 ring-border">
                <ClassReportTable detail={d.det} />
              </div>

              <div className="mt-4">
                <div className="mb-2 text-sm font-semibold">Confusion Matrix</div>
                <ConfusionMatrix cm={d.det.cm} color={color} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="🎯 Perbandingan F1-Score per Kelas" subtitle={`Model ${model} — kemampuan model di setiap kelas sentimen`}>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={f1Compare} barCategoryGap={30}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="kelas" tick={{ fontWeight: 700 }} />
            <YAxis domain={[0, 1]} />
            <Tooltip formatter={(v: any) => Number(v).toFixed(2)} />
            <Legend />
            <Bar dataKey="Desa Wae Rebo" fill="#2563eb" radius={[6, 6, 0, 0]}>
              <LabelList dataKey="Desa Wae Rebo" position="top" formatter={(v: any) => Number(v).toFixed(2)} className="fill-foreground font-bold" />
            </Bar>
            <Bar dataKey="Taman Nasional Komodo" fill="#ef4444" radius={[6, 6, 0, 0]}>
              <LabelList dataKey="Taman Nasional Komodo" position="top" formatter={(v: any) => Number(v).toFixed(2)} className="fill-foreground font-bold" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}

/* ---------------- KLASTERISASI ---------------- */
const CLUSTER_COLORS = ["#1e40af", "#06b6d4"];

function MetricCard({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-xl border border-border bg-white p-4 shadow-sm" style={{ borderLeft: `4px solid ${color}` }}>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-1 text-3xl font-extrabold tracking-tight text-foreground">{value}</div>
    </div>
  );
}

export function KlasterisasiSection() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Hasil K-Means Clustering"
        subtitle="Pengelompokan ulasan berdasarkan kemiripan konten teks (SVD → K-Means)"
      />
      {DESTINASI.map((d) => {
        const km = d.kmeans;
        return (
          <Card key={d.id} title={`🧩 ${d.nama}`} subtitle={`K-Means (K=${km.k}) · proyeksi 2 komponen SVD`}>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_240px]">
              <div className="rounded-xl bg-slate-50 p-3">
                <h4 className="mb-2 text-center text-sm font-bold">K-Means (K={km.k})</h4>
                <ResponsiveContainer width="100%" height={340}>
                  <ScatterChart margin={{ top: 10, right: 20, bottom: 30, left: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" dataKey="x" name="SVD Komponen 1" tick={{ fontSize: 11 }}
                      label={{ value: "SVD Komponen 1", position: "insideBottom", offset: -10, fontSize: 12 }} />
                    <YAxis type="number" dataKey="y" name="SVD Komponen 2" tick={{ fontSize: 11 }}
                      label={{ value: "SVD Komponen 2", angle: -90, position: "insideLeft", fontSize: 12 }} />
                    <ZAxis range={[28, 28]} />
                    <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                    <Legend />
                    {[0, 1].map((c) => (
                      <Scatter
                        key={c}
                        name={`Klaster ${c}`}
                        data={km.points.filter((p) => p.c === c)}
                        fill={CLUSTER_COLORS[c]}
                        fillOpacity={0.6}
                      />
                    ))}
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col gap-3">
                <MetricCard label="Jumlah Klaster (K)" value={String(km.k)} color="#2563eb" />
                <MetricCard label="Silhouette Score" value={km.silhouette.toFixed(4)} color="#10b981" />
                <MetricCard label="Davies-Bouldin" value={km.daviesBouldin.toFixed(4)} color="#f59e0b" />
                <MetricCard label="Calinski-Harabasz" value={km.calinski.toFixed(2)} color="#8b5cf6" />
              </div>
            </div>

            <div className="mt-5">
              <h4 className="mb-2 text-sm font-bold">📑 Kata Dominan per Klaster</h4>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold">Klaster</th>
                      <th className="px-4 py-2 text-right font-semibold">Jumlah Review</th>
                      <th className="px-4 py-2 text-left font-semibold">Top Kata</th>
                    </tr>
                  </thead>
                  <tbody>
                    {km.topKata.map((k) => (
                      <tr key={k.cluster} className="border-t border-border">
                        <td className="px-4 py-2">
                          <span className="inline-flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full" style={{ background: CLUSTER_COLORS[k.cluster] }} />
                            <span className="font-semibold">{k.cluster}</span>
                          </span>
                        </td>
                        <td className="px-4 py-2 text-right font-medium">{k.jumlah.toLocaleString()}</td>
                        <td className="px-4 py-2">
                          <div className="flex flex-wrap gap-1.5">
                            {k.kata.map((w) => (
                              <span key={w} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">{w}</span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

/* ---------------- RADAR ---------------- */
export function RadarSection() {
  const w = DESTINASI[0].kmeans;
  const k = DESTINASI[1].kmeans;
  // normalisasi 0–1: Silhouette langsung, Davies-Bouldin diinvert, Calinski dibagi maks
  const maxCH = Math.max(w.calinski, k.calinski);
  const maxDB = Math.max(w.daviesBouldin, k.daviesBouldin);
  const norm = (m: typeof w) => ({
    "Silhouette (↑ bagus)": +(m.silhouette).toFixed(3),
    "Davies-Bouldin (↓ bagus)": +(1 - m.daviesBouldin / maxDB).toFixed(3),
    "Calinski-Harabasz (↑ bagus)": +(m.calinski / maxCH).toFixed(3),
  });
  const wn = norm(w), kn = norm(k);
  const axes = Object.keys(wn);
  const data = axes.map((a) => ({
    metric: a,
    "Desa Wae Rebo": (wn as any)[a],
    "Taman Nasional Komodo": (kn as any)[a],
  }));

  return (
    <div className="space-y-6">
      <SectionHeader
        title="Radar Chart — Perbandingan Kualitas Clustering"
        subtitle="Perbandingan metrik evaluasi klaster antara kedua destinasi (dinormalisasi)"
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Card title="🎯 Radar Metrik Klasterisasi" subtitle="Area lebih luas = kualitas klaster lebih baik secara keseluruhan">
          <ResponsiveContainer width="100%" height={420}>
            <RadarChart data={data} outerRadius="78%">
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" tick={{ fontWeight: 600, fontSize: 12 }} />
              <PolarRadiusAxis domain={[0, 1]} tick={{ fontSize: 10 }} />
              <Radar name="Desa Wae Rebo" dataKey="Desa Wae Rebo" stroke="#2563eb" fill="#2563eb" fillOpacity={0.30} strokeWidth={2} />
              <Radar name="Taman Nasional Komodo" dataKey="Taman Nasional Komodo" stroke="#ef4444" fill="#ef4444" fillOpacity={0.30} strokeWidth={2} />
              <Legend />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        <div className="space-y-4">
          <Card title="📊 Nilai Metrik Asli">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Destinasi</th>
                    <th className="px-3 py-2 text-right font-semibold">Silhouette (↑)</th>
                    <th className="px-3 py-2 text-right font-semibold">Davies-Bouldin (↓)</th>
                    <th className="px-3 py-2 text-right font-semibold">Calinski-Harabasz (↑)</th>
                  </tr>
                </thead>
                <tbody>
                  {DESTINASI.map((d) => (
                    <tr key={d.id} className="border-t border-border">
                      <td className="px-3 py-2 font-medium">{d.nama}</td>
                      <td className="px-3 py-2 text-right">{d.kmeans.silhouette.toFixed(4)}</td>
                      <td className="px-3 py-2 text-right">{d.kmeans.daviesBouldin.toFixed(4)}</td>
                      <td className="px-3 py-2 text-right">{d.kmeans.calinski.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          <Card title="ℹ️ Cara Membaca Radar">
            <ul className="list-disc space-y-2 pl-5 text-sm text-foreground">
              <li><b>Silhouette</b>: mendekati 1 = klaster jelas terpisah</li>
              <li><b>Davies-Bouldin</b>: mendekati 0 = klaster kompak (diinvert di radar)</li>
              <li><b>Calinski-Harabasz</b>: semakin besar semakin baik</li>
              <li><b>Area lebih luas</b> = kualitas klasterisasi lebih baik secara keseluruhan</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ---------------- TOPIC MODELING ---------------- */
const TOPIC_COLORS = ["#10b981", "#f59e0b", "#2563eb", "#8b5cf6"];
export function TopicSection() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Distribusi Topik — LDA"
        subtitle="Topik otomatis dari kata kunci dominan tiap destinasi"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {DESTINASI.map((d) => (
          <Card key={d.id} title={d.nama} subtitle={`${d.topikLda.length} topik utama (LDA)`}>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={d.topikLda}
                  dataKey="nilai"
                  nameKey="nama"
                  innerRadius={65}
                  outerRadius={115}
                  paddingAngle={3}
                  label={(p: any) => `${p.nilai}%`}
                  labelLine={false}
                >
                  {d.topikLda.map((_, i) => <Cell key={i} fill={TOPIC_COLORS[i % 4]} />)}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------------- TRENDING ---------------- */
export function TrendingSection() {
  return (
    <div className="space-y-6">
      <SectionHeader title="Trending Topik" subtitle="Kata kunci paling sering muncul dalam ulasan per destinasi" />
      <div className="space-y-6">
        {DESTINASI.map((d) => (
          <Card key={d.id} title={`📈 ${d.nama}`} subtitle="Perkembangan jumlah ulasan per topik dari bulan ke bulan">
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={d.topikTrend} margin={{ left: 0, right: 20, top: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bulan" tick={{ fontSize: 11 }} angle={-35} textAnchor="end" height={60} />
                <YAxis tick={{ fontSize: 11 }} label={{ value: "Jumlah Review", angle: -90, position: "insideLeft", fontSize: 12 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                {d.topikSeries.map((t, i) => (
                  <Area
                    key={t}
                    type="monotone"
                    dataKey={t}
                    stroke={TOPIC_COLORS[i % 4]}
                    fill={TOPIC_COLORS[i % 4]}
                    fillOpacity={0.15}
                    strokeWidth={2}
                    dot={{ r: 3 }}
                    activeDot={{ r: 5 }}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {DESTINASI.map((d) => (
          <Card key={d.id} title={`🔥 ${d.nama}`} subtitle="Top 10 kata trending">
            <ResponsiveContainer width="100%" height={360}>
              <BarChart data={d.trending} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="kata" width={90} />
                <Tooltip />
                <Bar dataKey="freq" fill={d.warna} radius={[0, 6, 6, 0]}>
                  <LabelList dataKey="freq" position="right" className="fill-foreground font-semibold" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------------- WORDCLOUD ---------------- */
export function WordcloudSection() {
  return (
    <div className="space-y-6">
      <SectionHeader
        title="WordCloud Masalah & Pujian"
        subtitle="Kata-kata dominan dari ulasan negatif (merah) dan positif (hijau)"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {DESTINASI.map((d) => (
          <Card key={d.id} title={d.nama} subtitle="Merah = negatif · Hijau = positif · ukuran = bobot frekuensi">
            <div className="flex min-h-[280px] flex-wrap content-center items-center justify-center gap-x-3 gap-y-2 rounded-xl bg-slate-50 p-5">
              {[...d.wordcloud]
                .sort((a, b) => b.bobot - a.bobot)
                .map((w) => (
                  <span
                    key={w.kata}
                    className="font-extrabold leading-tight tracking-tight"
                    style={{
                      fontSize: `${14 + (w.bobot / 100) * 28}px`,
                      color: w.sentimen === "neg" ? "#dc2626" : "#059669",
                      opacity: 0.55 + (w.bobot / 100) * 0.45,
                    }}
                  >
                    {w.kata}
                  </span>
                ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------------- SNA ---------------- */
export function SnaSection() {
  const GROUP_COLOR: Record<string, string> = {
    destinasi: "#2563eb",
    hub: "#f59e0b",
    topik: "#10b981",
    isu: "#ef4444",
  };
  const nodeById = Object.fromEntries(SNA_NODES.map((n) => [n.id, n]));
  return (
    <div className="space-y-6">
      <SectionHeader
        title="Jaringan Antar Destinasi (SNA)"
        subtitle="Hubungan destinasi, hub geografis, topik utama, dan isu — ketebalan garis = kuat koneksi"
      />
      <Card title="🕸️ Graph Jaringan" subtitle="Node = entitas · Garis = relasi (semakin tebal, semakin kuat)">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100">
          <svg viewBox="0 0 100 75" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 h-full w-full">
            {SNA_EDGES.map(([a, b, w], i) => {
              const na = nodeById[a], nb = nodeById[b];
              if (!na || !nb) return null;
              return (
                <line
                  key={i}
                  x1={na.x} y1={na.y * 0.75}
                  x2={nb.x} y2={nb.y * 0.75}
                  stroke="#94a3b8" strokeOpacity={0.55}
                  strokeWidth={0.25 + w * 0.18}
                />
              );
            })}
            {SNA_NODES.map((n) => (
              <g key={n.id}>
                <circle
                  cx={n.x} cy={n.y * 0.75}
                  r={n.size / 12}
                  fill={GROUP_COLOR[n.group]} fillOpacity={0.85}
                  stroke="white" strokeWidth={0.5}
                />
                <text
                  x={n.x} y={n.y * 0.75 + n.size / 12 + 2.2}
                  textAnchor="middle" fontSize="2.1" fontWeight="700" fill="#0f172a"
                >
                  {n.id}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs">
          {Object.entries(GROUP_COLOR).map(([g, c]) => (
            <span key={g} className="flex items-center gap-1.5 capitalize">
              <span className="h-3 w-3 rounded-full" style={{ background: c }} />{g}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}
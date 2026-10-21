export function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-panel p-5">
      <p className="text-sm text-slate-300">{label}</p>
      <h3 className="mt-3 text-3xl font-semibold">{value}</h3>
      <p className="mt-2 text-sm text-slate-400">{hint}</p>
    </div>
  );
}

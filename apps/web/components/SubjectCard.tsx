export function SubjectCard({ name, level, progress }: { name: string; level: string; progress: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-panel p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">{name}</h4>
        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-cyan">{level}</span>
      </div>
      <p className="mt-3 text-sm text-slate-400">Fortschritt</p>
      <div className="mt-2 h-2 w-full rounded-full bg-white/5">
        <div className="h-2 rounded-full bg-primary" style={{ width: progress }} />
      </div>
      <p className="mt-2 text-sm text-slate-300">{progress}</p>
    </div>
  );
}

import './globals.css';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan">NeuroLearn</p>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">Lernen, das deinem Gehirn entspricht.</h1>
          </div>
          <button className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-white">Los geht&apos;s</button>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <p className="text-sm text-slate-300">Lernprofil</p>
            <h2 className="mt-4 text-3xl font-semibold">92%</h2>
            <p className="mt-3 text-sm text-slate-400">Persönlicher Lernstil erkannt</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <p className="text-sm text-slate-300">Heutiger Plan</p>
            <h2 className="mt-4 text-3xl font-semibold">3 Fächer</h2>
            <p className="mt-3 text-sm text-slate-400">Optimiert für Fokus und Erinnerung</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <p className="text-sm text-slate-300">Wiederholungen</p>
            <h2 className="mt-4 text-3xl font-semibold">18 Karten</h2>
            <p className="mt-3 text-sm text-slate-400">Spaced Repetition aktiv</p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <p className="text-lg font-semibold">Heutiger Lernplan</p>
            <ul className="mt-5 space-y-3 text-slate-200">
              <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"><span>Deutsch · Textanalyse</span><span>25 min</span></li>
              <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"><span>Französisch · Vokabeln</span><span>20 min</span></li>
              <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"><span>Mathe · Wiederholung</span><span>30 min</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <p className="text-lg font-semibold">AI Insights</p>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="rounded-xl bg-primary/10 p-3">Du lernst am besten visuell und mit kurzen Aktivierungs-Phasen.</div>
              <div className="rounded-xl bg-cyan/10 p-3">Deine stärkste Lücke liegt in Latein-Grammatik.</div>
              <div className="rounded-xl bg-success/10 p-3">Quiz-Ergebnisse steigen seit 3 Tagen kontinuierlich.</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

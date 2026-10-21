import { Layout } from '../../components/Layout';
import { StatCard } from '../../components/StatCard';
import { SubjectCard } from '../../components/SubjectCard';

export default function DashboardPage() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan">Dashboard</p>
          <h1 className="mt-3 text-4xl font-bold">Willkommen zurück</h1>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <StatCard label="Lernprofil" value="92%" hint="Persönlicher Lernstil erkannt" />
          <StatCard label="Heute" value="3 Fächer" hint="Optimiert für Fokus" />
          <StatCard label="Wiederholungen" value="18 Karten" hint="Spaced Repetition aktiv" />
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-panel p-5">
            <p className="text-lg font-semibold">Heutiger Lernplan</p>
            <ul className="mt-5 space-y-3 text-slate-200">
              <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"><span>Deutsch · Textanalyse</span><span>25 min</span></li>
              <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"><span>Französisch · Vokabeln</span><span>20 min</span></li>
              <li className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"><span>Mathe · Wiederholung</span><span>30 min</span></li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panel p-5">
            <p className="text-lg font-semibold">AI Insights</p>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <div className="rounded-xl bg-primary/10 p-3">Du lernst am besten visuell mit kurzen Lernphasen.</div>
              <div className="rounded-xl bg-cyan/10 p-3">Latein-Grammatik ist deine größte Lücke.</div>
              <div className="rounded-xl bg-success/10 p-3">Fortschritt steigt seit 3 Tagen.</div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <SubjectCard name="Deutsch" level="Stark" progress="80%" />
          <SubjectCard name="Französisch" level="Mittel" progress="65%" />
          <SubjectCard name="Mathe" level="Aktiv" progress="72%" />
        </div>
      </div>
    </Layout>
  );
}

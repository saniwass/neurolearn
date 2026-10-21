import { Layout } from '../components/Layout';

export default function LoginPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-panel p-8 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan">NeuroLearn</p>
        <h1 className="mt-4 text-4xl font-bold">Anmelden</h1>
        <div className="mt-8 space-y-4">
          <input className="w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none" placeholder="E-Mail" />
          <input type="password" className="w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none" placeholder="Passwort" />
          <button className="w-full rounded-xl bg-primary px-4 py-3 font-medium text-white">Einloggen</button>
        </div>
      </div>
    </Layout>
  );
}
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-panel p-8 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan">NeuroLearn</p>
        <h1 className="mt-4 text-4xl font-bold text-text">Anmelden</h1>

        <div className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm text-slate-300">E-Mail</label>
            <input
              type="email"
              placeholder="deine@email.de"
              className="w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none placeholder:text-slate-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Passwort</label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none placeholder:text-slate-500"
            />
          </div>

          <button className="w-full rounded-xl bg-primary px-4 py-3 font-medium text-white">
            Einloggen
          </button>

          <div className="text-center text-sm text-slate-400">
            Noch kein Konto?{' '}
            <Link href="/register" className="text-cyan">
              Registrieren
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
'use client';

import { useEffect, useState } from 'react';

type PlanItem = {
  subject: string;
  duration: number;
  task: string;
};

type DashboardData = {
  date: string;
  plan: PlanItem[];
};

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const userRaw = localStorage.getItem('neurolearn_user');
        if (!userRaw) return;

        const user = JSON.parse(userRaw);
        const res = await fetch(`http://localhost:8000/study-plan/?user_id=${user.id}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-bg text-text">
        <p>Lädt...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg p-6 text-text">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan">NeuroLearn</p>
          <h1 className="mt-3 text-4xl font-bold">Willkommen zurück</h1>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-panel p-5">
            <p className="text-sm text-slate-300">Lernprofil</p>
            <h2 className="mt-3 text-3xl font-semibold">92%</h2>
            <p className="mt-2 text-sm text-slate-400">Persönlicher Lernstil erkannt</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-panel p-5">
            <p className="text-sm text-slate-300">Heutiger Plan</p>
            <h2 className="mt-3 text-3xl font-semibold">{data?.plan.length ?? 0} Fächer</h2>
            <p className="mt-2 text-sm text-slate-400">Optimiert für Fokus & Erinnerung</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-panel p-5">
            <p className="text-sm text-slate-300">Wiederholungen</p>
            <h2 className="mt-3 text-3xl font-semibold">18 Karten</h2>
            <p className="mt-2 text-sm text-slate-400">Spaced repetition aktiv</p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <p className="text-lg font-semibold">Heutiger Lernplan</p>

            <ul className="mt-5 space-y-3 text-slate-200">
              {(data?.plan ?? []).map((item) => (
                <li
                  key={item.subject}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                >
                  <div>
                    <span className="font-medium">{item.subject}</span>
                    <p className="text-sm text-slate-400">{item.task}</p>
                  </div>
                  <span>{item.duration} min</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-panel p-6">
            <p className="text-lg font-semibold">AI Insights</p>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="rounded-xl bg-primary/10 p-3">
                Du lernst am besten visuell und mit kurzen Aktivierungsphasen.
              </div>
              <div className="rounded-xl bg-cyan/10 p-3">
                Deine stärkste Lücke liegt in Latein-Grammatik.
              </div>
              <div className="rounded-xl bg-success/10 p-3">
                Quiz-Ergebnisse steigen seit 3 Tagen kontinuierlich.
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
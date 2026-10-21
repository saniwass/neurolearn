import { Layout } from '../../components/Layout';

export default function OnboardingPage() {
  return (
    <Layout>
      <div className="max-w-3xl space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan">Onboarding</p>
          <h1 className="mt-3 text-4xl font-bold">Dein Lernprofil</h1>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-panel p-5">
            <p className="mb-2 text-sm text-slate-300">Schulstufe</p>
            <select className="w-full rounded-xl border border-white/10 bg-bg px-3 py-2 text-text">
              <option>Gymnasium</option>
              <option>Berufsschule</option>
              <option>Studium</option>
            </select>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panel p-5">
            <p className="mb-2 text-sm text-slate-300">Bundesland</p>
            <select className="w-full rounded-xl border border-white/10 bg-bg px-3 py-2 text-text">
              <option>Bayern</option>
              <option>NRW</option>
              <option>Berlin</option>
            </select>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-panel p-5">
          <p className="mb-3 text-sm text-slate-300">Lernstil</p>
          <div className="flex flex-wrap gap-2">
            {['Visuell', 'Auditiv', 'Kinästhetisch', 'Logisch', 'Sprachlich'].map((style) => (
              <span key={style} className="rounded-full border border-white/10 bg-bg px-3 py-2 text-sm">{style}</span>
            ))}
          </div>
        </div>

        <button className="rounded-xl bg-primary px-4 py-3 font-medium text-white">Profil speichern</button>
      </div>
    </Layout>
  );
}
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-4">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-panel p-8 shadow-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan">NeuroLearn</p>
        <h1 className="mt-4 text-4xl font-bold text-text">Registrieren</h1>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Name</label>
            <input
              type="text"
              placeholder="Max Mustermann"
              className="w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none placeholder:text-slate-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">E-Mail</label>
            <input
              type="email"
              placeholder="deine@email.de"
              className="w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none placeholder:text-slate-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-slate-300">Passwort</label>
            <input
              type="password"
              placeholder="********"
              className="w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none placeholder:text-slate-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Schulstufe</label>
            <select className="w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none">
              <option>Gymnasium</option>
              <option>Berufsschule</option>
              <option>Studium</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300">Bundesland</label>
            <select className="w-full rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none">
              <option>Bayern</option>
              <option>NRW</option>
              <option>Berlin</option>
              <option>Hamburg</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <button className="w-full rounded-xl bg-primary px-4 py-3 font-medium text-white">
              Konto erstellen
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-400">
          Bereits registriert?{' '}
          <Link href="/login" className="text-cyan">
            Einloggen
          </Link>
        </div>
      </div>
    </main>
  );
}
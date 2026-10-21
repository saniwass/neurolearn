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

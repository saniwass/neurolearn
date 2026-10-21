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

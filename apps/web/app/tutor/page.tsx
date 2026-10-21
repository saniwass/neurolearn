import { Layout } from '../../components/Layout';

export default function TutorPage() {
  return (
    <Layout>
      <div className="max-w-3xl rounded-2xl border border-white/10 bg-panel p-6">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan">AI Tutor</p>
        <h1 className="mt-3 text-4xl font-bold">Lernassistent</h1>

        <div className="mt-6 space-y-4">
          <div className="rounded-xl bg-white/5 p-4 text-slate-200">Erkläre mir die wichtigsten Punkte zu diesem Thema in einfacher Sprache.</div>
          <div className="rounded-xl bg-primary/10 p-4 text-slate-100">Du musst vor allem die Kernbegriffe verstehen und sie mit kurzen Wiederholungszyklen verknüpfen.</div>
        </div>

        <div className="mt-6 flex gap-3">
          <input className="flex-1 rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none" placeholder="Frage an den Tutor..." />
          <button className="rounded-xl bg-primary px-4 py-3 font-medium text-white">Senden</button>
        </div>
      </div>
    </Layout>
  );
}

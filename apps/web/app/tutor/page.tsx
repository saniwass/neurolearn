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
'use client';

import { useState } from 'react';

export default function TutorPage() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  async function askTutor() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer('');

    try {
      const res = await fetch('http://localhost:8000/ai/chat-tutor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
        }),
      });

      const data = await res.json();
      setAnswer(data.reply || 'Keine Antwort erhalten.');
    } catch (err) {
      console.error(err);
      setAnswer('Es gab ein Problem mit dem Lernassistenten.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-bg p-6 text-text">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan">AI Tutor</p>
        <h1 className="mt-4 text-4xl font-bold">Lernassistent</h1>

        <div className="mt-8 rounded-2xl border border-white/10 bg-panel p-6">
          <div className="space-y-4">
            <div className="rounded-xl bg-white/5 p-4 text-slate-200">
              Erkläre mir die wichtigsten Punkte zu diesem Thema in einfacher Sprache.
            </div>

            {answer && (
              <div className="rounded-xl bg-primary/10 p-4 text-slate-100">
                {answer}
              </div>
            )}

            {loading && (
              <div className="rounded-xl bg-white/5 p-4 text-slate-300">
                Der Lernassistent denkt nach...
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Frage an den Tutor..."
              className="flex-1 rounded-xl border border-white/10 bg-bg px-4 py-3 text-text outline-none"
            />
            <button
              onClick={askTutor}
              disabled={loading}
              className="rounded-xl bg-primary px-4 py-3 font-medium text-white disabled:opacity-60"
            >
              Senden
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
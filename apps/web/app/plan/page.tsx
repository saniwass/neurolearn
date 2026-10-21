import { Layout } from '../../components/Layout';

export default function StudyPlanPage() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan">Lernplan</p>
          <h1 className="mt-3 text-4xl font-bold">Heutiger Plan</h1>
        </div>

        <div className="rounded-2xl border border-white/10 bg-panel p-6">
          <ul className="space-y-4">
            {[
              ['09:00', 'Deutsch', 'Textanalyse', '25 min'],
              ['09:35', 'Französisch', 'Vokabeln', '20 min'],
              ['10:00', 'Mathe', 'Wiederholung', '30 min'],
              ['17:00', 'Latein', 'Grammatik', '20 min']
            ].map(([time, subject, task, duration]) => (
              <li key={time} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan">{time}</p>
                  <p className="mt-1 font-semibold">{subject}</p>
                  <p className="text-sm text-slate-400">{task}</p>
                </div>
                <span className="text-sm text-slate-200">{duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

import Link from 'next/link';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-white/10 bg-panel p-4">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan">NeuroLearn</p>
        </div>
        <nav className="space-y-2">
          <Link href="/dashboard" className="block rounded-xl bg-white/5 px-3 py-2">Dashboard</Link>
          <Link href="/plan" className="block rounded-xl bg-white/5 px-3 py-2">Lernplan</Link>
          <Link href="/tutor" className="block rounded-xl bg-white/5 px-3 py-2">AI Tutor</Link>
          <Link href="/onboarding" className="block rounded-xl bg-white/5 px-3 py-2">Onboarding</Link>
        </nav>
      </aside>
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
}

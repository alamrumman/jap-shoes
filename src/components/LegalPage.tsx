import { PageShell } from './PageShell'
import { Footer } from './Footer'

export interface LegalSection {
  ja: string
  en?: string
  body: string
}

export function LegalPage({
  ja,
  intro,
  sections,
}: {
  ja: string
  en?: string
  intro: string
  sections: LegalSection[]
}) {
  return (
    <PageShell bg="#f4efe8">
      <div className="mx-auto max-w-[850px] px-6 pb-28 pt-40 md:px-10">
        <header>
          <p className="text-xs tracking-[0.4em] opacity-50">{ja}</p>
          <h1 className="mt-4 text-4xl md:text-5xl" style={{ fontFamily: 'var(--font-serif-jp)' }}>
            {ja}
          </h1>
          <p className="mt-6 leading-relaxed opacity-75">{intro}</p>
        </header>

        <div className="mt-16 space-y-12">
          {sections.map((s, i) => (
            <section key={s.ja}>
              <h2 className="flex items-baseline gap-3 text-xl md:text-2xl" style={{ fontFamily: 'var(--font-serif-jp)' }}>
                <span className="text-sm opacity-40" style={{ fontFamily: 'var(--font-ui)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s.ja}
              </h2>
              <p className="mt-4 leading-loose opacity-80">{s.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-20 text-xs opacity-50">最終更新：2026年</p>
      </div>
      <Footer />
    </PageShell>
  )
}

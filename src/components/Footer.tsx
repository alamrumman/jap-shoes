import { Link } from 'react-router-dom'

const COLS = [
  {
    title: '探索',
    en: '探索',
    links: [
      { to: '/#philosophy', label: '哲学' },
      { to: '/#craft', label: 'クラフト' },
      { to: '/#materials', label: '素材' },
      { to: '/#collection', label: 'コレクション' },
    ],
  },
  {
    title: '会社',
    en: '会社',
    links: [
      { to: '/about', label: '会社概要' },
      { to: '/contact', label: 'お問い合わせ' },
      { to: '/privacy', label: 'プライバシー' },
      { to: '/terms', label: '利用規約' },
    ],
  },
]

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative z-10 flex min-h-[90vh] flex-col justify-end px-6 pb-10 pt-24 md:px-10"
      aria-labelledby="footer-title"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p id="footer-title" className="flex items-baseline gap-3">
            <span style={{ fontFamily: 'var(--font-serif-jp)' }} className="text-4xl">
              絆
            </span>
            <span style={{ fontFamily: 'var(--font-editorial)' }} className="text-2xl tracking-[0.3em]">
              KIZUNA
            </span>
          </p>
          <p className="mt-5 max-w-xs text-sm leading-relaxed opacity-60">
            旅のために鍛えられた一足。
            <br />
            旅のために鍛えられた道具。
          </p>
        </div>

        {COLS.map((col) => (
          <nav key={col.en} aria-label={col.en}>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] opacity-50">
              <span style={{ fontFamily: 'var(--font-serif-jp)' }} className="mr-2 text-sm normal-case tracking-normal opacity-90">
                {col.title}
              </span>
              {col.en}
            </p>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  {l.to.startsWith('/#') ? (
                    <a href={l.to} className="footer-link text-sm opacity-70 transition-opacity hover:opacity-100">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} className="footer-link text-sm opacity-70 transition-opacity hover:opacity-100">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-[1400px] flex-col items-start justify-between gap-4 border-t border-current/10 pt-6 text-xs opacity-50 md:flex-row md:items-center">
        <p>© {new Date().getFullYear()} 絆 KIZUNA. 無断転載を禁じます。</p>
        <p className="tracking-[0.2em]" style={{ fontFamily: 'var(--font-serif-jp)' }}>
          日本製
        </p>
      </div>
    </footer>
  )
}

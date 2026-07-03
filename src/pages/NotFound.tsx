import { Link } from 'react-router-dom'
import { PageShell } from '../components/PageShell'
import { usePageMeta } from '../lib/seo'

export default function NotFound() {
  usePageMeta({
    title: '404 — 絆 KIZUNA',
    description: 'お探しのページは見つかりませんでした。',
    path: '/404',
  })
  return (
    <PageShell>
      <div className="tex-noise relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span aria-hidden className="text-[38vw] leading-none opacity-10 md:text-[22vw]" style={{ fontFamily: 'var(--font-serif-jp)' }}>
          迷
        </span>
        <div className="mt-[-6vh]">
          <h1 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-serif-jp)' }}>
            道に迷いました
          </h1>
          <p className="mt-3 text-sm tracking-[0.3em] opacity-60">ページが見つかりません · 404</p>
          <Link
            to="/"
            className="group mt-10 inline-flex items-center gap-3 text-sm tracking-[0.2em]"
          >
            <span style={{ fontFamily: 'var(--font-serif-jp)' }}>ホームへ戻る</span>
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1" style={{ color: 'var(--color-bronze)' }}>
              →
            </span>
          </Link>
        </div>
      </div>
    </PageShell>
  )
}

import { PageShell } from '../components/PageShell'
import { Footer } from '../components/Footer'
import { usePageMeta } from '../lib/seo'

const BLOCKS = [
  ['ブランド哲学', '静かな確信', '私たちは、道具としての靴を信じています。流行ではなく、機能と誠実さ。KIZUNA のすべては「静かな確信」という一つの言葉から始まります。'],
  ['職人技', '手の記憶', '熟練の職人が、一足ごとに何十もの工程を手で仕上げます。時間をかけることは、非効率ではなく敬意の表れです。'],
  ['素材の調達', '素材の理由', '環境負荷の少ないタンナーから、責任を持って調達したフルグレインレザー。天然ゴム、真鍮の金具。すべてに理由があります。'],
  ['工房', '光と紙と木', '木と紙と光。私たちの工房は、静けさの中で手が語る場所です。'],
  ['持続可能性', '直して使う', '修理して長く使う。それが最も持続可能な選択です。KIZUNA はリソール前提の製法を守り続けます。'],
]

export default function About() {
  usePageMeta({
    title: '会社概要 — 絆 KIZUNA',
    description: 'KIZUNA（絆）の哲学、職人技、素材の調達、工房、そして持続可能性について。日本の登山靴アトリエの物語。',
    path: '/about',
  })
  return (
    <PageShell>
      <div className="mx-auto max-w-[1100px] px-6 pb-28 pt-40 md:px-10">
        <header className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.65fr)_minmax(18rem,0.35fr)] md:items-end">
          <div>
          <p className="section-kicker">会社概要</p>
          <h1 className="mt-5 text-5xl leading-tight md:text-6xl" style={{ fontFamily: 'var(--font-serif-jp)' }}>
            手が語る、
            <br />
            静かな物語。
          </h1>
          <p className="mt-8 text-lg leading-relaxed opacity-80" style={{ fontFamily: 'var(--font-editorial)', fontStyle: 'italic' }}>
            手の仕事が語る、静かな記録。
          </p>
          </div>
          <div className="editorial-slab grid place-items-center p-8 text-center">
            <span className="text-7xl opacity-70" style={{ fontFamily: 'var(--font-serif-jp)' }}>匠</span>
            <p className="mt-5 text-xs tracking-[0.32em] opacity-55">記録・素材・工程</p>
          </div>
        </header>

        <div className="mt-24 space-y-24">
          {BLOCKS.map(([ja, en, body], i) => (
            <section key={en} className={`reveal grid grid-cols-1 gap-8 border-t border-current/10 pt-10 md:grid-cols-[1fr_1.4fr] ${i % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-serif-jp)' }}>
                  {ja}
                </h2>
                <p className="mt-2 text-xs uppercase tracking-[0.3em] opacity-50">{en}</p>
              </div>
              <p className="max-w-xl text-base leading-loose opacity-80">{body}</p>
            </section>
          ))}
        </div>
      </div>
      <Footer />
    </PageShell>
  )
}

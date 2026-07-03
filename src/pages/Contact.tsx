import { useState } from 'react'
import { PageShell } from '../components/PageShell'
import { usePageMeta } from '../lib/seo'

const FIELDS = [
  { name: 'name', ja: 'お名前', type: 'text', ph: 'お名前' },
  { name: 'email', ja: 'メール', type: 'email', ph: 'atelier@example.jp' },
  { name: 'subject', ja: '件名', type: 'text', ph: 'ご相談内容' },
]

export default function Contact() {
  usePageMeta({
    title: 'お問い合わせ — 絆 KIZUNA',
    description: 'KIZUNA（絆）へのお問い合わせ。工房、修理、取材のご相談を承ります。',
    path: '/contact',
  })
  const [sent, setSent] = useState(false)

  return (
    <PageShell bg="#181818" fg="#ede7dd" dark>
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-16 px-6 pb-28 pt-40 md:grid-cols-2 md:px-10">
        <div>
          <p className="text-xs tracking-[0.4em] opacity-50">お問い合わせ</p>
          <h1 className="mt-5 text-5xl leading-tight md:text-6xl" style={{ fontFamily: 'var(--font-serif-jp)' }}>
            静かに、
            <br />
            お話を。
          </h1>
          <p className="mt-8 max-w-sm leading-relaxed opacity-70">
            工房での修理、取材、その他のご相談。数日以内にご返信いたします。
          </p>

          <dl className="mt-12 space-y-4 text-sm">
            <div>
              <dt className="text-xs tracking-[0.3em] opacity-50">メール</dt>
              <dd className="mt-1">
                <a href="mailto:atelier@kizuna.example" className="footer-link">
                  atelier@kizuna.example
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.3em] opacity-50">工房</dt>
              <dd className="mt-1 opacity-80">長野県、日本</dd>
            </div>
          </dl>
        </div>

        <form
          className="flex flex-col gap-8"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          {FIELDS.map((f) => (
            <label key={f.name} className="group flex flex-col gap-2">
              <span className="flex items-baseline gap-2 text-sm">
                <span style={{ fontFamily: 'var(--font-serif-jp)' }}>{f.ja}</span>
              </span>
              <input
                required
                type={f.type}
                name={f.name}
                placeholder={f.ph}
                className="border-b border-current/25 bg-transparent py-2 text-base outline-none transition-colors focus:border-current"
                style={{ color: 'inherit' }}
              />
            </label>
          ))}
          <label className="flex flex-col gap-2">
            <span className="flex items-baseline gap-2 text-sm">
              <span style={{ fontFamily: 'var(--font-serif-jp)' }}>メッセージ</span>
            </span>
            <textarea
              required
              name="message"
              rows={4}
              placeholder="ご用件をお書きください"
              className="resize-none border-b border-current/25 bg-transparent py-2 text-base outline-none transition-colors focus:border-current"
            />
          </label>

          <button
            type="submit"
            className="group mt-2 inline-flex items-center gap-3 self-start text-sm tracking-[0.2em]"
          >
            <span style={{ fontFamily: 'var(--font-serif-jp)' }}>送信する</span>
            <span
              className="inline-block transition-transform duration-500 group-hover:translate-x-1"
              style={{ color: 'var(--color-bronze)' }}
            >
              →
            </span>
          </button>
          <p aria-live="polite" className="min-h-5 text-sm" style={{ color: 'var(--color-bronze)' }}>
            {sent && 'ありがとうございます。メッセージを受け付けました。'}
          </p>
        </form>
      </div>
    </PageShell>
  )
}

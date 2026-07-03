import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../lib/sections'

export function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-700"
      style={{
        backgroundColor: solid ? 'color-mix(in srgb, var(--bg) 82%, transparent)' : 'transparent',
        backdropFilter: solid ? 'blur(10px)' : 'none',
        boxShadow: solid ? '0 1px 0 color-mix(in srgb, var(--fg) 8%, transparent)' : 'none',
      }}
    >
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10"
        aria-label="メインナビゲーション"
      >
        <Link to="/" className="flex items-baseline gap-2" aria-label="KIZUNA ホーム">
          <span style={{ fontFamily: 'var(--font-serif-jp)' }} className="text-2xl font-medium tracking-wide">
            絆
          </span>
          <span style={{ fontFamily: 'var(--font-editorial)' }} className="text-lg tracking-[0.24em]">
            KIZUNA
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-5 xl:flex 2xl:gap-7">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <NavItem {...l} />
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="xl:hidden"
          aria-expanded={open}
          aria-label={open ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-7 bg-current transition" style={{ transform: open ? 'translateY(3px) rotate(45deg)' : 'none' }} />
          <span className="mt-1.5 block h-px w-7 bg-current transition" style={{ opacity: open ? 0 : 1 }} />
          <span className="mt-1.5 block h-px w-7 bg-current transition" style={{ transform: open ? 'translateY(-3px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="xl:hidden"
          style={{ backgroundColor: 'color-mix(in srgb, var(--bg) 96%, transparent)', backdropFilter: 'blur(12px)' }}
        >
          <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <NavItem {...l} block />
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

function NavItem({ href, ja, en, block }: { href: string; ja: string; en?: string; block?: boolean }) {
  const isHash = href.startsWith('/#')
  const cls = `group relative inline-flex items-baseline gap-2 whitespace-nowrap ${block ? 'py-3' : 'py-2'}`
  const content = (
    <>
      <span style={{ fontFamily: 'var(--font-serif-jp)' }} className="text-[0.95rem]">
        {ja}
      </span>
      {en && (
        <span
          style={{ fontFamily: 'var(--font-ui)' }}
          className="text-[0.6rem] uppercase tracking-[0.18em] opacity-50 transition-opacity group-hover:opacity-90 2xl:tracking-[0.2em]"
        >
          {en}
        </span>
      )}
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current opacity-35 transition-transform duration-500 group-hover:scale-x-100" aria-hidden />
    </>
  )
  return isHash ? (
    <a href={href} className={cls}>
      {content}
    </a>
  ) : (
    <Link to={href} className={cls}>
      {content}
    </Link>
  )
}

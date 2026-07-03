import { useEffect } from 'react'

interface Meta {
  title: string
  description: string
  path?: string
}

/** Sets document title, meta description and canonical for a route. */
export function usePageMeta({ title, description, path }: Meta): void {
  useEffect(() => {
    const prevTitle = document.title
    document.title = title
    setMeta('description', description)
    if (path) setCanonical(`https://kizuna.example${path}`)
    setMetaProp('og:title', title)
    setMetaProp('og:description', description)
    return () => {
      document.title = prevTitle
    }
  }, [title, description, path])
}

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaProp(prop: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${prop}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', prop)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

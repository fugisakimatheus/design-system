import { useEffect, useRef } from 'react'

export const useRefIntersectObserver = <T extends HTMLElement>(
  callback: (entry: IntersectionObserverEntry) => void,
  init?: IntersectionObserverInit
) => {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    if (ref.current == null) return

    const observer = new IntersectionObserver(entries => {
      const index = entries.findIndex(entry => entry.target === ref.current)
      if (index === -1) return
      callback(entries[index])
    }, init)
    observer.observe(ref.current)

    return () => observer.disconnect()
  })

  return ref
}

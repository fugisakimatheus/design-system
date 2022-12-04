import { useEffect, useState, useRef } from 'react'

export function useDebouncedValue<T = any>(
  value: T,
  wait: number
): [T, () => void] {
  const [_value, setValue] = useState(value)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const mountedRef = useRef(false)
  const cooldownRef = useRef(false)

  const resetTimeout = () => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }

  useEffect(() => {
    if (mountedRef.current) {
      resetTimeout()
      timeoutRef.current = setTimeout(() => {
        cooldownRef.current = false
        setValue(value)
      }, wait)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  useEffect(() => {
    mountedRef.current = true
    return () => resetTimeout()
  }, [])

  return [_value, resetTimeout]
}

import { useCallback, useEffect, useState } from "react"

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  const setDebounced = useCallback(() => {
    setDebouncedValue(value)
  }, [value])

  useEffect(() => {
    const timer = setTimeout(setDebounced, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay, setDebounced])

  return debouncedValue
}

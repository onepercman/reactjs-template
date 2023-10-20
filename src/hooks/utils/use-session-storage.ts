import { useEffect, useState } from "react"

export function useSessionStorage<T = any>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading session storage key "${key}": ${error}`)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error(`Error writing to session storage key "${key}": ${error}`)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}

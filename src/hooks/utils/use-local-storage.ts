import { useEffect, useState } from "react"

export function useLocalStorage<T = any>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading local storage key "${key}": ${error}`)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error(`Error writing to local storage key "${key}": ${error}`)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}

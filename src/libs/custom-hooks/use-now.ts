import { useEffect, useState } from "react"

export function useNow(interval = 1000) {
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(Date.now())
    }, interval)

    return function () {
      clearInterval(timer)
    }
  }, [interval])

  return now
}

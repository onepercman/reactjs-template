import { useEffect, useState } from "react"

export function useNow(interval = 1000) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    function updateNow() {
      const newTime = Date.now()
      setNow(prev => {
        if (newTime !== prev) return newTime
        return prev
      })
    }

    const timer = setInterval(updateNow, interval)

    return function () {
      clearInterval(timer)
    }
  }, [interval])

  return now
}

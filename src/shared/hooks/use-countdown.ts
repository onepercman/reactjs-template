import { pad } from "@/shared/utils/number"
import { useEffect, useMemo, useState } from "react"

export interface UseCountdownStates<T extends number | string = number> {
  days: T
  hours: T
  minutes: T
  seconds: T
  milliseconds: T
  isFinished: boolean
}

const DELTA = 1000 // 1s

export function useCountdown(targetDate: number | string, formatValue?: boolean) {
  const [remaining, setRemaining] = useState<number>(new Date(targetDate).valueOf() - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      const valueRemaining = new Date(targetDate).valueOf() - Date.now()
      if (valueRemaining >= DELTA) {
        setRemaining(valueRemaining)
      } else {
        setRemaining(0)
        clearInterval(interval)
      }
    }, DELTA)

    return () => clearInterval(interval)
  }, [targetDate])

  return useMemo(() => {
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24)) || 0
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) || 0
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60)) || 0
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000) || 0
    return {
      days: formatValue ? pad(days) : days,
      hours: formatValue ? pad(hours) : hours,
      minutes: formatValue ? pad(minutes) : minutes,
      seconds: formatValue ? pad(seconds) : seconds,
      isFinished: days + hours + minutes + seconds === 0,
      milliseconds: remaining,
    } as UseCountdownStates
  }, [remaining])
}

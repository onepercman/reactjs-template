import { useEffect, useMemo, useRef, useState } from "react"

export function pad(d: number): string {
  return d < 10 ? "0" + d.toString() : d.toString()
}

export interface UseCountdownStates<Format extends boolean = false> {
  days: Format extends true ? string : number
  hours: Format extends true ? string : number
  minutes: Format extends true ? string : number
  seconds: Format extends true ? string : number
  milliseconds: Format extends true ? string : number
  isFinished: boolean
}

export function useCountdown<Format extends boolean = false>(targetDate: number | string, format?: Format) {
  const [remaining, setRemaining] = useState<number>(new Date(targetDate).valueOf() - Date.now())

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const targetTime = new Date(targetDate).valueOf()

    const updateRemaining = () => {
      const valueRemaining = targetTime - Date.now()
      setRemaining(valueRemaining > 0 ? valueRemaining : 0)
      if (valueRemaining <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    intervalRef.current = setInterval(updateRemaining, 1000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [targetDate])

  return useMemo(() => {
    const days = Math.floor(remaining / (1000 * 60 * 60 * 24))
    const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((remaining % (1000 * 60)) / 1000)

    return {
      days: format ? pad(days) : days,
      hours: format ? pad(hours) : hours,
      minutes: format ? pad(minutes) : minutes,
      seconds: format ? pad(seconds) : seconds,
      isFinished: remaining <= 0,
      milliseconds: remaining,
    } as UseCountdownStates<Format>
  }, [remaining, format])
}

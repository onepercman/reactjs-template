"use client"

import { UseCountdownStates } from "@/hooks/utils/use-countdown"
import React from "react"
import { Countdown } from "../countdown"
import { cn } from "../utils/className"

type BaseProps = React.HTMLAttributes<HTMLDivElement>

export interface CountDownProps extends BaseProps {
  countdown: UseCountdownStates
  itemClass?: string
}

export const CountdownClock = React.forwardRef<HTMLDivElement, CountDownProps>(function (
  { className, countdown, itemClass, ...props },
  ref,
) {
  const _className = cn(className, "grid grid-cols-4 gap-2")

  if (!countdown) return

  return (
    <div ref={ref} className={_className} {...props}>
      <Countdown value={countdown.days} className={itemClass} />
      <Countdown value={countdown.hours} className={itemClass} />
      <Countdown value={countdown.minutes} className={itemClass} maxValue={59} />
      <Countdown value={countdown.seconds} className={itemClass} maxValue={59} />
    </div>
  )
})

CountdownClock.displayName = "CountdownClock"

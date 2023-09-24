"use client"

import { UseCountdownStates } from "@/hooks/render/use-countdown"
import React from "react"
import { Countdown } from "../countdown"
import { cn } from "../utils/className"

export interface CountDownProps extends React.HTMLAttributes<HTMLDivElement> {
  countdown: UseCountdownStates
  itemClass?: string
}

export const CountdownClock = React.forwardRef<HTMLDivElement, CountDownProps>(
  ({ className, countdown, itemClass, ...props }, ref) => {
    return (
      countdown && (
        <div ref={ref} className={cn(className, "grid grid-cols-4 gap-2")} {...props}>
          <Countdown value={countdown.days} className={itemClass} />
          <Countdown value={countdown.hours} className={itemClass} />
          <Countdown value={countdown.minutes} className={itemClass} maxValue={59} />
          <Countdown value={countdown.seconds} className={itemClass} maxValue={59} />
        </div>
      )
    )
  },
)

CountdownClock.displayName = "CountdownClock"

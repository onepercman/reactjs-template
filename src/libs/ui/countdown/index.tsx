"use client"

import { pad } from "@/utils/number"
import React from "react"
import { cn } from "../utils/className"

export interface CountdownProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: number
  maxValue?: number
}

function generateNumbers(maxValue: number) {
  return Array(maxValue + 1)
    .fill(0)
    .map((_, index) => [pad(index), <br key={index} />])
}

export const Countdown = React.forwardRef<HTMLSpanElement, CountdownProps>(
  ({ value = 0, className, maxValue = 99, ...props }, ref) => {
    return (
      <span ref={ref} className={cn(className, "inline-flex")}>
        <span className="inline-block h-[1em] overflow-hidden" {...props}>
          <span
            className="ease-expo relative block whitespace-pre text-center leading-none transition-all duration-500"
            style={{
              top: -value + "em",
            }}
          >
            {generateNumbers(maxValue)}
          </span>
        </span>
      </span>
    )
  },
)

Countdown.displayName = "Countdown"

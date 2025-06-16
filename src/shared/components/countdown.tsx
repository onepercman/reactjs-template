"use client"

import { cn, forwardRef } from "react-tvcx"

export interface CountdownProps {
  value?: number
  maxValue?: number
}

function pad(d: number): string {
  return d < 10 ? "0" + d.toString() : d.toString()
}

function generateNumbers(maxValue: number) {
  return Array(maxValue + 1)
    .fill(0)
    .map((_, index) => [pad(index), <br key={index} />])
}

export const Countdown = forwardRef<"span", CountdownProps>(function (
  { as: Component = "span", value = 0, className, maxValue = 99, ...props },
  ref,
) {
  return (
    <Component ref={ref} className={cn(className, "inline-flex")}>
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
    </Component>
  )
})

Countdown.displayName = "Countdown"

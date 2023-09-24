"use client"

import React from "react"
import { Button } from "../button/button"
import { cn } from "../utils/className"

type BaseProps = React.HTMLAttributes<HTMLDivElement>

export interface StepProps extends BaseProps {
  steps: Array<{
    title?: React.ReactNode
    description?: React.ReactNode
  }>
  step?: number
  onSelected?(step: number): void
}

export const Step = React.forwardRef<HTMLDivElement, StepProps>(function (
  { steps, step, onSelected, className, ...props },
  ref,
) {
  return (
    <div ref={ref} className={cn("flex", className)} {...props}>
      {steps?.map((item, index) => (
        <div
          key={item.title?.toString() || "" + index}
          className="relative flex flex-1 flex-col items-center text-center"
        >
          <Button
            color={step && step >= index + 1 ? "primary" : "black"}
            variant={step === index + 1 ? "primary" : "default"}
            className="relative z-10 mb-4"
            onClick={() => onSelected && onSelected(index + 1)}
          >
            {index + 1}
          </Button>
          <p className="px-2 text-lg font-bold uppercase">{item.title}</p>
          <p className="text-muted px-2 text-sm">{item.description}</p>
          {index < steps.length - 1 && (
            <div
              className={cn(
                "absolute left-1/2 top-4 h-px w-full",
                step && step > index + 1 ? "bg-primary" : "bg-muted",
              )}
            />
          )}
        </div>
      ))}
    </div>
  )
})

Step.displayName = "Step"

"use client"

import { useResizeObserver } from "@/hooks/render/use-resize-observer"
import React, { useState } from "react"
import { HiChevronDown } from "react-icons/hi"
import { cn } from "../utils/className"
import { useComposedRefs } from "../utils/compose-refs"

export interface CollapseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  titleClassName?: string
  onToggle?(): void
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  ({ title, children, titleClassName, onToggle, defaultOpen, ...props }, ref) => {
    const internalRef = React.useRef<HTMLDivElement>(null)
    const composedRef = useComposedRefs(internalRef, ref)
    const titleRef = React.useRef<HTMLDivElement>(null)

    const { ref: childrenRef, size } = useResizeObserver()

    const [height, setHeigth] = useState(defaultOpen ? size?.height : 0)

    return (
      <div ref={composedRef} {...props}>
        <div
          ref={titleRef}
          role="button"
          className={cn("inline-flex h-8 w-full items-center justify-between gap-6", titleClassName)}
          onClick={() => {
            if (height === 0 && childrenRef.current) {
              setHeigth(size?.height)
            } else {
              setHeigth(0)
            }
            onToggle && onToggle()
          }}
        >
          {title}
          <HiChevronDown className={cn("text-muted transition-transform duration-300", height && "rotate-180")} />
        </div>
        <div
          className="w-full overflow-hidden transition-all"
          style={{
            height,
          }}
        >
          <div ref={childrenRef}>{children}</div>
        </div>
      </div>
    )
  },
)

Collapse.displayName = "Collapse"

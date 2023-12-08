import { useResizeObserver } from "@/libs/custom-hooks/use-resize-observer"
import React, { useEffect, useState } from "react"
import { HiChevronUp } from "react-icons/hi"
import { cn } from "../utils/className"
import { useComposedRefs } from "../utils/ref"

export interface CollapseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  titleClassName?: string
  onToggle?(): void
  indicator?: React.ReactNode | ((isOpen: boolean) => React.ReactNode)
  showIndicator?: boolean
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(function (
  { title, children, open, titleClassName, onToggle, defaultOpen, indicator, showIndicator = true, ...props },
  ref,
) {
  const _ref = React.useRef<HTMLDivElement>(null)
  const composedRef = useComposedRefs(_ref, ref)
  const titleRef = React.useRef<HTMLDivElement>(null)

  const { ref: childrenRef, size } = useResizeObserver()

  const [height, setHeight] = useState(defaultOpen ? size?.height : 0)

  const [isOpen, setIsOpen] = useState(defaultOpen)

  function _renderIndicator() {
    if (!showIndicator) return null
    if (!indicator) return <HiChevronUp className={cn("text-muted transition-transform", isOpen && "rotate-180")} />
    if (typeof indicator === "function") {
      return indicator(Boolean(isOpen))
    }
    return indicator
  }

  useEffect(() => {
    setHeight(open ? size?.height : 0)
  }, [open, size])

  return (
    <div ref={composedRef} {...props}>
      {title ? (
        <div
          ref={titleRef}
          role="button"
          className={cn("inline-flex h-8 w-full items-center justify-between gap-6", titleClassName)}
          onClick={() => {
            if (height === 0 && childrenRef.current) {
              setHeight(size?.height)
              setIsOpen(true)
            } else {
              setHeight(0)
              setIsOpen(false)
            }
            onToggle && onToggle()
          }}
        >
          {title}
          {_renderIndicator()}
        </div>
      ) : null}
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
})

Collapse.displayName = "Collapse"

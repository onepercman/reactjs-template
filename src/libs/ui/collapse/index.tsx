import { useResizeObserver } from "@/libs/custom-hooks/use-resize-observer"
import { cn } from "@/libs/tailwind-variants"
import React from "react"
import { useComposedRefs } from "../utils/ref"

type TitleRenderer = (args: {
  isOpen: boolean
  toggle(): void
  open(): void
  close(): void
}) => React.ReactNode

export interface CollapseProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "className"> {
  title?: React.ReactNode | TitleRenderer
  titleAfter?: React.ReactNode | TitleRenderer
  open?: boolean
  defaultOpen?: boolean
  containerClassName?: string
  onToggle?(): void
  className?: string | ((args: { isOpen: boolean }) => string)
  children?: React.ReactNode
  unmount?: boolean
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  function (
    {
      title,
      titleAfter,
      children,
      open,
      onToggle,
      defaultOpen,
      containerClassName,
      className,
      unmount,
      ...props
    },
    ref,
  ) {
    const _ref = React.useRef<HTMLDivElement>(null)
    const composedRef = useComposedRefs(_ref, ref)

    const { ref: childrenRef, size } = useResizeObserver()

    const [isOpen, setIsOpen] = React.useState(defaultOpen)
    const [height, setHeight] = React.useState(defaultOpen ? size?.height : 0)

    const _isOpen = Boolean(isOpen)

    function _toggle() {
      if (height === 0 && childrenRef.current) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
      onToggle && onToggle()
    }

    function openCollapse() {
      setIsOpen(true)
    }

    function closeCollapse() {
      setIsOpen(false)
    }

    function _renderTitle(title: React.ReactNode | TitleRenderer) {
      const element = title as React.ReactElement
      if (!element) return
      if (typeof element === "function") {
        const render = element as TitleRenderer
        return render({
          isOpen: _isOpen,
          toggle: _toggle,
          open: openCollapse,
          close: closeCollapse,
        })
      }
      return React.cloneElement(element as React.ReactElement, {
        className: cn(
          "gap-base inline-flex h-8 w-full items-center justify-between",
          element.props.className,
        ),
        onClick() {
          if (height === 0 && childrenRef.current) {
            setIsOpen(true)
          } else {
            setIsOpen(false)
          }
          onToggle && onToggle()
        },
      })
    }

    React.useEffect(() => {
      setHeight(isOpen ? size?.height : 0)
    }, [isOpen, size])

    React.useEffect(() => {
      if (open !== undefined) {
        setIsOpen(open)
      }
    }, [open])

    return (
      <div
        ref={composedRef}
        className={
          typeof className === "function"
            ? className({ isOpen: _isOpen })
            : className
        }
        {...props}
      >
        {_renderTitle(title)}
        <div
          className={cn(
            "w-full overflow-y-clip transition-all",
            containerClassName,
          )}
          style={{
            height,
          }}
        >
          <div ref={childrenRef}>{!unmount || isOpen ? children : null}</div>
        </div>
        {_renderTitle(titleAfter)}
      </div>
    )
  },
)

Collapse.displayName = "Collapse"

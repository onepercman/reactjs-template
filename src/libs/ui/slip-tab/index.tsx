import { useResizeObserver } from "@/libs/custom-hooks/use-resize-observer"
import { Tab, TabGroupProps, TabProps } from "@headlessui/react"
import React, { ElementType } from "react"
import { cn } from "../utils/className"
import { useComposedRefs } from "../utils/ref"

type BaseProps = TabGroupProps<ElementType>

interface SlipTabProps extends BaseProps {
  tabs?: TabProps<"div">[]
  children?: React.ReactElement | React.ReactElement[]
}

export const SlipTab = React.forwardRef<HTMLDivElement, SlipTabProps>(function (
  { tabs, children, className, ...props },
  ref,
) {
  const listRef = React.useRef<HTMLDivElement>(null)
  const { ref: observerRef, size } = useResizeObserver()

  const composedRef = useComposedRefs(listRef, observerRef as any)

  function getIndicator(index: number) {
    if (!listRef.current || !listRef.current.children.length) return
    const element = listRef.current.children[index]
    const left = (element as any).offsetLeft
    const width = element.clientWidth
    const height = element.clientHeight

    return (
      <span
        className="bg-primary pointer-events-none absolute rounded transition-all"
        style={{
          left,
          width,
          height,
          color: size?.width.toString(),
        }}
      />
    )
  }

  function getPanels() {
    if ((children as Array<any> | undefined)?.length) {
      return (children as React.ReactElement[]).map((panel) => <Tab.Panel>{panel}</Tab.Panel>)
    }
    return <Tab.Panel>{children}</Tab.Panel>
  }

  return (
    <Tab.Group ref={ref} {...props}>
      {({ selectedIndex }) => (
        <React.Fragment>
          <Tab.List
            ref={composedRef}
            className={cn(
              "bg-component scrollbar-none relative inline-flex w-full items-center overflow-x-scroll rounded",
              className,
            )}
          >
            {tabs?.map(({ children, className, ...tab }, index) => (
              <Tab
                key={index}
                className={cn("relative z-10 h-10 flex-1 whitespace-nowrap rounded px-3", className)}
                {...tab}
              >
                {children}
              </Tab>
            ))}
            {getIndicator(selectedIndex)}
          </Tab.List>
          <Tab.Panels>{getPanels()}</Tab.Panels>
        </React.Fragment>
      )}
    </Tab.Group>
  )
})

SlipTab.displayName = "SlipTab"

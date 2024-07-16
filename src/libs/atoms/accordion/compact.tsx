import { Accordion } from "@ark-ui/react"
import React from "react"
import { LuChevronDown } from "react-icons/lu"
import { ComposedTVProps, ForwardedRefComponent } from "../types"
import { accordion } from "./variants"

export interface AccordionCompactItemProps
  extends Omit<Accordion.ItemProps, "content"> {
  trigger?: Accordion.ItemTriggerProps
  content?: Accordion.ItemContentProps
}

export interface AccordionCompactProps
  extends Accordion.RootProps,
    ComposedTVProps<typeof accordion> {
  items: AccordionCompactItemProps[]
}

export interface AccordionCompact extends ForwardedRefComponent {
  (
    props: AccordionCompactProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): React.ReactElement | null
}

function _constructor(
  render: (
    props: AccordionCompactProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, AccordionCompactProps>(
    render,
  ) as unknown as AccordionCompact
}

export const AccordionCompact = _constructor(function (
  { items, className, ...props },
  ref,
) {
  const styles = accordion({ className })

  return (
    <Accordion.Root ref={ref} className={styles.base()} {...props}>
      {items?.map(({ trigger, content, ...item }) => (
        <Accordion.Item {...item}>
          <Accordion.ItemTrigger
            className={styles.trigger({ className: trigger?.className })}
            {...trigger}
          >
            {trigger?.children}
            <Accordion.ItemIndicator asChild>
              <LuChevronDown className={styles.indicator()} />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent
            className={styles.content({ className: content?.className })}
            {...content}
          />
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
})

AccordionCompact.displayName = "AccordionCompact"

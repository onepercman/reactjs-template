import * as Ark from "@ark-ui/react"
import React from "react"
import { LuChevronDown } from "react-icons/lu"
import { tv } from "tailwind-variants"

const accordion = tv({
  base: "flex flex-col gap-2 border border-line p-2 rounded duration-500",
  slots: {
    item: "flex flex-col duration-500",
    trigger: "bg-component w-full p-2 rounded inline-flex justify-between gap-2 items-center",
    indicator: "data-[state=open]:rotate-180 transition-all",
    content: "data-[state=open]:animate-heightIn data-[state=closed]:animate-heightOut overflow-hidden",
  },
})

interface AccordionItemProps extends Omit<Ark.Accordion.ItemProps, "content"> {
  trigger?: Ark.Accordion.ItemTriggerProps
  content?: Ark.Accordion.ItemContentProps
}

interface AccordionProps extends Ark.AccordionRootProps {
  items: AccordionItemProps[]
}

export interface Accordion extends ForwardedRefComponent {
  (props: AccordionProps, ref: React.ForwardedRef<HTMLDivElement>): React.ReactElement | null
}

function _constructor(
  render: (props: AccordionProps, ref: React.ForwardedRef<HTMLDivElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, AccordionProps>(render) as unknown as Accordion
}

export const Accordion = _constructor(function ({ items, className, ...props }, ref) {
  const classes = accordion({ className })

  return (
    <Ark.Accordion.Root ref={ref} className={classes.base()} {...props}>
      {items?.map(({ trigger, content, ...item }) => (
        <Ark.Accordion.Item {...item}>
          <Ark.Accordion.ItemTrigger className={classes.trigger({ className: trigger?.className })} {...trigger}>
            {trigger?.children}
            <Ark.Accordion.ItemIndicator asChild>
              <LuChevronDown className={classes.indicator()} />
            </Ark.Accordion.ItemIndicator>
          </Ark.Accordion.ItemTrigger>
          <Ark.Accordion.ItemContent className={classes.content({ className: content?.className })} {...content} />
        </Ark.Accordion.Item>
      ))}
    </Ark.Accordion.Root>
  )
})

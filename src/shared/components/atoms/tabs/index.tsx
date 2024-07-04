import * as Ark from "@ark-ui/react"
import React from "react"
import {
  ComposedTVProps,
  ForwardRefWithAsProps,
  ForwardedRefComponent,
  ReactTag,
} from "../types"
import { tabs } from "../variants"

export interface TabsProps
  extends Ark.TabsRootProps,
    ComposedTVProps<typeof tabs> {
  tabList?: Ark.TabTriggerProps[]
  children?: React.ReactNode | React.ReactNode[]
}

interface Tabs extends ForwardedRefComponent {
  <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, TabsProps>,
  ): React.ReactElement | null
}

function _constructor<As extends ReactTag>(
  render: <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, TabsProps>,
    ref: React.ForwardedRef<As>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<As, ForwardRefWithAsProps<As, TabsProps>>(
    render,
  ) as unknown as Tabs
}

export const Tabs = _constructor(function (
  {
    as = "div",
    tabList = [],
    children,
    variant,
    size,
    className,
    classNames,
    ...props
  },
  ref,
) {
  const Tag = as

  const classes = tabs({ size, variant, className })

  return (
    <Ark.Tabs.Root asChild {...props}>
      <Tag ref={ref} className={classes.base({ class: classNames?.base })}>
        <Ark.Tabs.List className={classes.list({ class: classNames?.list })}>
          <Ark.Tabs.Indicator
            className={classes.indicator({ class: classNames?.indicator })}
          />
          {tabList.map(({ className, ...tab }) => (
            <Ark.Tabs.Trigger
              key={tab.value}
              className={classes.trigger({
                className,
                class: classNames?.trigger(),
              })}
              {...tab}
            />
          ))}
        </Ark.Tabs.List>
        {Array.isArray(children) ? (
          children.map((el, index) => (
            <Ark.Tabs.Content
              asChild
              value={tabList[index]?.value}
              key={index}
              className={classes.content({ class: classNames?.content })}
            >
              {el}
            </Ark.Tabs.Content>
          ))
        ) : children ? (
          <Ark.Tabs.Content
            asChild
            value={tabList[0]?.value}
            className={classes.content({ class: classNames?.content })}
          >
            {children}
          </Ark.Tabs.Content>
        ) : null}
      </Tag>
    </Ark.Tabs.Root>
  )
})

Tabs.displayName = "Tabs"

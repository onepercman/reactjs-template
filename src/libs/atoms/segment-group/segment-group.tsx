import * as Ark from "@ark-ui/react"
import React from "react"
import {
  ComposedTVProps,
  ForwardRefWithAsProps,
  ForwardedRefComponent,
  ReactTag,
} from "../types"
import { segmentGroup } from "./variants"

export interface SegmentGroupProps
  extends Ark.SegmentGroupRootProps,
    ComposedTVProps<typeof segmentGroup> {
  items?: Ark.SegmentGroupItemProps[]
}

interface SegmentGroup extends ForwardedRefComponent {
  <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, SegmentGroupProps>,
  ): React.ReactElement | null
}

function _constructor<As extends ReactTag>(
  render: <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, SegmentGroupProps>,
    ref: React.ForwardedRef<As>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<As, ForwardRefWithAsProps<As, SegmentGroupProps>>(
    render,
  ) as unknown as SegmentGroup
}

export const SegmentGroup = _constructor(function (
  {
    as = "div",
    items = [],
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

  const styles = segmentGroup({ size, variant, className })

  return (
    <Ark.SegmentGroup.Root asChild {...props}>
      <Tag ref={ref} className={styles.base({ class: classNames?.base })}>
        <Ark.SegmentGroup.Indicator
          className={styles.indicator({ class: classNames?.indicator })}
        />
        {items.map(({ children, className, ...tab }) => (
          <Ark.SegmentGroup.Item
            key={tab.value}
            className={styles.item({
              className,
              class: classNames?.item,
            })}
            {...tab}
          >
            <Ark.SegmentGroup.ItemText>{children}</Ark.SegmentGroup.ItemText>
            <Ark.SegmentGroup.ItemControl />
            <Ark.SegmentGroup.ItemHiddenInput />
          </Ark.SegmentGroup.Item>
        ))}
      </Tag>
    </Ark.SegmentGroup.Root>
  )
})

SegmentGroup.displayName = "SegmentGroup"

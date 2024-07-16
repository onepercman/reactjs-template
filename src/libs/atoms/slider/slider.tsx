import * as Ark from "@ark-ui/react"
import React from "react"
import {
  ComposedTVProps,
  ForwardRefWithAsProps,
  ForwardedRefComponent,
  ReactTag,
} from "../types"
import { slider } from "./variants"

export interface SliderProps
  extends Ark.SliderRootProps,
    ComposedTVProps<typeof slider> {
  label?: React.ReactNode
  markers?: Ark.SliderMarkerProps[]
}

interface Slider extends ForwardedRefComponent {
  <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, SliderProps>,
  ): React.ReactElement | null
}

function _constructor<As extends ReactTag>(
  render: <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, SliderProps>,
    ref: React.ForwardedRef<As>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<As, ForwardRefWithAsProps<As, SliderProps>>(
    render,
  ) as unknown as Slider
}

export const Slider = _constructor(function (
  { as = "div", label, markers, size, className, classNames, ...props },
  ref,
) {
  const Tag = as

  const styles = slider({ size, className })

  return (
    <Ark.Slider.Root asChild {...props}>
      <Tag ref={ref} className={styles.base({ class: classNames?.base })}>
        <Ark.Slider.Label
          className={styles.label({ class: classNames?.label })}
        >
          <span>{label}</span>
          <Ark.Slider.ValueText
            className={styles.valueText({ class: classNames?.valueText })}
          />
        </Ark.Slider.Label>

        <Ark.Slider.Control
          className={styles.control({ class: classNames?.control })}
        >
          <Ark.Slider.Track
            className={styles.track({ class: classNames?.track })}
          >
            <Ark.Slider.Range
              className={styles.range({ class: classNames?.range })}
            />
          </Ark.Slider.Track>
          <Ark.Slider.Thumb
            index={0}
            className={styles.thumb({ class: classNames?.thumb })}
          >
            <Ark.Slider.HiddenInput />
          </Ark.Slider.Thumb>
        </Ark.Slider.Control>

        {markers?.length ? (
          <Ark.Slider.MarkerGroup>
            {markers.map((marker) => (
              <Ark.Slider.Marker
                key={marker.value}
                className={styles.marker({ class: classNames?.marker })}
                {...marker}
              />
            ))}
          </Ark.Slider.MarkerGroup>
        ) : null}
      </Tag>
    </Ark.Slider.Root>
  )
})

Slider.displayName = "Slider"

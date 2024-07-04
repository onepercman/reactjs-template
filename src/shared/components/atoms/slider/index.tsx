import * as Ark from "@ark-ui/react"
import React from "react"
import {
  ComposedTVProps,
  ForwardRefWithAsProps,
  ForwardedRefComponent,
  ReactTag,
} from "../types"
import { slider } from "../variants"

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

  const classes = slider({ size, className })

  return (
    <Ark.Slider.Root asChild {...props}>
      <Tag ref={ref} className={classes.base({ class: classNames?.base })}>
        <Ark.Slider.Label
          className={classes.label({ class: classNames?.label })}
        >
          <span>{label}</span>
          <Ark.Slider.ValueText
            className={classes.valueText({ class: classNames?.valueText })}
          />
        </Ark.Slider.Label>

        <Ark.Slider.Control
          className={classes.control({ class: classNames?.control })}
        >
          <Ark.Slider.Track
            className={classes.track({ class: classNames?.track })}
          >
            <Ark.Slider.Range
              className={classes.range({ class: classNames?.range })}
            />
          </Ark.Slider.Track>
          <Ark.Slider.Thumb
            index={0}
            className={classes.thumb({ class: classNames?.thumb })}
          >
            <Ark.Slider.HiddenInput />
          </Ark.Slider.Thumb>
        </Ark.Slider.Control>

        {markers?.length ? (
          <Ark.Slider.MarkerGroup>
            {markers.map((marker) => (
              <Ark.Slider.Marker
                key={marker.value}
                className={classes.marker({ class: classNames?.marker })}
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

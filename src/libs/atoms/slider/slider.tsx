import { Slider, SliderMarkerProps, SliderRootProps } from "@ark-ui/react"
import React from "react"
import { ComposedTVProps, ForwardRefWithAsProps, ForwardedRefComponent, ReactTag } from "../types"
import { slider } from "./variants"

export interface SliderProps extends SliderRootProps, ComposedTVProps<typeof slider> {
  label?: React.ReactNode
  markers?: SliderMarkerProps[]
}

interface Slider extends ForwardedRefComponent {
  <As extends ReactTag>(props: ForwardRefWithAsProps<As, SliderProps>): React.ReactElement | null
}

function _bootstrap<As extends ReactTag>(
  render: <As extends ReactTag>(
    props: ForwardRefWithAsProps<As, SliderProps>,
    ref: React.ForwardedRef<As>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<As, ForwardRefWithAsProps<As, SliderProps>>(render) as unknown as Slider
}

export const Component = _bootstrap(function (
  { as = "div", label, markers, size, className, classNames, ...props },
  ref,
) {
  const Tag = as

  const styles = slider({ size, className })

  return (
    <Slider.Root asChild {...props}>
      <Tag ref={ref} className={styles.base({ class: classNames?.base })}>
        <Slider.Label className={styles.label({ class: classNames?.label })}>
          <span>{label}</span>
          <Slider.ValueText className={styles.valueText({ class: classNames?.valueText })} />
        </Slider.Label>

        <Slider.Control className={styles.control({ class: classNames?.control })}>
          <Slider.Track className={styles.track({ class: classNames?.track })}>
            <Slider.Range className={styles.range({ class: classNames?.range })} />
          </Slider.Track>
          <Slider.Thumb index={0} className={styles.thumb({ class: classNames?.thumb })}>
            <Slider.HiddenInput />
          </Slider.Thumb>
        </Slider.Control>

        {markers?.length ? (
          <Slider.MarkerGroup>
            {markers.map((marker) => (
              <Slider.Marker key={marker.value} className={styles.marker({ class: classNames?.marker })} {...marker} />
            ))}
          </Slider.MarkerGroup>
        ) : null}
      </Tag>
    </Slider.Root>
  )
})

Component.displayName = "Slider"

import * as Ark from "@ark-ui/react"
import React from "react"
import { LuMinus, LuPlus } from "react-icons/lu"
import { Button } from "../../button"
import { ComposedTVProps, ForwardedRefComponent } from "../../types"
import { input } from "../../variants"
import { Input, InputFieldProps } from "../input"

export interface NumberInputProps
  extends Ark.NumberInputRootProps,
    Omit<InputFieldProps, "prefix">,
    ComposedTVProps<typeof input> {}

export interface NumberInput extends ForwardedRefComponent {
  (props: NumberInputProps): React.ReactElement | null
}

function _constructor(
  render: (
    props: NumberInputProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLInputElement, NumberInputProps>(
    render,
  ) as unknown as NumberInput
}

export const NumberInput = _constructor(function ({ ...props }, ref) {
  return (
    <Ark.NumberInput.Root className="w-fit" {...props}>
      <Ark.NumberInput.Scrubber />
      <Ark.NumberInput.Input asChild>
        <Input
          ref={ref}
          addonBefore={
            <Ark.NumberInput.Control asChild>
              <Ark.NumberInput.DecrementTrigger>
                <Button shape="square" leftIcon={<LuMinus />} />
              </Ark.NumberInput.DecrementTrigger>
            </Ark.NumberInput.Control>
          }
          addonAfter={
            <Ark.NumberInput.Control asChild>
              <Ark.NumberInput.IncrementTrigger>
                <Button shape="square" leftIcon={<LuPlus />} />
              </Ark.NumberInput.IncrementTrigger>
            </Ark.NumberInput.Control>
          }
          {...props}
        />
      </Ark.NumberInput.Input>
    </Ark.NumberInput.Root>
  )
})

NumberInput.displayName = "NumberInput"

import { NumberInput, NumberInputRootProps } from "@ark-ui/react"
import React from "react"
import { LuMinus, LuPlus } from "react-icons/lu"
import { Button } from "../button"
import { Input, input, InputFieldProps } from "../input"
import { ComposedTVProps, ForwardedRefComponent } from "../types"

export interface NumberInputProps
  extends NumberInputRootProps,
    Omit<InputFieldProps, "prefix">,
    ComposedTVProps<typeof input> {
  placeholder?: string
}

export interface NumberInput extends ForwardedRefComponent {
  (props: NumberInputProps): React.ReactElement | null
}

function _bootstrap(
  render: (props: NumberInputProps, ref: React.ForwardedRef<HTMLInputElement>) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLInputElement, NumberInputProps>(render) as unknown as NumberInput
}

export const Component = _bootstrap(function ({ classNames, ...props }, ref) {
  return (
    <NumberInput.Root className="w-fit" {...props}>
      <NumberInput.Scrubber />
      <NumberInput.Input asChild>
        <Input
          ref={ref}
          addonBefore={
            <NumberInput.Control asChild>
              <NumberInput.DecrementTrigger>
                <Button shape="square" size="sm" leftIcon={<LuMinus />} />
              </NumberInput.DecrementTrigger>
            </NumberInput.Control>
          }
          addonAfter={
            <NumberInput.Control asChild>
              <NumberInput.IncrementTrigger>
                <Button shape="square" size="sm" leftIcon={<LuPlus />} />
              </NumberInput.IncrementTrigger>
            </NumberInput.Control>
          }
          classNames={{
            input: "text-center",
            ...classNames,
          }}
          {...props}
        />
      </NumberInput.Input>
    </NumberInput.Root>
  )
})

Component.displayName = "NumberInput"

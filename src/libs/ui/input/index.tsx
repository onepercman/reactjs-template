import { Checkbox, CheckboxProps } from "@/libs/ui/input/checkbox"
import { InputProps, Input as InternalInput } from "@/libs/ui/input/input"
import { Radio, RadioProps } from "@/libs/ui/input/radio"
import { Range } from "@/libs/ui/input/range"
import { Textarea, TextareaProps } from "@/libs/ui/input/textarea"
import { NumberInput } from "./number-input"

interface Input
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  > {
  Number: typeof NumberInput
  Textarea: typeof Textarea
  Checkbox: typeof Checkbox
  Radio: typeof Radio
  Range: typeof Range
}
const Input = InternalInput as Input

export { Input }
export type { CheckboxProps, InputProps, RadioProps, TextareaProps }

Input.Number = NumberInput
Input.Textarea = Textarea
Input.Checkbox = Checkbox
Input.Radio = Radio
Input.Range = Range

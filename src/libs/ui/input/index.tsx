import { Checkbox, CheckboxProps } from "./checkbox"
import { InputProps, Input as InternalInput } from "./input"
import { InputNumber } from "./input-number"
import { Radio, RadioProps } from "./radio"
import { Range } from "./range"
import { Textarea, TextareaProps } from "./textarea"

interface Input
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  > {
  Number: typeof InputNumber
  Textarea: typeof Textarea
  Checkbox: typeof Checkbox
  Radio: typeof Radio
  Range: typeof Range
}
const Input = InternalInput as Input

export { Input }
export type { CheckboxProps, InputProps, RadioProps, TextareaProps }

Input.Number = InputNumber
Input.Textarea = Textarea
Input.Checkbox = Checkbox
Input.Radio = Radio
Input.Range = Range

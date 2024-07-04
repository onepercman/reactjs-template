import { Checkbox } from "./checbox"
import { DatePicker } from "./date-picker"
import { InputProps, Input as InternalInput } from "./input"
import { NumberInput } from "./number-input"
import { Radio } from "./radio"
import { Range } from "./range"
import { Switch } from "./switch"
import { Textarea } from "./textarea"

interface Input
  extends React.ForwardRefExoticComponent<
    InputProps & React.RefAttributes<HTMLInputElement>
  > {
  Number: typeof NumberInput
  Textarea: typeof Textarea
  Checkbox: typeof Checkbox
  Radio: typeof Radio
  Range: typeof Range
  Switch: typeof Switch
  DatePicker: typeof DatePicker
}

export const Input = InternalInput as Input

Input.Number = NumberInput
Input.Textarea = Textarea
Input.Checkbox = Checkbox
Input.Radio = Radio
Input.Range = Range
Input.Switch = Switch
Input.DatePicker = DatePicker

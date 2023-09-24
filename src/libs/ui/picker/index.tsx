import { Moment } from "moment-timezone"
import InternalPicker from "rc-picker"
import { DatePicker, DatePickerProps } from "./date-picker"
import { Range, RangePickerProps } from "./range"

interface Picker
  extends React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<InternalPicker<Moment>>> {
  Range: typeof Range
}

const Picker = DatePicker as Picker

Picker.Range = Range

export { Picker }
export type { DatePickerProps, RangePickerProps }

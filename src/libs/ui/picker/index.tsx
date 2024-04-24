import { PickerRef } from "rc-picker";
import { DatePicker, DatePickerProps } from "./date-picker";
import { Range } from "./range";

interface Picker
	extends React.ForwardRefExoticComponent<
		DatePickerProps & React.RefAttributes<PickerRef>
	> {
	Range: typeof Range;
}

const Picker = DatePicker as Picker;
Picker.Range = Range;

export { Picker };

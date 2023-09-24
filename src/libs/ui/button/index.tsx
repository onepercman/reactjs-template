import { ButtonProps, Button as InternalButton } from "./button"
import { ButtonGroup, ButtonGroupProps } from "./button-group"

interface Button extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>> {
  Group: typeof ButtonGroup
}
const Button = InternalButton as Button

export { Button }
export type { ButtonGroupProps, ButtonProps }

Button.Group = ButtonGroup

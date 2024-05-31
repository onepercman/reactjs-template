import {
  ButtonBaseProps,
  ButtonProps,
  ButtonVariantProps,
  Button as InternalButton,
} from "./button"

interface Button
  extends React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  > {}
const Button = InternalButton as Button

export { Button }
export type { ButtonBaseProps, ButtonProps, ButtonVariantProps }

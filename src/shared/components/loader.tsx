import { cn, Spinner } from "@/libs/atoms"
import { FC, HTMLAttributes } from "react"

export const Loader: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex min-h-56", className)} {...props}>
      <div className="m-auto flex flex-col items-center gap-4 p-4">
        <Spinner />
      </div>
    </div>
  )
}

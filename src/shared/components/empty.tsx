import { cn } from "@/libs/atoms"
import { FC, HTMLAttributes } from "react"
import { LuActivity } from "react-icons/lu"

export const Empty: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex min-h-56", className)} {...props}>
      <div className="m-auto flex flex-col items-center gap-4 p-4">
        <LuActivity />
        <div>{children ?? "Not found"}</div>
      </div>
    </div>
  )
}

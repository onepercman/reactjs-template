import { cn } from "@/libs/ui/utils"
import React from "react"
import { HiArchiveBox } from "react-icons/hi2"

export const Empty = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(function ({ children, className, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "text-secondary flex min-h-56 w-full flex-col items-center justify-center gap-2 p-4",
        className,
      )}
      {...props}
    >
      <HiArchiveBox className="text-5xl" />
      <p className="text-center font-medium">
        {children || "No results found"}
      </p>
    </div>
  )
})

Empty.displayName = "Empty"

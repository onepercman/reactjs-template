import { cn } from "@/libs/cn"
import { Button, ButtonVariantProps } from "@/libs/ui/button"
import * as Ark from "@ark-ui/react"
import React from "react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

export interface PaginationProps
  extends Omit<Ark.PaginationRootProps, "color">,
    ButtonVariantProps {
  activeProps?: ButtonVariantProps
  inactiveProps?: ButtonVariantProps
}

interface Pagination extends ForwardedRefComponent {
  (props: PaginationProps): React.ReactElement | null
}

function _constructor(
  render: (
    props: PaginationProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => React.ReactElement | null,
) {
  return React.forwardRef<HTMLDivElement, PaginationProps>(
    render,
  ) as unknown as Pagination
}

export const Pagination = _constructor(function (
  {
    className,
    size,
    variant,
    color,
    activeProps = { color: "primary" },
    inactiveProps,
    ...props
  },
  ref,
) {
  return (
    <Ark.Pagination.Root
      ref={ref}
      className={cn("inline-flex items-center gap-2", className)}
      {...props}
    >
      <Ark.Pagination.PrevTrigger asChild>
        <Button
          size={size}
          variant={variant}
          color={color}
          leftIcon={<LuChevronLeft />}
        />
      </Ark.Pagination.PrevTrigger>

      <Ark.Pagination.Context>
        {(pagination) =>
          pagination.pages.map((page, index) =>
            page.type === "page" ? (
              <Ark.Pagination.Item asChild key={index} {...page}>
                <Button
                  size={size}
                  variant={variant}
                  color={color}
                  {...(pagination.page === page.value
                    ? activeProps
                    : inactiveProps)}
                >
                  {page.value}
                </Button>
              </Ark.Pagination.Item>
            ) : (
              <Ark.Pagination.Ellipsis asChild key={index} index={index}>
                <Button
                  size={size}
                  variant={variant}
                  color={color}
                  className="pointer-events-none"
                >
                  &#8230;
                </Button>
              </Ark.Pagination.Ellipsis>
            ),
          )
        }
      </Ark.Pagination.Context>

      <Ark.Pagination.NextTrigger asChild>
        <Button
          size={size}
          variant={variant}
          color={color}
          leftIcon={<LuChevronRight />}
        />
      </Ark.Pagination.NextTrigger>
    </Ark.Pagination.Root>
  )
})

Pagination.displayName = "Pagination"

"use client"

import {
  Toast as BaseToast,
  Toaster as BaseToaster,
  createToaster,
} from "@ark-ui/react"
import { FC } from "react"
import { LuCheck, LuCircleX, LuInfo, LuX } from "react-icons/lu"
import { tv } from "tailwind-variants"
import { Button } from "./button"
import { Spinner } from "./spinner"

export const toast = tv({
  base: [
    "relative min-w-64 rounded border border-line bg-component p-4 shadow-lg transition-all duration-300",
    "z-[var(--z-index)]",
    "opacity-[var(--opacity)]",
    "translate-x-[var(--x)]",
    "translate-y-[var(--y)]",
    "h-[var(--height)]",
    "[scale:var(--scale)]",
  ],
  slots: {
    container: "gap-8",
    title: "mt-0 inline-flex items-center gap-2 pr-6 text-sm",
    description: "text-xs text-secondary",
    dismiss: "absolute right-2 top-2",
  },
})

function getIcon(type?: "success" | "error" | "loading" | "info" | any) {
  switch (type) {
    case "loading":
      return <Spinner />
    case "success":
      return <LuCheck className="text-success" />
    case "error":
      return <LuCircleX className="text-error" />
    case "info":
      return <LuInfo className="text-info" />
    default:
      return null
  }
}

export interface ToasterProps {
  toaster: ReturnType<typeof createToaster>
}

export const Toaster: FC<ToasterProps> = ({ toaster }) => {
  const styles = toast()

  return (
    <BaseToaster toaster={toaster} className={styles.container()}>
      {({ id, title, description, type }) => {
        return (
          <BaseToast.Root key={id} className={styles.base()}>
            <BaseToast.Title className={styles.title()}>
              {getIcon(type)}
              {title}
            </BaseToast.Title>
            <BaseToast.Description className={styles.description()}>
              {description}
            </BaseToast.Description>
            <BaseToast.CloseTrigger asChild>
              <Button
                size="xs"
                shape="circle"
                className={styles.dismiss()}
                leftIcon={<LuX />}
              />
            </BaseToast.CloseTrigger>
          </BaseToast.Root>
        )
      }}
    </BaseToaster>
  )
}

Toaster.displayName = "Toaster"

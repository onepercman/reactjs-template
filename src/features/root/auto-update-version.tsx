import { FC, useEffect } from "react"

export const AutoUpdateVersion: FC = () => {
  useEffect(() => {
    const storedVersion = localStorage.getItem("app_version")

    if (storedVersion !== __PATCH_VERSION__) {
      localStorage.setItem("app_patch_hash", __PATCH_VERSION__)
    }
  }, [])

  return null
}

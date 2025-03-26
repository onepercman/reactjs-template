import { useEffect } from "react"

const APP_VERSION = __COMMIT_HASH__

export function AutoUpdateVersion() {
  useEffect(() => {
    const storedVersion = localStorage.getItem("app_version")

    if (storedVersion !== APP_VERSION) {
      localStorage.setItem("app_patch_hash", APP_VERSION)
    }
  }, [])
}

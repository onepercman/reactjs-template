import { checkVersion } from "@/models/transitions"
import { useEffect, useState } from "react"

export function useMounted() {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    checkVersion()
    setMounted(true)
  }, [])

  return mounted
}

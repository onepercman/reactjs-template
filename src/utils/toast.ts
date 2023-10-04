import { toast } from "react-hot-toast"
import { BaseError } from "viem"

export function toastErrors(err: BaseError, defaultMsg: string) {
  if (process.env.NODE_ENV === "development") {
    console.log("🐞 Contract call ----- ", err)
  }
  toast.error(err.shortMessage || defaultMsg)
}

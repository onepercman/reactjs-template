import { FC } from "react"
import { LuBaby } from "react-icons/lu"

export const Empty: FC = () => {
  return (
    <div className="flex p-8">
      <LuBaby className="m-auto text-secondary" />
    </div>
  )
}

import { FC } from "react"
import { LuActivity } from "react-icons/lu"

export const Empty: FC = () => {
  return (
    <div className="flex min-h-56">
      <div className="m-auto flex flex-col items-center gap-4 p-4">
        <LuActivity />
        <div>Not found</div>
      </div>
    </div>
  )
}

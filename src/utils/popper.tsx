import { cn } from "@/libs/ui/utils/className"
import { HiOutlineX } from "react-icons/hi"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"

const SwalPopper = withReactContent(Swal)

export const Popper = SwalPopper.mixin({
  showCloseButton: true,
  customClass: {
    popup: cn("bg-component space-y-4 rounded p-4 shadow flex flex-col gap-6"),
    title: cn("relative !m-0 text-content order-1 p-0 text-left text-base font-medium"),
    closeButton: cn(
      "text-muted absolute text-base top-4 right-4 btn btn-normal !btn-ghost focus:ring-0 hover:text-content",
    ),
    icon: cn("order-2 mx-auto !my-0"),
    htmlContainer: cn("!text-content order-3 !p-0 !m-0 text-left text-base"),
    actions: cn("flex-row-reverse !m-0 order-4 gap-2"),
    confirmButton: cn("!m-0 btn size-md btn-normal btn-primary !bg-primary"),
    denyButton: cn("!m-0 btn size-md btn-normal btn-error"),
    cancelButton: cn("!m-0 btn btn-normal size-md !btn-default"),
  },

  hideClass: {
    popup: "opacity-0 pointer-events-none hidden scale-95",
    backdrop: "pointer-events-none",
  },
  showClass: {
    popup: "opacity-100 scale-100 duration-100",
    backdrop: "pointer-events-auto backdrop-blur bg-black/80",
  },
  closeButtonHtml: <HiOutlineX />,
})

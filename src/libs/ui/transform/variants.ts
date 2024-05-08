export const transition = <const>{
  fadeIn: {
    enter: "ease-out duration-100",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
  },
  slideDownIn: {
    enter: "ease-out duration-100",
    enterFrom: "opacity-0 -translate-x-full",
    enterTo: "opacity-100",
    leave: "ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0 -translate-x-full",
  },
}

export enum Mode {
  Dev = "development",
  Stg = "staging",
  Prd = "production",
}

export const MODE: Mode = (import.meta.env.VITE_MODE as Mode) || Mode.Dev

export const isDev = MODE === Mode.Dev
export const isStg = MODE === Mode.Stg
export const isPrd = MODE === Mode.Prd

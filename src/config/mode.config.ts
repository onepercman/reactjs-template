export enum Mode {
  Local = "local",
  Dev = "development",
  Stg = "staging",
  Prd = "production",
}

export const MODE: Mode = (import.meta.env.VITE_MODE as Mode) || Mode.Dev

export const isLocal = MODE === Mode.Local
export const isDev = MODE === Mode.Dev
export const isStg = MODE === Mode.Stg
export const isPrd = MODE === Mode.Prd

export enum Mode {
  Local = "local",
  Dev = "development",
  Stg = "staging",
  Prd = "production",
}

export const MODE: Mode = (import.meta.env.VITE_MODE as Mode) || Mode.Dev

export const __LOCAL__ = MODE === Mode.Local
export const __DEV__ = MODE === Mode.Dev
export const __STG__ = MODE === Mode.Stg
export const __PRD__ = MODE === Mode.Prd

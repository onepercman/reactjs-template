export enum Mode {
  Dev = "development",
  Stg = "staging",
  Prd = "production",
}

export const MODE: Mode = (import.meta.env.VITE_MODE as Mode) || Mode.Dev

export const _DEV_ = MODE === Mode.Dev
export const _STG_ = MODE === Mode.Stg
export const _PRD_ = MODE === Mode.Prd

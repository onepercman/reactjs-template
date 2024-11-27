import { ENV } from "./env.config"

export enum Mode {
  Dev = "development",
  Stg = "staging",
  Prd = "production",
}

export const _DEV_ = ENV.MODE === Mode.Dev
export const _STG_ = ENV.MODE === Mode.Stg
export const _PRD_ = ENV.MODE === Mode.Prd

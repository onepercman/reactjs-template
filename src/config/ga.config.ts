import { ENV, Env } from "./env.config"

export const gaConfig = <const>{
  [Env.Dev]: "",
  [Env.Stg]: "",
  [Env.Prd]: "",
}

export const GA_ID = gaConfig[ENV]

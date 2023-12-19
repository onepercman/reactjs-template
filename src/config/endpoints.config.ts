import { ENV, Env } from "./env.config"

const API_URLS = <const>{
  [Env.Dev]: "",
  [Env.Stg]: "",
  [Env.Prd]: "",
}

export const API_URL = API_URLS[ENV]

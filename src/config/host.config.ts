import { ENV, Env } from "./env.config"

const HOSTS = <const>{
  [Env.Dev]: "",
  [Env.Stg]: "",
  [Env.Prd]: "",
}

export const HOST = HOSTS[ENV]

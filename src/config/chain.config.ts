import { fantom, goerli } from "viem/chains"
import { ENV, Env } from "./env.config"

const ChainConfig = <const>{
  [Env.Dev]: goerli,
  [Env.Stg]: fantom,
  [Env.Prd]: fantom,
}

export const defaultChain = ChainConfig[ENV]

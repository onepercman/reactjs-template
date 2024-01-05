import { mainnet } from "viem/chains"
import { ENV, Env } from "./env.config"

const ChainConfig = <const>{
  [Env.Dev]: mainnet,
  [Env.Stg]: mainnet,
  [Env.Prd]: mainnet,
}

export const defaultChain = ChainConfig[ENV]

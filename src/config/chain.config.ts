import { mainnet } from "viem/chains";
import { MODE, Mode } from "./mode.config";

const ChainConfig = <const>{
	[Mode.Local]: mainnet,
	[Mode.Dev]: mainnet,
	[Mode.Stg]: mainnet,
	[Mode.Prd]: mainnet,
};

export const defaultChain = ChainConfig[MODE];

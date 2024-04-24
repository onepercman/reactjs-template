import { bsc, bscTestnet } from "viem/chains";

export const AddressZero = <const>"0x0000000000000000000000000000000000000000";

export const ADDRESSES = {
	MULTICALL: {
		[bscTestnet.id]: "0xd808400fbf312aca5c7487cd30b0d1386e04bc78",
		[bsc.id]: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
	},
};

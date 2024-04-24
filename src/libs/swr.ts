import swr, { SWRConfiguration } from "swr";

export const swrConfig: SWRConfiguration = <const>{ revalidateOnFocus: false };

export const useSWR = swr;

import { ToasterContainer } from "@/components/app/toaster-container";
import { queryClient } from "@/libs/react-query";
import { swrConfig } from "@/libs/swr";
import { wagmiConfig } from "@/libs/wagmi";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { SWRConfig } from "swr";
import { WagmiProvider } from "wagmi";
import { ClientSentry } from "./components/wallet/client-sentry";
import { Loader } from "./libs/ui/loader";
import { router } from "./router";
import "./styles/styles.scss";

export default function App() {
	return (
		<WagmiProvider config={wagmiConfig}>
			<QueryClientProvider client={queryClient}>
				<SWRConfig value={swrConfig}>
					<ClientSentry />
					<ToasterContainer />
					<RouterProvider router={router} fallbackElement={<Loader />} />
				</SWRConfig>
			</QueryClientProvider>
		</WagmiProvider>
	);
}

import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/app/layout";
import NotFound from "./pages/not-found";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "*",
				element: <NotFound />,
			},
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);

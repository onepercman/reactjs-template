import { FC, Fragment, HTMLAttributes } from "react";
import { Outlet } from "react-router-dom";

export const Layout: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
	return (
		<Fragment>
			{children}
			<Outlet />
		</Fragment>
	);
};

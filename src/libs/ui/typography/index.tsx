import { H1 } from "./h1";
import { H2 } from "./h2";

interface Typography
	extends React.ForwardRefExoticComponent<
		React.HTMLAttributes<HTMLParagraphElement> &
			React.RefAttributes<HTMLParagraphElement>
	> {
	H1: typeof H1;
	H2: typeof H2;
}

const Typography = H1 as Typography; // Default typography is h1

export { Typography };

Typography.H1 = H1;
Typography.H2 = H2;

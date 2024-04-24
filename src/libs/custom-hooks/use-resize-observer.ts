import React, { useState } from "react";

export function useResizeObserver<T extends HTMLElement = any>(
	callback?: (size: DOMRect) => void,
) {
	const ref = React.useRef<T>(null);

	const [size, setSize] = useState<DOMRect>();

	const resizeObserver = React.useMemo(
		() =>
			new ResizeObserver(() => {
				if (ref.current) {
					const value = ref.current.getBoundingClientRect();
					setSize(value);
					callback && callback(value);
				}
			}),
		[],
	);

	React.useEffect(() => {
		if (ref.current) {
			resizeObserver.observe(ref.current);
		}
		return () => {
			resizeObserver.disconnect();
		};
	}, [resizeObserver]);

	return {
		ref,
		size,
	};
}

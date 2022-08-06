import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export function AppAnimation({ setMenuOpen, setMotionParam, children }) {
	useEffect(() => {
		window.addEventListener("resize", () => {
			if (window.innerWidth > 850) {
				setMenuOpen(false);
				setMotionParam(getMotionParam(false));
				return;
			}
			setMotionParam(getMotionParam(true));
		});
	}, [setMenuOpen, setMotionParam]);

	return <AnimatePresence>{children}</AnimatePresence>;
}

export function getMotionParam(mobile) {
	if (mobile) return { animate: { opacity: 1 } };
	else
		return {
			initial: { opacity: 0 },
			animate: { opacity: 1, transition: { duration: 1.5 } },
			exit: { opacity: 0 },
		};
}

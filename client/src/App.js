import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import TopMenu from "./components/TopMenu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import SunsetYoga from "./pages/SunsetYoga";
import VinyasaFlow from "./pages/VinyasaFlow";
import KundaliniYoga from "./pages/KundaliniYoga";
import RestorativeYoga from "./pages/RestorativeYoga";
import KundaDance from "./pages/KundaDance";
import BusinessYoga from "./pages/BusinessYoga";
import WellnessCoaching from "./pages/WellnessCoaching";
import "./sass/styles.scss";
import "./pics/star.png";
import "./pics/star2.png";

const currentMobileState = () => window.innerWidth < 850;

export default function App() {
	const location = useLocation();
	const [isMobile, setIsMobile] = useState(currentMobileState);

	useEffect(() => {
		window.addEventListener("resize", () => setIsMobile(currentMobileState));
	}, []);

	const motionParam = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: { duration: 0.5, delay: 0.5 },
		},
		exit: { opacity: 0, transition: { duration: 0.5 } },
	};

	return (
		<div id="App" className="App">
			<TopMenu isMobile={isMobile} />
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home motionParam={motionParam} />} />
					<Route path="/about" element={<About motionParam={motionParam} />} />
					<Route
						path="/sunsetyoga"
						element={<SunsetYoga motionParam={motionParam} />}
					/>
					<Route
						path="/vinyasaflow"
						element={<VinyasaFlow motionParam={motionParam} />}
					/>
					<Route
						path="/kundaliniyoga"
						element={<KundaliniYoga motionParam={motionParam} />}
					/>
					<Route
						path="/restorativeyoga"
						element={<RestorativeYoga motionParam={motionParam} />}
					/>
					<Route
						path="/kundadance"
						element={<KundaDance motionParam={motionParam} />}
					/>
					<Route
						path="/businessyoga"
						element={<BusinessYoga motionParam={motionParam} />}
					/>
					<Route
						path="/wellnesscoaching"
						element={<WellnessCoaching motionParam={motionParam} />}
					/>
				</Routes>
				{location.pathname !== "/" ? (
					<Footer
						key={"footer" + location.pathname}
						motionParam={motionParam}
					/>
				) : null}
			</AnimatePresence>
		</div>
	);
}

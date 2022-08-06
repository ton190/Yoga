import { useEffect } from "react";
import { motion } from "framer-motion";
import "../pics/pages/Home/bg.jpg";

export default function Home({ motionParam }) {
	useEffect(() => {
		document.getElementById("App").className = "App bg-100";
	}, []);

	return (
		<motion.section className="Home Page" {...motionParam}>
			<div className="page">
				<div className="container">
					<div>
						<h1>Sunset Yoga Girl</h1>
						<h3>YOGA TEACHER & WELLNESS COACH</h3>
						<button className="button">Join SunSet Yoga Class</button>
					</div>
					<div className="separator"></div>
					<div>
						<p>
							”Yoga is not just repetition of few postures, it is more about the
							exploration and discovery of the subtle energies of life”
						</p>
						<p>Amit Ray</p>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

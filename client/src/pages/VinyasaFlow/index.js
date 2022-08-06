import { useEffect } from "react";
import { motion } from "framer-motion";
import StarList from "../../components/StarList";

export default function VanyasaFlow({ motionParam }) {
	useEffect(() => {
		document.getElementById("App").className = "App bg-300";
	}, []);

	return (
		<motion.section className="VanyasaFlow Page" {...motionParam}>
			<div className="page">
				<div className="p1">
					<h1 className="page_title">Vinyasa flow</h1>
					<h2>What are the benefits of a Vinyasa Flow private class?</h2>
					<StarList>
						<p>The class goes at your own pace;</p>
						<p>
							The teacher can give you all the attention according to your level
							which is great especially if you are a beginner;
						</p>
						<p>
							The teacher can concentrate on establishing the right alignment of
							the poses which gives you a good start in your practice;
						</p>
						<p>
							The private class is a good opportunity for your body to
							'remember' the yoga postures in a right alignment which is an
							injury prevention.
						</p>
					</StarList>
					<p>
						<b>Natalia Catapano is E-RYT 500 certified yoga teacher.</b> She has
						been practicing Vinyasa Flow since 2010 and teaching yoga since
						2013. Her experience is more than 3000 teaching hours.
					</p>
				</div>
			</div>
		</motion.section>
	);
}

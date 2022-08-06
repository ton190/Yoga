import { useEffect } from "react";
import { motion } from "framer-motion";
import StarList from "../components/StarList";
import StarContainer from "../components/StarContainer";
import "../pics/star.png";
import "../pics/star2.png";
import Img1 from "../pics/pages/SunsetYoga/img1.jpg";
import Ornament from "../pics/pages/SunsetYoga/ornament.png";

export default function SunsetYoga({ motionParam }) {
	useEffect(() => {
		document.getElementById("App").className = "App bg-200";
	}, []);

	return (
		<motion.section className="SunsetYoga Page" {...motionParam}>
			<div className="page">
				<img alt="Ornament" className="topImg" src={Ornament} />
				<h1>SUNSET YOGA CLASS</h1>
				<h2>Why to join Sunset Yoga class?</h2>
				<StarList className="flex">
					<p>
						The Key West sunset is legendary. Let's celebrate it in a healthy
						way!
					</p>
					<p>
						️The beautiful outdoor area of the park - what can be a better
						'studio' for your practice?
					</p>
					<p>
						The nature, surrounded by all four elements (Water, Fire, Earth and
						Air) will let you move and connect your mind, body and spirit to the
						power of sunset; ️The Sunset Yoga class is timed to end just as the
						sun is at the horizon so that gives you a chance to admire the
						sunset while practicing.
					</p>
					<p>
						The Sunset Yoga class is timed to end just as the sun is at the
						horizon so that gives you a chance to admire the sunset while
						practicing.
					</p>
					<p>
						The time chosen for the class is called Amrit Vela or Ambrosial
						hours (3 hours before the sunrise and the sunset), it is the most
						effective time in Yoga when you can get the maximum energy levels;
					</p>
				</StarList>
				<StarContainer>
					<img alt="Yoga" src={Img1} />
				</StarContainer>
				<div className="list flex">
					<p>
						Sunset Yoga classes take place at the Truman Waterfront, down the
						pathway to the right of the parking lot when facing the water.
					</p>
					<p>
						The group gathers 1,5 hours before sunset (start time varies
						throughout the year).
					</p>
					<p>
						Natalia Catapano, Sunset Yoga Girl, is E-RYT 500 certified yoga
						teacher. She has been practicing Vinyasa Flow since 2010 and
						teaching yoga since 2013. Her experience is more than 3000 teaching
						hours.
						<br />
						Natalia is also available for private sessions.
					</p>
				</div>
				<button className="button">Join Sunset Yoga Class</button>
				<img alt="Bottom border" className="botImg" src={Ornament} />
			</div>
		</motion.section>
	);
}

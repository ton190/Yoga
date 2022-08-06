import { useEffect } from "react";
import { motion } from "framer-motion";
import StarList from "../components/StarList";
import StarContainer from "../components/StarContainer";
import AboutImg1 from "../pics/pages/About/about1.jpg";
import AboutImg2 from "../pics/pages/About/about2.jpg";
import Video from "../pics/pages/About/video.jpg";
import "../pics/pages/About/sunset_yoga.jpg";
import "../pics/star.png";
import "../pics/pages/About/ornament.png";

export default function About({ motionParam }) {
	useEffect(() => {
		document.getElementById("App").className = "App bg-200";
	}, []);
	return (
		<motion.section className="About Page" {...motionParam}>
			<div className="page">
				<h1>About me</h1>
				<div className="about">
					<div className="p1">
						<p>
							Natalia Catapano, the founder of Sunset Yoga Girl LLC, was born
							and raised in Siberia.
						</p>
						<p>
							"In my youth, yoga was an unknown in the country, but with the
							fall of the iron curtain, new ideologies and teachings arrived,
							including yoga. I was first introduced to the practice in the year
							of 2000 at local fitness center. The physical expression led me to
							deeper, philosophical studies, and to a first yoga retreat that
							changed my path!
						</p>
					</div>
					<div className="img">
						<img alt="About me" src={AboutImg1} />
					</div>
					<div className="p2">
						<p>
							Then I moved to New York City with my two daughters, where I met
							my current husband and immersed myself in studies of Hatha,
							meditation and pranayama. My 500-hour Vinyasa Flow teacher
							training certification in 2013 was followed by certification in
							Restorative Yoga, Kundalini and as a Health and Life Coach.
						</p>
						<p>
							Upon moving to Key West, I saw no better way to celebrate the
							beauty of practice and place than a Sunset Yoga class - timed to
							finish as the sun hovers on the horizon and serenaded with
							Tibetian bowls.”
						</p>
					</div>
				</div>
				<div className="yoga">
					<div className="p1">
						<h2>Sunset Yoga is</h2>
						<StarList>
							<p>A vinyasa-style practice, approachable at any level</p>
							<p>A full body workout (be prepared!)</p>
							<p>
								An outdoor activity (which is safe and great for your
								well-being)
							</p>
						</StarList>
					</div>
					<img alt="About me" src={AboutImg2} />
					<div className="p2">
						<h2>How to find Sunset Yoga classes?</h2>
						<div className="container">
							<div>
								<div>01</div>
								<p>
									Go to Truman Waterfront public park (right of the parking lot
									when facing the harbor);
								</p>
							</div>
							<div>
								<div>02</div>
								<p>Follow the bike path and look for Natalia on the grass.</p>
							</div>
						</div>
						<p>
							The classes take place everyday except Monday. They are timed to
							begin one hour before sunset. Mats are available as needed.
						</p>
					</div>
					<button className="button">Book A Class With Natalia</button>
				</div>
				<div className="energy">
					<img alt="Yoga" src={Video} />
					<StarContainer>
						<h2>
							The sunset fills you with energy and connects you to nature.
						</h2>
						<p>
							There’s a reason so many cultures practice sunrise and sunset
							rituals. You’re surrounded by all of the elements, which light you
							up inside while the light is disappearing outside.”
						</p>
					</StarContainer>
				</div>
			</div>
		</motion.section>
	);
}

import { useEffect } from "react";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider.js";
import ImgYoga1 from "../pics/pages/BusinessYoga/yoga1.jpg";
import ImgYoga2 from "../pics/pages/BusinessYoga/yoga2.jpg";
import ImgYoga3 from "../pics/pages/BusinessYoga/yoga3.jpg";
import ImgYoga4 from "../pics/pages/BusinessYoga/yoga4.jpg";
import Ornament from "../pics/pages/BusinessYoga/ornament.svg";

export default function BusinessYoga({ motionParam }) {
	const yogaImages = [
		{ url: ImgYoga1, alt: "Yoga 1" },
		{ url: ImgYoga2, alt: "Yoga 2" },
		{ url: ImgYoga3, alt: "Yoga 3" },
		{ url: ImgYoga4, alt: "Yoga 4" },
	];

	useEffect(() => {
		document.getElementById("App").className = "App bg-300";
	}, []);

	return (
		<motion.section className="BusinessYoga Page PrivateYoga" {...motionParam}>
			<div className="ornament">
				<img className="o1" alt="Ornament" src={Ornament} />
				<img className="o2" alt="Ornament" src={Ornament} />
			</div>
			<div className="page">
				<div className="p1">
					<div className="title">
						<h1>
							<div>
								Business Yoga<span>®</span>
							</div>
						</h1>
						NineMinMax®
					</div>

					<div>
						<p>
							NineMinMax® Business Yoga is based on Kundalini Yoga as taught by
							Yogi Bhajan® It is based on on his special Nine-Minute Meditations
							prepared especially for busy people. When you do these exercises,
							you will immediately notice the effect of them in the form of
							relaxation, relaxation, vitality and alertness.
						</p>
						<p>
							NineMinMax® Business Yoga not only affects your muscles and
							internal organs, but also - and especially - your glands. Your
							glands are the regulators of your body, comparable to a software
							program - that is why NineMaxYoga® Business Yoga works so quickly
							and effectively. Through the exercises you rewrite your internal
							software program to bring balance to your body’s magnificent
							systems, encouraging good health, vitality and relaxation.
						</p>
					</div>
				</div>
				<ImageSlider images={yogaImages} />
				<div className="p2">
					<div className="images">
						<img alt="Yoga 1" src={ImgYoga1} />
						<img alt="Yoga 2" src={ImgYoga2} />
						<img alt="Yoga 3" src={ImgYoga3} />
						<img alt="Yoga 4" src={ImgYoga4} />
					</div>
					<div className="content">
						<p>
							NineMinMax ® Business Yoga exercises are easy - anyone can do
							them, just sitting on a chair. You don’t need to change into your
							sportswear to do NineMinMax ® Business Yoga. A complete session
							takes 18 to 36 minutes of your precious time. If you are short of
							time, the minimum time you need to invest is 15 minutes.
						</p>
						<p>
							The NineMinMax ® exercises are complete workouts for body and
							mind. They will give you the opportunity to think expansively and
							become more open-minded - to think outside of the box, beyond that
							which you see - broadening your awareness and your intuition. This
							is why NineMinMax ® Business Yoga is so suitable for the
							workplace.
						</p>
						<p>
							As a certified NineMinMax ® Business Yoga instructor Natalia is
							happy to bring this powerful practice to every business person or
							group of people in range from small business to big corporations.
						</p>
						<button className="button">Join Business Yoga class</button>
					</div>
				</div>
			</div>
		</motion.section>
	);
}

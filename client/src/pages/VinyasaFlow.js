import { useEffect } from "react";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider.js";
import ImgYoga1 from "../pics/pages/VinyasaFlow/yoga1.jpg";
import ImgYoga2 from "../pics/pages/VinyasaFlow/yoga2.jpg";
import ImgYoga3 from "../pics/pages/VinyasaFlow/yoga3.jpg";
import ImgYoga4 from "../pics/pages/VinyasaFlow/yoga4.jpg";
import Ornament from "../pics/pages/VinyasaFlow/ornament.svg";

export default function VanyasaFlow({ motionParam }) {
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
		<motion.section className="VanyasaFlow Page PrivateYoga" {...motionParam}>
			<div className="ornament">
				<img className="o1" alt="Ornament" src={Ornament}/>
				<img className="o2" alt="Ornament" src={Ornament}/>
			</div>
			<div className="page">
				<div className="p1">
					<h1>Vinyasa Flow</h1>
					<div>
						<h2>What are the benefits of a Vinyasa Flow private class?</h2>
						<div className="StarList">
							<p>The class goes at your own pace;</p>
							<p>
								The teacher can give you all the attention according to your
								level which is great especially if you are a beginner;
							</p>
							<p>
								The teacher can concentrate on establishing the right alignment
								of the poses which gives you a good start in your practice;
							</p>
							<p>
								The private class is a good opportunity for your body to
								'remember' the yoga postures in a right alignment which is an
								injury prevention.
							</p>
						</div>
						<p>
							<b>Natalia Catapano is E-RYT 500 certified yoga teacher.</b> She
							has been practicing Vinyasa Flow since 2010 and teaching yoga
							since 2013. Her experience is more than 3000 teaching hours.
						</p>
					</div>
				</div>
				<ImageSlider images={yogaImages} />
				<div className="p2">
					<div className="box1">
						<p>
							<b>What does 'Vinyasa' mean?</b>
							<br />
							From Sanskrit it means 'in a special way'.
						</p>
						<p>
							Vinyasa Flow is an integration of your state of mind and yoga
							postures. It includes standing and sitting poses, multiple
							breathing techniques. Sun salutation is used as warm-up for the
							practice as it builds heat in the body.
						</p>
						<div className="images1">
							<img alt="Yoga 1" src={ImgYoga1} />
							<img alt="Yoga 2" src={ImgYoga2} />
						</div>
					</div>
					<div className="box2">
						<div className="images2">
							<img alt="Yoga 3" src={ImgYoga3} />
							<img alt="Yoga 4" src={ImgYoga4} />
						</div>
						<h2>Vinyasa Flow</h2>
						<div className="content">
							<p>
								Is a great way to increase your stamina, improve your body shape
								and flexibility;
							</p>
							<p>Is physical and comprehensive;</p>
							<p>
								Is an activity that makes the entire body work hard (front,
								back, upper and lower body).
							</p>
						</div>
					</div>
				</div>
				<button className="button">Join Vinyasa Flow Class</button>
			</div>
		</motion.section>
	);
}

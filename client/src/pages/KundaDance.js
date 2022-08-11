import { useEffect } from "react";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider.js";
import ImgYoga1 from "../pics/pages/KundaDance/yoga1.jpg";
import ImgYoga2 from "../pics/pages/KundaDance/yoga2.jpg";
import ImgYoga3 from "../pics/pages/KundaDance/yoga3.jpg";
import ImgYoga4 from "../pics/pages/KundaDance/yoga4.jpg";
import Ornament from "../pics/pages/KundaDance/ornament.svg";

export default function KundaDance({ motionParam }) {
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
    <motion.section className="KundaDance Page PrivateYoga" {...motionParam}>
			<div className="ornament">
				<img class="o1" alt="Ornament" src={Ornament}/>
				<img class="o2" alt="Ornament" src={Ornament}/>
			</div>
      <div className="page">
        <div className="p1">
          <div className="box1">
            <div className="title">
              <h1>
                <div>
                  KundaDance<span>®</span>
                </div>
              </h1>
              by Maya Fienness
              <div className="content">
                <h2>Special benefits include</h2>
                <div className="StarList">
                  <p>liver detox</p>
                  <p>stress release</p>
                  <p>stress release</p>
                  <p>stress release</p>
                </div>
              </div>
            </div>
            <p>
              KundaDance is a great option for bachelorette party or for small
              group of friends. Natalia has an additional certificate from Maya
              Fiennes KundaDance instructor course.
            </p>
          </div>
          <ImageSlider images={yogaImages} />
          <div className="box2">
            <p>
              KundaDance is fun, uplifting, liberating dance and yoga workout.
              <br />
              It is also a spiritual journey featuring exclusive music composed
              by Maya Fiennes.
            </p>
            <h2>This creative movement class combines</h2>
            <div className="StarList">
              <p>Kundalini Yoga</p>
              <p>Thai Chi</p>
              <p>Qi Gong</p>
            </div>
            <p>
              It takes you on a journey through the chakras actively aligning
              your body, mind and spirit.
            </p>
          </div>
        </div>
        <div className="p2">
          <div className="images">
            <img alt="Yoga 1" src={ImgYoga1} />
            <img alt="Yoga 2" src={ImgYoga2} />
            <img alt="Yoga 3" src={ImgYoga3} />
            <img alt="Yoga 4" src={ImgYoga4} />
          </div>
          <button className="button">Join Kundalini Yoga Class</button>
        </div>
      </div>
    </motion.section>
  );
}

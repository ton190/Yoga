import { useEffect } from "react";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider.js";
import ImgYoga1 from "../pics/pages/RestorativeYoga/yoga1.jpg";
import ImgYoga2 from "../pics/pages/RestorativeYoga/yoga2.jpg";
import ImgYoga3 from "../pics/pages/RestorativeYoga/yoga3.jpg";
import ImgYoga4 from "../pics/pages/RestorativeYoga/yoga4.jpg";
import Ornament from "../pics/pages/RestorativeYoga/ornament.svg";

export default function RestorativeYoga({ motionParam }) {
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
    <motion.section
      className="RestorativeYoga Page PrivateYoga"
      {...motionParam}
    >
			<div className="ornament">
				<img class="o1" alt="Ornament" src={Ornament}/>
				<img class="o2" alt="Ornament" src={Ornament}/>
			</div>
      <div className="page">
        <div className="p1">
          <h1>Restorative Yoga</h1>
          <div>
            <div>
              <p>
                It is a gentle form of yoga where poses are held for a sustained
                amount of time allowing a body to open ‘passively'. The beauty
                of Restorative Yoga is that there is no muscular engagement
                involved. During the practice the body and mind relax and
                literally become softer. We create space as the body is
                completely supported on props. The energy of the body is then
                only used for healing. Restorative Yoga is essentially a
                practice of actively consciously surrendering. To surrender our
                tension to the force of gravity can also bring a sense of great
                relief. By engaging in this practice we reveal what has been
                obscured by stress - we are able to see the lighter, become more
                energized, clear, heart-centered self.
              </p>
              <p>
                Restorative Yoga private class is suitable for all body types
                and at all stages of life.
              </p>
              <p>
                This class is good on its own or as an additional class to
                unwind from the more strenuous activity (such as Vinyasa Flow
                class).
              </p>
            </div>
            <ImageSlider images={yogaImages} />
          </div>
        </div>
        <div className="p2">
          <div className="images">
            <img alt="Yoga 1" src={ImgYoga1} />
            <img alt="Yoga 2" src={ImgYoga2} />
            <img alt="Yoga 3" src={ImgYoga3} />
            <img alt="Yoga 4" src={ImgYoga4} />
          </div>
          <div className="box">
            <p>
              In every Restorative Yoga session Natalia uses Tibetian singing
              bowls therapy. It is a very efficient ancient stress relieving
              technique that helps you relax on a deeper level.
            </p>
            <button className="button">Join Restorative Yoga Class</button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

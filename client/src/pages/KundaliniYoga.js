import { useEffect } from "react";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider.js";
import ImgYoga1 from "../pics/pages/KundalinyYoga/yoga1.jpg";
import ImgYoga2 from "../pics/pages/KundalinyYoga/yoga2.jpg";
import ImgYoga3 from "../pics/pages/KundalinyYoga/yoga3.jpg";
import ImgYoga4 from "../pics/pages/KundalinyYoga/yoga4.jpg";
import Ornament from "../pics/pages/KundalinyYoga/ornament.svg";

export default function KundaliniYoga({ motionParam }) {
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
    <motion.section className="KundaliniYoga Page PrivateYoga" {...motionParam}>
			<div className="ornament">
				<img class="o1" alt="Ornament" src={Ornament}/>
				<img class="o2" alt="Ornament" src={Ornament}/>
			</div>
      <div className="page">
        <div className="p1">
          <h1>Kundalini Yoga</h1>
          <div>
            <div>
              <p>
                Kundalini is a branch of yoga that is emphasizing the
                breathwork, chanting and repetitive poses. It is the fastest way
                to establish an aligned relationship between the body, mind and
                the soul. “I have recognized, with the blessing of my Master,
                that it is possible to be healthy, to be happy, and to be holy
                while living in this society. But you must have energy… The
                power of Kundalini Yoga lies in the actual experience. It goes
                right into your heart and extends your consciousness so you may
                have a wide horizon of grace and of knowing the truth”
              </p>
              <p>
                Kundalini Yoga is a Science which works on the seven chakras,
                the arcline and the aura. It works directly on the total energy,
                and that flow of energy has one simple way: either you sway it
                or it sways you. Either you are above the energy and ride it, or
                you go below the energy and it rides you. That is where
                Kundalini Yoga fits in: you will learn to ride your energy, to
                experience it and penetrate any given situation to attain a
                balance.
              </p>
              <p>
                lies in the actual experience. It goes right into your heart and
                extends your consciousness so you may have a wide horizon of
                grace and of knowing the truth”
              </p>
              <p>Yogi Bhajan, Ph.D.</p>
            </div>
            <ImageSlider images={yogaImages} />
            <div>
              <h2>Kundalini Yoga private class</h2>
              <div className="StarList">
                <p>fulfill you with energy</p>
                <p>increases awareness and inner balance;</p>
                <p>release stress and anxiety of modern life</p>
              </div>
            </div>
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
              Natalia has been practicing Kundalini Yoga since 2019 and teaching
              since 2021. In 2022 she has been blessed with a spiritual name
              Prem Navgeet Kaur.
            </p>
            <button className="button">Join Kundalini Yoga Class</button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

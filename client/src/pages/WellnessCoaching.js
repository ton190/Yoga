import { useEffect } from "react";
import { motion } from "framer-motion";
import Ornament from "../pics/pages/WellnessCoaching/ornament.png";
import "../pics/pages/WellnessCoaching/ornament2.png";
import Img from "../pics/pages/WellnessCoaching/img1.jpg";

export default function WellnessCoaching({ motionParam }) {
  useEffect(() => {
    document.getElementById("App").className = "App bg-200";
  }, []);

  return (
    <motion.section className="Page WellnessCoaching" {...motionParam}>
      <div className="page">
        <img alt="ornament" src={Ornament} className="ornament" />
        <h1 className="all_star_title ">Wellness Coaching</h1>
        <div className="p1">
          <div>
            <p>
              Concept wellness includes not only physical health, but also
              complex of emotional, spiritual, social and intellectual
              well-being on a holistic level. Wellness coaching is a team work
              of the coach and client in order to achieve clients goals.
            </p>
            <p>
              By using evidence-based skillfull conversation, wellness coach
              helps his client to open up and use the whole his potential to
              improve his well being and help him to live balanced and fulfilled
              life.
            </p>
          </div>
          <div className="img">
            <img alt="Me" src={Img} className="center" />
          </div>
          <p>
            As a trained professional Natalia Catapano is passionate about
            healthy living in all areas of well-being. If you need to improve
            youe career & relationship, implement healthy habits that last long
            into your daily routine, you should consider wellness coaching as an
            option to achieve your goals faster.
          </p>
        </div>
        <button className="button">Find out more</button>
        <img alt="ornament" src={Ornament} className="ornament" />
      </div>
    </motion.section>
  );
}

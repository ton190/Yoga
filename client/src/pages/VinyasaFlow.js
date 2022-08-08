import { useEffect } from "react";
import { motion } from "framer-motion";
import ImageSlider from "../components/ImageSlider.js";
import StarList from "../components/StarList";
import ImgYoga1 from "../pics/pages/VinyasaFlow/yoga1.jpg";
import ImgYoga2 from "../pics/pages/VinyasaFlow/yoga2.jpg";
import ImgYoga3 from "../pics/pages/VinyasaFlow/yoga3.jpg";
import ImgYoga4 from "../pics/pages/VinyasaFlow/yoga4.jpg";

export default function VanyasaFlow({ motionParam }) {
  const yogaImages = [
    { url:  ImgYoga1 , alt: "Yoga 1" },
    { url:  ImgYoga2 , alt: "Yoga 2" },
    { url:  ImgYoga3 , alt: "Yoga 3" },
    { url:  ImgYoga4 , alt: "Yoga 4" },
  ];
  // const [imageId, setImageId] = useState(0);
  // const [motionDirection, setMotionDirection] = useState(true);

  useEffect(() => {
    document.getElementById("App").className = "App bg-300";
  }, []);

  // let flag = true;
  // function changeImage(i) {
  //   if (!flag) return;
  //   flag = false;
  //   setTimeout(() => (flag = true), 500);
  //   let l = yogaImages.length;
  //   setMotionDirection(i > 0);
  //   setImageId((imageId + ((l + i) % l)) % l);
  // }

  // const imageMotionParam = motionDirection
  //   ? {
  //       initial: { x: "-100%" },
  //       exit: { x: "100%", transition: { duration: 0.5 } },
  //     }
  //   : {
  //       initial: { x: "100%" },
  //       exit: { x: "-100%", transition: { duration: 0.5 } },
  //     };

  // function ImageLibrary() {
  //   return <img alt="Yoga box" src={yogaImages[imageId]} />;
  // }

  return (
    <motion.section className="VanyasaFlow Page" {...motionParam}>
      <div className="page">
        <div className="p1">
          <h1>Vinyasa flow</h1>
          <div>
            <h2>What are the benefits of a Vinyasa Flow private class?</h2>
            <StarList>
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
            </StarList>
            <p>
              <b>Natalia Catapano is E-RYT 500 certified yoga teacher.</b> She
              has been practicing Vinyasa Flow since 2010 and teaching yoga
              since 2013. Her experience is more than 3000 teaching hours.
            </p>
          </div>
        </div>
        <ImageSlider images={yogaImages} />
        {/* <div className="imgBox"> */}
        {/*   <AnimatePresence> */}
        {/*     <motion.div */}
        {/*       key={imageId} */}
        {/*       animate={{ x: "0", transition: { duration: 0.5 } }} */}
        {/*       {...imageMotionParam} */}
        {/*     > */}
        {/*       <ImageLibrary /> */}
        {/*     </motion.div> */}
        {/*   </AnimatePresence> */}
        {/*   <span className="forward" onClick={() => changeImage(1)} /> */}
        {/*   <span className="back" onClick={() => changeImage(-1)} /> */}
        {/* </div> */}
      </div>
    </motion.section>
  );
}

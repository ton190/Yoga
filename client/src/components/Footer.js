import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import vk from "../pics/icon_vk.png";
import insta from "../pics/icon_insta.png";
import telegram from "../pics/icon_telegram.png";

export default function Footer({ motionParam }) {
  return (
    <motion.footer {...motionParam}>
      <div className="box">
        <div className="p1">
          <h1>Site Map</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/sunsetyoga">Sunset Yoga</Link>
            <Link to="/vinyasaflow">Vinyasa Flow</Link>
            <Link to="/kundaliniyoga">Kundalini Yoga</Link>
            <Link to="/restorativeyoga">Restorative Yoga</Link>
            <Link to="/kundadance">KundaDance</Link>
            <Link to="/businessyoga">Business Yoga</Link>
            <Link to="/wellnesscoaching">Wellness Coaching</Link>
          </nav>
        </div>
				<div className="separator"/>
        <div className="p2">
          <h1>
            Contacts
            <span>
              <img alt="instagra" src={insta} />
              <img alt="vk" src={vk} />
              <img alt="telegram" src={telegram} />
            </span>
          </h1>
					<div className="contacts">
						<p>Phone:</p><p>(xxx) xxx-xx-xx</p>
						<p>Email:</p><p>xxxxxx@xxxx.xx</p>
					</div>
        </div>
      </div>
    </motion.footer>
  );
}

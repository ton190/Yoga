import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import TopMenu from "./components/TopMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import SunsetYoga from "./pages/SunsetYoga";
import VinyasaFlow from "./pages/VinyasaFlow";
import "./sass/styles.scss";

const currentMobileState = () => window.innerWidth < 850;

export default function App() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(currentMobileState);

  useEffect(() => {
    window.addEventListener("resize", () => setIsMobile(currentMobileState));
  }, []);

  const motionParam = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: isMobile ? 0 : 0.5, delay: isMobile ? 0 : 0.5 },
    },
    exit: { opacity: 0, transition: { duration: isMobile ? 0 : 0.5 } },
  };

  return (
    <div id="App" className="App">
      <TopMenu isMobile={isMobile} />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home motionParam={motionParam} />} />
          <Route path="/about" element={<About motionParam={motionParam} />} />
          <Route
            path="/sunsetyoga"
            element={<SunsetYoga motionParam={motionParam} />}
          />
          <Route
            path="/vinyasaflow"
            element={<VinyasaFlow motionParam={motionParam} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

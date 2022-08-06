import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppAnimation, getMotionParam } from "./AppAnimation";
import TopMenu from "./components/TopMenu";
import Home from "./pages/Home/";
import About from "./pages/About";
import SunsetYoga from "./pages/SunsetYoga";
import VinyasaFlow from "./pages/VinyasaFlow";
import "./sass/_index.scss";

export default function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [motionParam, setMotionParam] = useState(
    getMotionParam(window.innerWidth < 850)
  );

  return (
    <div id="App" className="App">
      <TopMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AppAnimation setMenuOpen={setMenuOpen} setMotionParam={setMotionParam}>
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
      </AppAnimation>
    </div>
  );
}

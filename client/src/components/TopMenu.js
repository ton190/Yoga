import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../pics/logo.png";

function Links({ state }) {
  return (
    <div className={`menu ${state}`}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/sunsetyoga">Sunset yoga</Link>
        <div className="submenu">
          <div className="title base">Private courses</div>
          <div className="sublinks">
              <Link to="/vinyasaflow">Vinyasa flow</Link>
              <Link to="/kundaliniyoga">Kundalini yoga</Link>
              <Link to="/restorativeyoga">Restorative yoga</Link>
              <Link to="/kundadance">KundaDance</Link>
              <Link to="/businessyoga">Business yoga</Link>
              <Link to="/wellnesscoaching">Wellness coaching</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function TopMenu({ isMobile }) {
  const location = useLocation();
  const [menuState, setMenuState] = useState("");

  useEffect(() => setMenuState(isMobile ? "closed" : ""), [isMobile, location]);
  useEffect(() => {
    document.body.style.overflowY =
      menuState === "open" && isMobile ? "hidden" : "auto";
  }, [menuState, isMobile]);
  const toggle = () => setMenuState(menuState !== "open" ? "open" : "closed");

  return (
    <div className="TopMenu">
      <div className="container">
        <div className="logo"></div>
        <div className={`toggle ${menuState}`} onClick={() => toggle()}>
          <div>
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <Links state={menuState} />
      </div>
    </div>
  );
}

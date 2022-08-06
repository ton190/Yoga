import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./logo.png";

export default function TopMenu({ menuOpen, setMenuOpen }) {
  const [menuState, setMenuState] = useState("closed");
  const location = useLocation();
  const timer = useRef(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location, setMenuOpen]);

  useEffect(() => {
    clearTimeout(timer.current);
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      setMenuState("open");
    } else {
      document.body.style.overflowY = "scroll";
      setMenuState("closing");
      timer.current = setTimeout(() => {
        setMenuState("closed");
      }, 300);
    }
  }, [menuOpen, timer]);

  return (
    <div className="TopMenu">
      <div className="container">
        <div className="logo"></div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={`toggle ${menuState}`}
        >
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={`menu ${menuState}`}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <div className="submenu">
              <div className="title">Yoga classes</div>
              <div className="links">
                <Link to="/sunsetyoga">Sunset yoga</Link>
                <Link to="vinyasaflow">Vinyasa flow</Link>
                <a>Kundalini yoga</a>
                <a>Restorative yoga</a>
                <a>KundaDance</a>
              </div>
            </div>
            <a>Contacts</a>
            <a>Account</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

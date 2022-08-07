import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../pics/logo.png";

export default function TopMenu({ isMobile }) {
  const location = useLocation();
  const [menuState, setMenuState] = useState({
    open: false,
    transition: false,
  });

  useEffect(() => {
    if (isMobile) {
      setMenuState({ open: false, transition: true });
    } else {
      setMenuState({ open: false, transition: false });
    }
  }, [location, isMobile]);

  useEffect(() => {
    if (!menuState.open && isMobile) document.body.style.overflowY = "hidden";
    else document.body.style.overflow = "closed";
  }, [menuState.open, isMobile]);

  const menuOpacity = !isMobile ? 1 : menuState.open ? 1 : 0;

  return (
    <div className="TopMenu">
      <div className="container">
        <div className="logo"></div>
        <div
          onClick={() => {
            setMenuState({ open: !menuState.open, transition: true });
          }}
          className={`toggle ${menuState.open ? "open" : "closed"}`}
        >
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className="menu"
          style={{
            transition: menuState.transition ? "opacity .5s" : "initial",
            opacity: menuOpacity,
          }}
        >
          <nav
            style={{
              transition: menuState.open ? "opacity .25s .25s" : "opacity .15s ",
              opacity: menuOpacity,
            }}
          >
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

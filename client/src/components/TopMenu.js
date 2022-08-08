import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../pics/logo.png";

export default function TopMenu({ isMobile }) {
	const location = useLocation();
	const [menuState, setMenuState] = useState("");

	useEffect(
		() => setMenuState(isMobile ? "closed" : ""),
		[isMobile, location]
	);

	return (
		<div className="TopMenu">
			<div className="container">
				<div className="logo"></div>
				<div
					className={`toggle ${menuState}`}
					onClick={() => setMenuState(menuState !== "open" ? "open" : "closed")}
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

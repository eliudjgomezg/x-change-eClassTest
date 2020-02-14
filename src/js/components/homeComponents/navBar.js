import React from "react";
import dolar from "../../../img/dolar.jpg";

const NavBar = () => {
	let style = { backgroundImage: "url(" + dolar + ")" };
	let styleLetter = { color: "white" };
	return (
		<div>
			<nav
				className="navbar rounded border border-success d-flex navbar-expand-lg navbar-light bg-light"
				style={style}>
				<a className="navbar-brand  float-left" href="#" style={styleLetter}>
					X-Change
				</a>
			</nav>
		</div>
	);
};

export default NavBar;

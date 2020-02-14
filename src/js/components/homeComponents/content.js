import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
	let styleLetter = { color: "white" };
	return (
		<div className="justify-content-center border border-success container rounded bg-dark mt-3 py-5">
			<h2 style={styleLetter}>
				Gracias por preferir X-Change, la plataforma en la que puedes consultar los pares de moneda mas usados
				en latinoamerica Vs el Dolar Estadounidense
			</h2>
			<div className="collapse navbar-collapse d-flex justify-content-end mt-3" id="navbarSupportedContent">
				<Link to="/register" className="btn btn-outline-success my-2 my-sm-0" type="button">
					Suscribete!!!
				</Link>
			</div>
		</div>
	);
};

export default Content;

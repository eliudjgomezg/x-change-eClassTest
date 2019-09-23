import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export class Novedades extends React.Component {
	render() {
		return (
			<nav aria-label="...">
				<ul className="pagination justify-content-center align-bottom">
					<li className="page-item ">
						<a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
							Previous
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							1
						</a>
					</li>
					<li className="page-item " aria-current="page">
						<a className="page-link" href="#">
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							3
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							Next
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

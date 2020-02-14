//Componente donde se maqueta la vista. Componente de clase
import React, { Fragment } from "react";
import NavBar from "../components/homeComponents/navBar";
import Content from "../components/homeComponents/content";
import { Data } from "../components/homeComponents/data";

import "jquery";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid mx-0 px-0 bg-light">
				<NavBar />
				<div className=" mx-1">
					<Content />
				</div>
				<div className="mx-1">
					<Data />
				</div>
			</div>
		);
	}
}

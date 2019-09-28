import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";
import { ModalNovedades } from "../novedadesComponent/modalNovedades";
import { NovedadesList } from "../novedadesComponent/novedadesList";

export class Novedades extends React.Component {
	render() {
		return (
			<Fragment>
				<ModalNovedades />
				<NovedadesList />
			</Fragment>
		);
	}
}

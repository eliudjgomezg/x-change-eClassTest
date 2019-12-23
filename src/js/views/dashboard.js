import React, { Fragment } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

import { Carddashboard } from "../dashboardComponent/cardDashboard";
import { FormModalDashboard } from "../dashboardComponent/formModalDashboard";
import { Context } from "../store/appContext";

export class Dashboard extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<div className="container">
								{!!store.carddashboard && <Carddashboard />}
								{!!store.formModalDashboard && <FormModalDashboard />}
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

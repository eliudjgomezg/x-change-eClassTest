import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Dashboard } from "../views/dashboard";
import { Novedades } from "../views/novedades";
import { Familias } from "../views/familias";
import { Roles } from "../views/roles";
import { Estadistica } from "../views/estadistica";

import "jquery";

//create your first component
export class Admin extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<div className="bg-light border-right" id="sidebar-wrapper">
								<div className="sidebar-heading">iKids </div>
								<div className="list-group list-group-flush">
									<button
										onClick={e => actions.dashboard(e)}
										className="list-group-item list-group-item-action bg-light">
										Aulas
									</button>
									<button
										onClick={e => actions.novedades(e)}
										className="list-group-item list-group-item-action bg-light">
										Novedades
									</button>
									<button
										onClick={e => actions.familias(e)}
										className="list-group-item list-group-item-action bg-light">
										Familias
									</button>
									<button
										onClick={e => actions.roles(e)}
										className="list-group-item list-group-item-action bg-light">
										Roles
									</button>
								</div>
							</div>

							<div id="page-content-wrapper">
								<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
									<button
										className="btn btn-primary"
										id="menu-toggle"
										data-toggle="toggled"
										data-target="#sidebar-wrapper"
										onClick={() => actions.wrapper()}>
										Menu
									</button>

									<button
										className="navbar-toggler"
										type="button"
										data-toggle="collapse"
										data-target="#navbarSupportedContent"
										aria-controls="navbarSupportedContent"
										aria-expanded="false"
										aria-label="Toggle navigation">
										<span className="navbar-toggler-icon" />
									</button>

									<div className="collapse navbar-collapse" id="navbarSupportedContent">
										<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
											<li className="nav-item active">
												<Link className="btn btn-primary float-right" to="/">
													Logout <span className="sr-only">(current)</span>
												</Link>
											</li>
										</ul>
									</div>
								</nav>

								<div className="container-fluid">
									{!!store.dashboard && <Dashboard />}
									{!!store.novedades && <Novedades />}
									{!!store.familiass && <Familias />}
									{!!store.roles && <Roles />}
									{!!store.estadistica && <Estadistica />}
								</div>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

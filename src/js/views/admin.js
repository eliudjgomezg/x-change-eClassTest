import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Context } from "../store/appContext";

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
										Dashboard
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
									<button
										onClick={e => actions.estadistica(e)}
										className="list-group-item list-group-item-action bg-light">
										Estadistica
									</button>
								</div>
							</div>

							<div id="page-content-wrapper">
								<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
									<button
										className="btn btn-primary"
										id="menu-toggle"
										data-toggle="toggled"
										data-target="#sidebar-wrapper">
										Toggle Menu
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
												<a className="nav-link" href="#">
													Home <span className="sr-only">(current)</span>
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" href="#">
													Link
												</a>
											</li>
											<li className="nav-item dropdown">
												<a
													className="nav-link dropdown-toggle"
													href="#"
													id="navbarDropdown"
													role="button"
													data-toggle="dropdown"
													aria-haspopup="true"
													aria-expanded="false">
													Dropdown
												</a>
												<div
													className="dropdown-menu dropdown-menu-right"
													aria-labelledby="navbarDropdown">
													<a className="dropdown-item" href="#">
														Action
													</a>
													<a className="dropdown-item" href="#">
														Another action
													</a>
													<div className="dropdown-divider" />
													<a className="dropdown-item" href="#">
														Something else here
													</a>
												</div>
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

import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import { Dashboard } from "./views/dashboard";
import { Novedades } from "./views/novedades";
import { Familias } from "./views/familias";
import { Roles } from "./views/roles";
import { Estadistica } from "./views/estadistica";
import injectContext from "./store/appContext";

import "jquery";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";
		return (
			<BrowserRouter basename={basename}>
				<Fragment>
					<div className="bg-light border-right" id="sidebar-wrapper">
						<div className="sidebar-heading">Start Bootstrap </div>
						<div className="list-group list-group-flush">
							<Link to="/" href="#" className="list-group-item list-group-item-action bg-light">
								Dashboard
							</Link>
							<Link to="/novedades" href="#" className="list-group-item list-group-item-action bg-light">
								Novedades
							</Link>
							<Link to="/familias" href="#" className="list-group-item list-group-item-action bg-light">
								Familias
							</Link>
							<Link to="roles" href="#" className="list-group-item list-group-item-action bg-light">
								Roles
							</Link>
							<Link
								to="/estadistica"
								href="#"
								className="list-group-item list-group-item-action bg-light">
								Estadistica
							</Link>
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
							<Switch>
								<Route exact path="/" component={Dashboard} />
								<Route path="/novedades" component={Novedades} />
								<Route path="/familias" component={Familias} />
								<Route path="/roles" component={Roles} />
								<Route path="/estadistica" component={Estadistica} />
								<Route render={() => <h1>Not found!</h1>} />
							</Switch>
						</div>
					</div>
				</Fragment>
			</BrowserRouter>
		);
	}
}

export default injectContext(Layout);

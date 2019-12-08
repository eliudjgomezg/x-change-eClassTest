import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import { Admin } from "./views/admin";
import { Login } from "./views/login";
import { Teacher } from "./views/teacher";
import { CheckIn } from "./views/checkIn";

import injectContext, { Context } from "./store/appContext";

import "jquery";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<BrowserRouter basename={basename}>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/Administrador" component={Admin} />
					<Route path="/Profesor" component={Teacher} />
					<Route path="/Check In" component={CheckIn} />

					<Route render={() => <h1>Not found!</h1>} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default injectContext(Layout);

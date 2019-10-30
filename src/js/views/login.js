import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export class Login extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="container">
					<form className="form-signin">
						<img
							className="mb-4"
							src="/docs/4.3/assets/brand/bootstrap-solid.svg"
							alt=""
							width="72"
							height="72"
						/>
						<h1 className="h3 mb-3 font-weight-normal text-center">iKids</h1>
						<label htmlFor="inputEmail" className="sr-only">
							Rut
						</label>
						<input
							type="text"
							id="inputEmail"
							className="form-control"
							placeholder="Ej: 11.111.111-1"
							required
							AutoFocus
						/>
						<label htmlFor="inputPassword" className="sr-only">
							Password
						</label>
						<input
							type="password"
							id="inputPassword"
							className="form-control"
							placeholder="Password"
							required
						/>

						<Link to="/admin" className="btn btn-lg btn-primary btn-block" type="submit">
							Sign in
						</Link>
					</form>
				</div>
			</Fragment>
		);
	}
}

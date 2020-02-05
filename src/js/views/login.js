import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class Login extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<div className="container">
								<form className="form-signin">
									<h1 className="h3 mb-3 font-weight-normal text-center">iKids</h1>
									<label htmlFor="inputEmail" className="sr-only">
										Rut
									</label>
									<input
										type="text"
										className="form-control"
										placeholder="Ej: 11.111.111-1"
										onChange={e => actions.handleLoging(e)}
										value={store.login.rut}
										name="rut"
										required
									/>
									<label htmlFor="inputPassword" className="sr-only">
										Password
									</label>
									<input
										type="password"
										className="form-control"
										placeholder="Password"
										onChange={e => actions.handleLoging(e)}
										value={store.login.password}
										name="password"
										required
									/>
									<button
										type="button"
										className="btn btn-lg btn-primary btn-block"
										onClick={e => actions.login(e, this.props.history)}>
										Sign in
									</button>{" "}
									{!!store.alert && (
										<div className="alert alert-danger" role="alert">
											Usuario o Contraseña Incorrecto
										</div>
									)}
									{!!store.noTeacherDayWork && (
										<div className="alert alert-danger" role="alert">
											<h1 className="text-center">
												¡¡¡ Upsss no puedes iniciar sesion por dos razones: El dia de hoy no te
												toca servir o no tienes dia servicio asignado en tu perfil. Contacta al
												administraror de la app!!!
											</h1>
										</div>
									)}
								</form>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}
Login.propTypes = {
	history: PropTypes.object
};

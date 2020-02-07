import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import backGroundLogin from "../../img/bg-01.jpg";

export class Login extends React.Component {
	render() {
		let style = { backgroundImage: "url(" + backGroundLogin + ")" };
		let style1 = { backgroundColor: "#C408BC" };
		let style2 = { color: "white" };
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<div className="limiter">
								<div className="container-login100" style={style}>
									<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
										<span className="login100-form-title p-b-49">Login</span>

										<div
											className="wrap-input100 validate-input m-b-23"
											data-validate="Escribe tu Usuario">
											<span className="label-input100">Usuario</span>
											<input
												className="input100"
												type="text"
												onChange={e => actions.handleLoging(e)}
												value={store.login.rut}
												name="rut"
												placeholder="Escribe tu Usuario"
											/>
											<span className="focus-input100" data-symbol="&#xf206;" />
										</div>

										<div
											className="wrap-input100 validate-input"
											data-validate="Escribe tu Contraseña">
											<span className="label-input100">Contraseña</span>
											<input
												className="input100"
												type="password"
												onChange={e => actions.handleLoging(e)}
												value={store.login.password}
												name="password"
												placeholder="Escribe tu Contraseña"
											/>
											<span className="focus-input100" data-symbol="&#xf190;" />
										</div>

										{!!store.familiass && (
											<div className="text-right p-t-8 p-b-31">
												<a href="#">Forgot password?</a>
											</div>
										)}

										<div className="container-login100-form-btn mt-4">
											<div className="wrap-login100-form-btn">
												<div className="login100-form-bgbtn" />
												<button
													className="login100-form-btn"
													type="text"
													onClick={e => actions.login(e, this.props.history)}>
													Login
												</button>
											</div>
										</div>
										{!!store.alert && (
											<div className="form-left rounded-pill mt-3" style={style1}>
												<p className="text-1 text-center" style={style2}>
													Usuario o Contraseña Incorrecto
												</p>
											</div>
										)}
										{!!store.noTeacherDayWork && (
											<div className="form-left rounded-pill mt-3 px-5" style={style1}>
												<p className="text-1 text-center" style={style2}>
													¡¡¡Upsss no puedes iniciar sesion por dos razones: El dia de hoy no
													te toca servir o no tienes dia servicio asignado en tu perfil.
													Contacta al administraror de la app!!!
												</p>
											</div>
										)}

										<div className="flex-col-c p-t-50">
											<Link to="createFamily" className="txt2">
												Crea tu perfil como Apoderad@
											</Link>
										</div>

										<div className="txt1 text-center p-t-54 p-b-3">
											<span>Siguenos en nuestras redes sociales</span>
										</div>

										<div className="flex-c-m">
											<a href="#" className="login100-social-item bg1">
												<i className="fa fa-facebook" />
											</a>

											<a href="#" className="login100-social-item bg2">
												<i className="fa fa-twitter" />
											</a>

											<a href="#" className="login100-social-item bg3">
												<i className="fa fa-google" />
											</a>
										</div>
									</div>
								</div>
							</div>

							<div id="dropDownSelect1" />
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

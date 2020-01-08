import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class RolesForm extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<div className="container mt-3">
								<div className="row ">
									<div className="col pr-1">
										<div className="form-group ">
											<label htmlFor="exampleFormControlInput1">Nombre</label>
											<input
												type="text"
												className="form-control"
												id="exampleFormControlInput1"
												value={store.usuario.name}
												name="name"
												onChange={e => actions.handleChangeUsuario(e)}
												required
											/>
										</div>
									</div>
									<div className="col pl-1">
										<div className="form-group pl-1">
											<label htmlFor="exampleFormControlInput1">Rut</label>
											<input
												type="text"
												className="form-control"
												id="exampleFormControlInput1"
												value={store.usuario.rut}
												name="rut"
												onChange={e => actions.handleChangeUsuario(e)}
												required
											/>
										</div>
									</div>
								</div>

								<div className="row ">
									<div className="col pr-1">
										<div className="form-group">
											<label htmlFor="exampleFormControlInput1">Telefono</label>
											<input
												type="text"
												className="form-control"
												id="exampleFormControlInput1"
												value={store.usuario.phone}
												name="phone"
												onChange={e => actions.handleChangeUsuario(e)}
												required
											/>
										</div>
									</div>
									<div className="col pl-1">
										<div className="form-group">
											<label htmlFor="exampleFormControlInput1">Email</label>
											<input
												type="email"
												className="form-control"
												id="exampleFormControlInput1"
												value={store.usuario.email}
												name="email"
												onChange={e => actions.handleChangeUsuario(e)}
												required
											/>
										</div>
									</div>
								</div>

								{!!store.selectRol && (
									<div className="form-group ">
										<label htmlFor="exampleFormControlSelect1">Seleccionar Rol</label>
										<select
											className="form-control"
											id="exampleFormControlSelect1"
											value={store.usuario.rol}
											name="rol"
											onChange={e => actions.handleChangeUsuario(e)}
											required>
											<option>Elige una opcion...</option>
											<option>Administrador</option>
											<option>Profesor</option>
											<option>Check In</option>
										</select>
									</div>
								)}

								<div className="form-group ">
									<label htmlFor="exampleFormControlInput1">Contraseña</label>
									<input
										type="password"
										className="form-control"
										id="exampleFormControlInput1"
										value={store.usuario.password}
										name="password"
										onChange={e => actions.handleChangeUsuario(e)}
										disabled={store.showPasswoord}
										required
									/>
								</div>

								<div className="form-group">
									<label htmlFor="exampleFormControlInput1">Repetir Contraseña</label>
									<input
										type="password"
										className="form-control"
										id="exampleFormControlInput1"
										value={store.usuario.rPassword}
										name="rPassword"
										onChange={e => actions.handleChangeUsuario(e)}
										disabled={store.showPasswoord}
										required
									/>
								</div>
							</div>

							{!!store.rol && (
								<div className="alert alert-danger" role="alert">
									Elige un Rol correcto
								</div>
							)}
							{!!store.contraseña && (
								<div className="alert alert-danger" role="alert">
									Contraseña incorrecta o no coinciden.
								</div>
							)}
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

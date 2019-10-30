import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class RolesForm extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<div className="container">
								<div className="row">
									<div className="col">
										<div className="form-group">
											<label htmlFor="exampleFormControlInput1">Nombre</label>
											<input
												type="text"
												className="form-control"
												id="exampleFormControlInput1"
												value={store.usuario.nombre}
												name="nombre"
												onChange={e => actions.handleChangeUsuario(e)}
												required
											/>
										</div>
									</div>
									<div className="col">
										<div className="form-group">
											<label htmlFor="exampleFormControlInput1">Apellido</label>
											<input
												type="text"
												className="form-control"
												id="exampleFormControlInput1"
												value={store.usuario.apellido}
												name="apellido"
												onChange={e => actions.handleChangeUsuario(e)}
												required
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col">
										<div className="form-group">
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
									<div className="col">
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
							</div>
							<div className="form-group">
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

							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Contraseña</label>
								<input
									type="password"
									className="form-control"
									id="exampleFormControlInput1"
									value={store.usuario.contraseña}
									name="contraseña"
									onChange={e => actions.handleChangeUsuario(e)}
									required
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Repetir Contraseña</label>
								<input
									type="password"
									className="form-control"
									id="exampleFormControlInput1"
									value={store.usuario.rContraseña}
									name="rContraseña"
									onChange={e => actions.handleChangeUsuario(e)}
									required
								/>
							</div>
							{!!store.rol && (
								<div className="alert alert-danger" role="alert">
									Elige un Rol correcto
								</div>
							)}
							{!!store.contraseña && (
								<div className="alert alert-danger" role="alert">
									Contraseñas no coinciden.
								</div>
							)}
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

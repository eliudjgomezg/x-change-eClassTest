import React, { Fragment } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { RolesForm } from "../rolesComponent/rolesForm";
import { RolesList } from "../rolesComponent/rolesList";

export class Roles extends React.Component {
	render() {
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<form onSubmit={e => actions.setUsuarios(e)}>
								<div className="container">
									<div className="row">
										<div className="col">
											<h1 className="m-0 p-0">Roles</h1>
										</div>
										<div className="col">
											<button
												type="button"
												className="btn btn-primary mt-2  float-right"
												data-toggle="modal"
												data-target="#exampleModalScrollablexx"
												onClick={() => actions.setClassRoomInRole()}>
												Agregar usuario
											</button>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<div className="input-group mb-1 mt-2">
												<input
													type="text"
													className="form-control"
													aria-label="Text input with dropdown button"
													placeholder="Filtrar por palabra clave"
													name="filterByWord"
													value={store.filterByWord}
													onChange={e => actions.filterByWord(e)}
												/>
												<div className="input-group-append">
													<button
														className="btn btn-outline-secondary dropdown-toggle"
														type="button"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false">
														Filtrar
													</button>
													<div className="dropdown-menu">
														<a
															className="dropdown-item"
															href="#"
															onClick={e => actions.roles(e)}>
															Todos los roles
														</a>
														<a
															className="dropdown-item"
															href="#"
															name="Administrador"
															onClick={e => actions.filterByRole(e)}>
															Por Administrador
														</a>
														<a
															className="dropdown-item"
															href="#"
															name="Profesor"
															onClick={e => actions.filterByRole(e)}>
															Por Profesores
														</a>
														<a
															className="dropdown-item"
															href="#"
															name="Check In"
															onClick={e => actions.filterByRole(e)}>
															Por Check In
														</a>
														<a
															className="dropdown-item"
															href="#"
															name="Apoderado"
															onClick={e => actions.filterByRole(e)}>
															Por Apoderado
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div
									className="modal fade"
									id="exampleModalScrollablexx"
									tabIndex="-1"
									role="dialog"
									aria-labelledby="exampleModalScrollableTitle"
									aria-hidden="true">
									<div className="modal-dialog modal-dialog-scrollable" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalScrollableTitle">
													Agregar Usuarios
												</h5>
												<button
													type="button"
													className="close"
													data-dismiss="modal"
													aria-label="Close"
													onClick={e => actions.deleteAddUsuarios(e)}>
													<span aria-hidden="true">&times;</span>
												</button>
											</div>

											<div className="modal-body">
												<RolesForm />
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-dismiss="modal"
													onClick={e => actions.deleteAddUsuarios(e)}>
													Cerrar
												</button>
												<button type="submit" className="btn btn-primary">
													Guardar
												</button>
											</div>
										</div>
									</div>
								</div>
							</form>
						);
					}}
				</Context.Consumer>
				<div className="container">
					<RolesList />
				</div>
			</Fragment>
		);
	}
}

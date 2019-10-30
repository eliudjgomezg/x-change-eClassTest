import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { RolesForm } from "../rolesComponent/rolesForm";

export class RolesList extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.usuarios.length > 0) {
						return store.usuarios.map((item, i) => {
							return (
								<Fragment key={i}>
									<div className=" card-body border border-primary container">
										<div className="row">
											<div className="col-8">
												Familia: {item.nombre} {item.apellido}
											</div>
											<div className="col-2 ml-0 mr-0">
												<button
													type="button"
													className="btn btn-primary "
													data-toggle="modal"
													data-target="#exampleModal">
													Eliminar
												</button>
											</div>
											<div className="col-2 ml-0 mr-0">
												<button
													type="button"
													className="btn btn-primary "
													data-toggle="modal"
													data-target="#exampleModalScrollable1"
													onClick={e => actions.editRoles(e, item, i)}>
													Ver
												</button>
											</div>
										</div>
									</div>

									<div
										className="modal fade"
										id="exampleModalScrollable1"
										tabIndex="-1"
										role="dialog"
										aria-labelledby="exampleModalScrollableTitle"
										aria-hidden="true">
										<div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalScrollableTitle">
														Editar Usuario
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
														Cancelar
													</button>
													<button
														type="button"
														className="btn btn-primary"
														onClick={e => actions.setUsuarios(e)}>
														Guardar
													</button>
												</div>
											</div>
										</div>
									</div>

									<div
										className="modal fade"
										id="exampleModal"
										tabIndex="-1"
										role="dialog"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true">
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalLabel">
														ALERTA!!!
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													¿Estas Segur@ que deseas eliminar este usuario?
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-secondary"
														data-dismiss="modal">
														Cancelar
													</button>
													<button
														type="button"
														className="btn btn-primary"
														onClick={e => actions.deleteUsuarios(e, item, i)}
														data-dismiss="modal">
														Eliminar
													</button>
												</div>
											</div>
										</div>
									</div>
								</Fragment>
							);
						});
					}
				}}
			</Context.Consumer>
		);
	}
}

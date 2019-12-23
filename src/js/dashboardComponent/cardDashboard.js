import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class Carddashboard extends React.Component {
	render() {
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<Fragment>
								<div className="row">
									<div className="col">
										<button
											className="btn btn-primary float-right mr-5 "
											onClick={e => actions.formModalDashboard(e)}>
											Agregar Sala
										</button>
									</div>
								</div>

								<div className="input-group mb-1 mt-2">
									<input
										type="text"
										className="form-control"
										aria-label="Text input with dropdown button"
										placeholder="Filtrar por palabra clave"
										name="filterByWord"
										value={store.filterByWord}
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
											<a className="dropdown-item" href="#" onClick={e => actions.dashboard(e)}>
												Todas las Aulas
											</a>
											<a className="dropdown-item" href="#" onClick={e => actions.filterByDay(e)}>
												Por dia de uso
											</a>
										</div>
									</div>
								</div>
								{!!store.alert && (
									<div className="alert alert-danger" role="alert">
										<p className="text-center">¡¡¡No hay Aulas asignadas para el dia de hoy!!!</p>
									</div>
								)}
							</Fragment>
						);
					}}
				</Context.Consumer>

				<div className="row">
					<div className="card card-body py-2 mt-2">
						<ul className="list-group">
							<Context.Consumer>
								{({ store, actions }) => {
									if (store.cardArray.length > 0) {
										return store.cardArray.map((item, i) => {
											return (
												<Fragment key={i}>
													<div className="container">
														<div className="row">
															<div className="col pl-1 d-inline">
																<li className="list-group-item">
																	<div className="btn btn-primary">
																		{item.classroomName}
																	</div>{" "}
																	/ CAPACIDAD: {item.sonsInClassroom} DE{" "}
																	{item.capacity} / DIA DE USO: {item.dayUse}
																	<button
																		type="button"
																		className="btn btn-primary float-right"
																		data-toggle="modal"
																		data-target="#exampleModal"
																		onClick={e =>
																			actions.indextodeleteClassroon(item)
																		}>
																		Eliminar
																	</button>
																	<a
																		href="#"
																		className="btn btn-primary float-right mr-2"
																		data-toggle="modal"
																		data-target="#exampleModalScrollable"
																		onClick={() => actions.setEditCard(item, i)}>
																		Editar
																	</a>
																</li>
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
																	¿Estas Segur@ que deseas eliminar el aula?
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
																		onClick={e => actions.deleteCard()}
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
						</ul>
					</div>
				</div>
			</Fragment>
		);
	}
}

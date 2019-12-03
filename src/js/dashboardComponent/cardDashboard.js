import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class Carddashboard extends React.Component {
	render() {
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.cardArray.length > 0) {
							return store.cardArray.map((item, i) => {
								return (
									<div className="col-3" key={i}>
										<div className="card-body">
											<h5 className="card-title btn btn-primary">{item.classroomName}</h5>
											<p className="card-text">
												Rango de Edades: De {item.startAgeRank} a {item.finaltAgeRank} años
											</p>
											<p className="card-text">Capacidad: {item.capacity}</p>
											<p className="card-text">Dia de uso: {item.dayUse}</p>
											<p className="card-text">
												Horario de uso: Desde {item.startScheduleRank}, hasta{" "}
												{item.finalScheduleRank}
											</p>

											<a
												href="#"
												className="btn btn-primary"
												data-toggle="modal"
												data-target="#exampleModalScrollable"
												onClick={() => actions.setEditCard(item, i)}>
												Editar
											</a>

											<button
												type="button"
												className="btn btn-primary"
												data-toggle="modal"
												data-target="#exampleModal"
												onClick={e => actions.indextodeleteClassroon(item)}>
												Eliminar
											</button>

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
										</div>
									</div>
								);
							});
						}
					}}
				</Context.Consumer>
			</Fragment>
		);
	}
}

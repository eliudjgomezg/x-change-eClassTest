import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { DeleteModal } from "../dashboardComponent/deleteModal";

export class Carddashboard extends React.Component {
	render() {
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.cardArray.length > 0) {
							return store.cardArray.map((item, i) => {
								return (
									<div key={i} className="card-body">
										<h5 className="card-title btn btn-primary">{item.nombreDeSala}</h5>
										<p className="card-text">
											Rango de Edades: Desde {item.rangoDesde} años, hasta {item.rangoHasta} años
										</p>
										<p className="card-text">Capacidad: {item.capacidad}</p>
										<p className="card-text">Dia de uso: {item.diaUso}</p>
										<p className="card-text">
											Horario de uso: Desde {item.horarioDesde}, hasta {item.horarioHasta}
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
											onClick={e => actions.indextodeleteClassroon(i)}>
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
								);
							});
						}
					}}
				</Context.Consumer>
			</Fragment>
		);
	}
}

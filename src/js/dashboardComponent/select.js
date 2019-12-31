import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class Select extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="card card-body py-2 mt-2">
					<ul className="list-group">
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.selectUSuarios.length > 0) {
									return store.selectUSuarios.map((item, i) => {
										return (
											<Fragment key={i}>
												<div className="container">
													<div className="row">
														<div className="col pl-1 d-inline">
															<li className="list-group-item">
																{item.name}
																<button
																	type="button"
																	className="btn btn-primary float-right"
																	onClick={e => actions.addTeacher(e, item)}
																	disabled={item.selected}>
																	Agregar
																</button>
																<button
																	type="button"
																	className="btn btn-primary float-right mr-2"
																	onClick={e => actions.removeTeacher(e, item)}
																	disabled={item.notSelected}>
																	Quitar
																</button>
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
		);
	}
}

import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class ListHijos extends React.Component {
	render() {
		return (
			<Fragment>
				<p>Hijos agregados:</p>
				<div className="card card-body">
					<ul className="list-group">
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.hijos.length > 0) {
									return store.hijos.map((item, i) => {
										return (
											<Fragment key={i}>
												<div>
													<div className="row">
														<div className="col-8">
															<li className="list-group-item">{item.sonName}</li>
														</div>
														<div className="col-2   ">
															<button
																type="button"
																className="btn btn-primary "
																onClick={() => actions.editHijo(item, i)}
																data-toggle="collapse"
																data-target="#collapseExample"
																aria-expanded="false"
																aria-controls="collapseExample">
																Editar
															</button>
														</div>
														<div className="col-2 pl-0">
															<button
																type="button"
																className="btn btn-primary "
																data-toggle="modal"
																data-target="#exampleModal2"
																onClick={e => actions.indextodeleteClassroon(item, i)}>
																Eliminar
															</button>
														</div>
													</div>
												</div>

												<div
													className="modal fade"
													id="exampleModal2"
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
																	aria-label="Close"
																	onClick={e => actions.deleteAddHijo(e)}>
																	<span aria-hidden="true">&times;</span>
																</button>
															</div>
															<div className="modal-body">
																¿Estas Segur@ que deseas eliminar este hij@?
															</div>
															<div className="modal-footer">
																<button
																	type="button"
																	className="btn btn-secondary"
																	data-dismiss="modal"
																	onClick={e => actions.deleteAddHijo(e)}>
																	Cancelar
																</button>
																<button
																	type="button"
																	className="btn btn-primary"
																	onClick={e => actions.deleteHijo(e, item, i)}
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
			</Fragment>
		);
	}
}

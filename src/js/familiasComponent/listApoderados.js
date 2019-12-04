import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class ListApoderados extends React.Component {
	render() {
		return (
			<Fragment>
				<p>Apoderados agregados:</p>
				<div className="card card-body py-2">
					<ul className="list-group">
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.apoderados.length > 0) {
									return store.apoderados.map((item, i) => {
										return (
											<Fragment key={i}>
												<div>
													<div className="row">
														<div className="col-8">
															<li className="list-group-item">{item.parentName}</li>
														</div>
														<div className="col-2">
															<button
																type="button"
																className="btn btn-primary"
																onClick={() => actions.editApoderado(item, i)}
																data-toggle="collapse"
																data-target="#collapseExample"
																aria-expanded="false"
																aria-controls="collapseExample">
																Editar
															</button>
														</div>
														<div className="col-2">
															<button
																type="button"
																className="btn btn-primary "
																data-toggle="modal"
																data-target="#exampleModal1"
																onClick={e => actions.indextodeleteClassroon(item, i)}>
																Eliminar
															</button>
														</div>
													</div>
												</div>

												<div
													className="modal fade"
													id="exampleModal1"
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
																	onClick={e => actions.deleteAddapoderado(e)}>
																	<span aria-hidden="true">&times;</span>
																</button>
															</div>
															<div className="modal-body">
																¿Estas Segur@ que deseas eliminar este apoderad@?
															</div>
															<div className="modal-footer">
																<button
																	type="button"
																	className="btn btn-secondary"
																	data-dismiss="modal"
																	onClick={e => actions.deleteAddFamilia(e)}>
																	Cancelar
																</button>
																<button
																	type="button"
																	className="btn btn-primary"
																	onClick={e => actions.deleteApoderado(e, item, i)}
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

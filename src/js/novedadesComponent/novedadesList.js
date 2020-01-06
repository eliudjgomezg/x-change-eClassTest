import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class NovedadesList extends React.Component {
	render() {
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.novedadesArray.length > 0) {
							return store.novedadesArray.map((item, i) => {
								return (
									<Fragment key={i}>
										<div className="container">
											<div className=" card card-body py-1 px-2 mb-1">
												<div className="row">
													<div className="col-9">
														Nombre: {item.name} /Rol: {item.rol} /Fecha: {item.date}
													</div>
													<div className="col-3">
														<button
															className="btn btn-primary float-right mr-2"
															data-toggle="modal"
															data-target="#exampleModalScrollablenext"
															onClick={e => actions.news(e, item)}>
															Ver
														</button>
													</div>
												</div>
											</div>
										</div>

										<div
											className="modal fade"
											id="exampleModalScrollablenext"
											tabIndex="-1"
											role="dialog"
											aria-labelledby="exampleModalScrollableTitle"
											aria-hidden="true">
											<div className="modal-dialog modal-dialog-scrollable" role="document">
												<div className="modal-content">
													<div className="modal-header">
														<h5 className="modal-title" id="exampleModalScrollableTitle">
															Novedades
														</h5>
														<button
															type="button"
															className="close"
															data-dismiss="modal"
															aria-label="Close"
															onClick={e => actions.deleteNovedad(e)}>
															<span aria-hidden="true">&times;</span>
														</button>
													</div>

													<div className="modal-body">
														<div className="form-group">
															<label htmlFor="exampleFormControlTextarea1">
																Novedad:
															</label>
															<textarea
																className="form-control"
																id="exampleFormControlTextarea1"
																rows="5"
																name="news"
																value={store.news}
																readOnly
																required
															/>
														</div>
													</div>
													<div className="modal-footer">
														<button
															type="button"
															className="btn btn-secondary"
															data-dismiss="modal"
															onClick={e => actions.deleteNovedad(e, item)}>
															Aceptar
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
			</Fragment>
		);
	}
}

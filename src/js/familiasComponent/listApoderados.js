import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class ListApoderados extends React.Component {
	render() {
		return (
			<Fragment>
				<p>Apoderados agregados:</p>

				<Context.Consumer>
					{({ store, actions }) => {
						if (store.apoderados.length > 0) {
							return store.apoderados.map((item, i) => {
								return (
									<Fragment key={i}>
										<div className="card card-body py-1 px-2 mb-2 ">
											<div className="row">
												<div className="col-12">
													<div className="col justify-content-center">{item.parentName}</div>
												</div>
											</div>
											<div className="container">
												<div className="row mt-1 mb-1 ">
													<div className="col-lg-5 col-sm-12 mb-1 justify-content-center">
														<button
															className="btn btn-primary container"
															type="button"
															data-toggle="collapse"
															data-target="#collapseExample"
															aria-expanded="false"
															aria-controls="collapseExample"
															onClick={() => actions.editApoderado(item, i)}>
															EDITAR
														</button>
													</div>
													<div className="col-lg-5 col-sm-12 justify-content-center">
														<button
															className="btn btn-secondary container"
															onClick={e => actions.indextodeleteClassroon(item, i)}
															type="button"
															data-toggle="modal"
															data-target="#exampleModal1">
															ELIMINAR
														</button>
													</div>
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
			</Fragment>
		);
	}
}

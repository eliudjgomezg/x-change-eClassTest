import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class ListHijos extends React.Component {
	render() {
		return (
			<Fragment>
				<p>Hijos agregados:</p>

				<Context.Consumer>
					{({ store, actions }) => {
						if (store.hijos.length > 0) {
							return store.hijos.map((item, i) => {
								return (
									<Fragment key={i}>
										<div className="card card-body py-1 px-2 mb-2 ">
											<div className="row">
												<div className="col-12">
													<div className="col justify-content-center">{item.sonName}</div>
												</div>
											</div>
											<div className="container">
												<div className="row mt-1 mb-1 ">
													<div className="col-lg-5 col-sm-12 mb-1 justify-content-center">
														<button
															className="btn btn-primary container"
															type="button"
															onClick={() => actions.editHijo(item, i)}
															data-toggle="collapse"
															data-target="#collapseExample"
															aria-expanded="false"
															aria-controls="collapseExample">
															EDITAR
														</button>
													</div>
													<div className="col-lg-5 col-sm-12 justify-content-center">
														<button
															className="btn btn-secondary container"
															data-toggle="modal"
															data-target="#exampleModal2"
															type="button"
															onClick={e => actions.indextodeleteClassroon(item, i)}>
															ELIMINAR
														</button>
													</div>
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
			</Fragment>
		);
	}
}

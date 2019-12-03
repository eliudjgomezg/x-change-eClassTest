import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class ModalNovedades extends React.Component {
	render() {
		let verticalPosition = {
			margin: "0",
			position: "absolute",
			top: "87%",
			left: "90%"
		};
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<button
								type="button"
								className="btn btn-primary"
								data-toggle="modal"
								data-target="#exampleModalScrollable"
								style={verticalPosition}>
								Agregar Novedad
							</button>

							<div
								className="modal fade"
								id="exampleModalScrollable"
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
										<form onSubmit={e => actions.setNovedad(e)}>
											<div className="modal-body">
												<div className="form-group">
													<label htmlFor="exampleFormControlTextarea1">Ingresa Novedad</label>
													<textarea
														className="form-control"
														id="exampleFormControlTextarea1"
														rows="3"
														onChange={e => actions.getData(e)}
														name="news"
														value={store.news}
														required
													/>
												</div>
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-dismiss="modal"
													onClick={e => actions.deleteNovedad(e)}>
													Cerrar
												</button>
												<button type="submit" className="btn btn-primary">
													Guardar
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

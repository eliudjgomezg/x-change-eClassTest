import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class AddHijos extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<p>
								<button
									className="btn btn-primary"
									type="button"
									data-toggle="collapse"
									data-target="#collapseExample1"
									aria-expanded="false"
									aria-controls="collapseExample">
									Agregar Hijo
								</button>
							</p>
							<form onSubmit={e => actions.setHijo(e)}>
								<div className="collapse" id="collapseExample1">
									<div className="card card-body">
										<div className="container">
											<div className="row">
												<div className="col">
													<label htmlFor="exampleFormControlInput1">Nombre:</label>
													<input
														className="form-control"
														id="exampleFormControlInput1"
														onChange={e => actions.getData(e)}
														value={store.nombreHijo}
														name="nombreHijo"
														required
													/>
												</div>
												<div className="col">
													<label htmlFor="exampleFormControlInput1">Apellido:</label>
													<input
														className="form-control"
														id="exampleFormControlInput1"
														onChange={e => actions.getData(e)}
														value={store.apellidoHijo}
														name="apellidoHijo"
														required
													/>
												</div>
												<div className="col">
													<label htmlFor="exampleFormControlInput1">F. Nacimiento:</label>
													<input
														className="form-control"
														id="exampleFormControlInput1"
														onChange={e => actions.getData(e)}
														value={store.fnacimientoHijo}
														name="fnacimientoHijo"
														required
													/>
												</div>
											</div>

											<div className="row">
												<div className="col">
													<label htmlFor="exampleFormControlTextarea1">Observaciones:</label>
													<textarea
														className="form-control"
														id="exampleFormControlTextarea1"
														rows="3"
														onChange={e => actions.getData(e)}
														value={store.observacionesHijo}
														name="observacionesHijo"
														required
													/>
												</div>
											</div>
										</div>
									</div>

									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary"
											onClick={e => actions.deleteAddHijo(e)}
											data-toggle="collapse"
											data-target="#collapseExample1"
											aria-expanded="false"
											aria-controls="collapseExample">
											Cancelar
										</button>
										<button type="submit" className="btn btn-primary">
											Guardar
										</button>
									</div>
								</div>
							</form>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

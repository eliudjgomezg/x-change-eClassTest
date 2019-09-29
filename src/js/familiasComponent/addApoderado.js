import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class AddApoderado extends React.Component {
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
									data-target="#collapseExample"
									aria-expanded="false"
									aria-controls="collapseExample">
									Agregar Apoderado
								</button>
							</p>
							<form onSubmit={e => actions.setApoderado(e)}>
								<div className="collapse" id="collapseExample">
									<div className="card card-body">
										<div className="container">
											<div className="row">
												<div className="col">
													<label htmlFor="exampleFormControlInput1">Nombre:</label>
													<input
														className="form-control"
														id="exampleFormControlInput1"
														onChange={e => actions.getData(e)}
														value={store.nombreApoderado}
														name="nombreApoderado"
														required
													/>
												</div>
												<div className="col">
													<label htmlFor="exampleFormControlInput1">Apellido:</label>
													<input
														className="form-control"
														id="exampleFormControlInput1"
														onChange={e => actions.getData(e)}
														value={store.apellidoApoderado}
														name="apellidoApoderado"
														required
													/>
												</div>
											</div>
											<div className="row">
												<div className="col">
													<label htmlFor="exampleFormControlInput1">Rut:</label>
													<input
														className="form-control"
														id="exampleFormControlInput1"
														onChange={e => actions.getData(e)}
														value={store.rutApoderado}
														name="rutApoderado"
														required
													/>
												</div>
												<div className="col">
													<label htmlFor="exampleFormControlInput1">Telefono:</label>
													<input
														className="form-control"
														id="exampleFormControlInput1"
														onChange={e => actions.getData(e)}
														value={store.telefonoApoderado}
														name="telefonoApoderado"
														required
													/>
												</div>
											</div>
											<div className="row">
												<div className="col">
													<label htmlFor="exampleFormControlInput1">Email:</label>
													<input
														className="form-control"
														id="exampleFormControlInput1"
														onChange={e => actions.getData(e)}
														name="emailApoderado"
														value={store.emailApoderado}
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
											data-toggle="collapse"
											data-target="#collapseExample"
											aria-expanded="false"
											aria-controls="collapseExample"
											onClick={e => actions.deleteAddApoderado(e)}>
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

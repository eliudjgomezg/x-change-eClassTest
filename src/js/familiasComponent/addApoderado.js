import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class AddApoderado extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<form onSubmit={e => actions.setApoderado(e)}>
								<p>Agregar Apoderado</p>
								<div className="card card-body">
									<div className="container">
										<div className="row">
											<div className="col">
												<label htmlFor="exampleFormControlInput1">Nombre:</label>
												<input
													className="form-control"
													id="exampleFormControlInput1"
													onChange={e => actions.handleChangeApoderado(e)}
													value={store.apoderado.nombre}
													name="nombre"
													required
												/>
											</div>
											<div className="col">
												<label htmlFor="exampleFormControlInput1">Apellido:</label>
												<input
													className="form-control"
													id="exampleFormControlInput1"
													onChange={e => actions.handleChangeApoderado(e)}
													value={store.apoderado.apellido}
													name="apellido"
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
													onChange={e => actions.handleChangeApoderado(e)}
													value={store.apoderado.rut}
													name="rut"
													required
												/>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<label htmlFor="exampleFormControlInput1">Telefono:</label>
												<input
													className="form-control"
													id="exampleFormControlInput1"
													onChange={e => actions.handleChangeApoderado(e)}
													value={store.apoderado.telefono}
													name="telefono"
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
													onChange={e => actions.handleChangeApoderado(e)}
													name="email"
													value={store.apoderado.email}
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
							</form>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

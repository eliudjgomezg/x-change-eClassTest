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
								<div className="card card-body px-0 py-2">
									<div className="container">
										<div className="row">
											<div className="col">
												<label htmlFor="exampleFormControlInput1">Nombre Completo:</label>
												<input
													className="form-control"
													id="exampleFormControlInput1"
													onChange={e => actions.handleChangeApoderado(e)}
													value={store.apoderado.parentName}
													name="parentName"
													required
												/>
											</div>

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

											<div className="col">
												<label htmlFor="exampleFormControlInput1">Telefono:</label>
												<input
													className="form-control"
													id="exampleFormControlInput1"
													onChange={e => actions.handleChangeApoderado(e)}
													value={store.apoderado.phone}
													name="phone"
													required
												/>
											</div>

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

										<div className="row float-right mt-2 ">
											<button
												type="button"
												className="btn btn-secondary "
												data-toggle="collapse"
												data-target="#collapseExample"
												aria-expanded="false"
												aria-controls="collapseExample"
												onClick={e => actions.deleteAddApoderado(e)}>
												Cancelar
											</button>
											<button type="submit" className="btn btn-primary ml-1 mr-3">
												Guardar
											</button>
										</div>
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

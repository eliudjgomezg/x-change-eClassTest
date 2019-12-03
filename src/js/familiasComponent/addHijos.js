import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class AddHijos extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<form onSubmit={e => actions.setHijo(e)}>
								<p>Agregar Hijos</p>
								<div className="card card-body">
									<div className="container">
										<div className="row">
											<div className="col">
												<label htmlFor="exampleFormControlInput1">Nombre Completo:</label>
												<input
													className="form-control"
													id="exampleFormControlInput1"
													onChange={e => actions.handleChangeHijo(e)}
													value={store.hijo.sonName}
													name="sonName"
													required
												/>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<label htmlFor="exampleFormControlInput1">F. Nacimiento:</label>
												<input
													className="form-control"
													id="exampleFormControlInput1"
													onChange={e => actions.handleChangeHijo(e)}
													value={store.hijo.birthDate}
													name="birthDate"
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
													rows="4"
													onChange={e => actions.handleChangeHijo(e)}
													value={store.hijo.notes}
													name="notes"
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
										onClick={e => actions.deleteAddHijo(e)}>
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

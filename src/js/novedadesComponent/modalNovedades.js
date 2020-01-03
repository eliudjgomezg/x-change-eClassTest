import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class ModalNovedades extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<div className="col mt-2">
								<h1 className="m-0 p-0">Novedades</h1>
							</div>
							<div className="col">
								<button
									type="button"
									className="btn btn-primary float-right mr-1 mt-2"
									data-toggle="modal"
									data-target="#exampleModalScrollable">
									Agregar Novedad
								</button>
							</div>
							<div className="container">
								<div className="input-group mb-1 mt-2">
									<input
										type="text"
										className="form-control"
										aria-label="Text input with dropdown button"
										placeholder="Filtrar por palabra clave"
									/>
									<div className="input-group-append">
										<button
											className="btn btn-outline-secondary dropdown-toggle"
											type="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											Filtrar
										</button>
										<div className="dropdown-menu">
											<a className="dropdown-item" href="#" onClick={e => actions.novedades(e)}>
												Todas las Novedades
											</a>
										</div>
									</div>
								</div>
							</div>
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
													Cancelar
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

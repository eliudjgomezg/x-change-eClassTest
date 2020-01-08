import React, { Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Select extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className=" float-right card card-body ">
							<p className="card card-body p-1">
								<strong>Profesores Disponibles:</strong>
							</p>
							<div id="global">
								<div id="mensajes">
									<Context.Consumer>
										{({ store, actions }) => {
											if (store.selectUSuarios.length > 0) {
												return store.selectUSuarios.map((item, i) => {
													return (
														<div className="container" key={i}>
															<div className=" card card-body py-1 px-2 mb-1">
																<div className="row">
																	<div className="col-9">Profesor: {item.name}</div>
																	<div className="col-3 ">
																		<button
																			type="button"
																			className="btn btn-primary float-right"
																			onClick={e => actions.addTeacher(item, i)}>
																			Agregar
																		</button>
																	</div>
																</div>
															</div>
														</div>
													);
												});
											}
										}}
									</Context.Consumer>
								</div>
							</div>
						</div>
					</div>

					<div className="col-6">
						<div className=" float-right card card-body ">
							<p className="card card-body p-1">
								<strong>Profesores Seleccionados:</strong>
							</p>
							<div id="global">
								<div id="mensajes">
									<Context.Consumer>
										{({ store, actions }) => {
											if (store.selectedUsuarios.length > 0) {
												return store.selectedUsuarios.map((item, i) => {
													return (
														<div className="container" key={i}>
															<div className=" card card-body py-1 px-2 mb-1">
																<div className="row">
																	<div className="col-9">Profesor: {item.name}</div>
																	<div className="col-3 ">
																		<button
																			type="button"
																			className="btn btn-primary float-right"
																			onClick={e =>
																				actions.removeTeacher(item, i)
																			}>
																			Quitar
																		</button>
																	</div>
																</div>
															</div>
														</div>
													);
												});
											}
										}}
									</Context.Consumer>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

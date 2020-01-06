import React, { Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class Select extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
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
												{if ( store.usuarios.length > 0){
													store.usuarios.map((item, i) => {
														return (
															<div className="container" key= {i}>
																<div className=" card card-body py-1 px-2 mb-1">
																	<div className="row">
																		<div className="col-9">Familia: {item.name}</div>
																		<div className="col-3 ">
																			<button
																				type="button"
																				className="btn btn-primary float-right"
																				data-toggle="modal"
																				data-target="#exampleModal2">
																				Agregar
																			</button>
																		</div>
																	</div>
																</div>
															</div>
														);
													})
												}}
											</div>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className=" card card-body ">
										<p className="card card-body p-1">
											<strong>Profesores Seleccionados:</strong>
										</p>
										<div id="global">
											<div id="mensajes" />
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

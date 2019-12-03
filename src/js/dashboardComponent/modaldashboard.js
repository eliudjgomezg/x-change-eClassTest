import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FormModalDashboard } from "../dashboardComponent/formModalDashboard";

export class Modaldashboard extends React.Component {
	render() {
		let verticalPosition = {
			margin: "0",
			position: "absolute",
			top: "87%",
			left: "90%"
		};

		return (
			<Fragment>
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
									Agregar Sala
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
											<form onSubmit={e => actions.setCard(e)}>
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalScrollableTitle">
														Agregar Sala
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
														onClick={e => actions.deleteForm(e)}>
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													<FormModalDashboard />
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-secondary"
														data-dismiss="modal"
														onClick={e => actions.deleteForm(e)}>
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
			</Fragment>
		);
	}
}

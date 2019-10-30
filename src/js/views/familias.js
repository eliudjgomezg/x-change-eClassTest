import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { FormFamilias } from "../familiasComponent/formFamilias";
import { FamiliasList } from "../familiasComponent/familiasList";

export class Familias extends React.Component {
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
							<FamiliasList />
							<button
								type="button"
								className="btn btn-primary"
								data-toggle="modal"
								data-target="#exampleModalScrollable"
								style={verticalPosition}>
								Agregar Familia
							</button>

							<div
								className="modal fade "
								id="exampleModalScrollable"
								tabIndex="-1"
								role="dialog"
								aria-labelledby="exampleModalScrollableTitle"
								aria-hidden="true">
								<div className="modal-dialog modal-dialog-scrollable modal-lg" role="document">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title" id="exampleModalScrollableTitle">
												Familias
											</h5>
											<button
												type="button"
												className="close"
												data-dismiss="modal"
												aria-label="Close"
												onClick={e => actions.deleteAddFamilia(e)}>
												<span aria-hidden="true">&times;</span>
											</button>
										</div>

										<div className="modal-body">
											<FormFamilias />
										</div>
										<div className="modal-footer">
											<button
												type="button"
												className="btn btn-secondary"
												data-dismiss="modal"
												onClick={e => actions.deleteAddFamilia(e)}>
												Cerrar
											</button>
											<button
												type="button"
												className="btn btn-primary"
												onClick={e => actions.setFamilia(e)}>
												Guardar Familia
											</button>
										</div>
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

import React, { Fragment } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { RolesForm } from "../rolesComponent/rolesForm";
import { RolesList } from "../rolesComponent/rolesList";

export class Roles extends React.Component {
	render() {
		let verticalPosition = {
			margin: "0",
			position: "absolute",
			top: "87%",
			left: "90%"
		};
		return (
			<Fragment>
				<RolesList />
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<form onSubmit={e => actions.setUsuarios(e)}>
								<button
									type="button"
									className="btn btn-primary"
									data-toggle="modal"
									data-target="#exampleModalScrollablexx"
									style={verticalPosition}>
									Agregar usuario
								</button>

								<div
									className="modal fade"
									id="exampleModalScrollablexx"
									tabIndex="-1"
									role="dialog"
									aria-labelledby="exampleModalScrollableTitle"
									aria-hidden="true">
									<div className="modal-dialog modal-dialog-scrollable" role="document">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalScrollableTitle">
													Agregar Usuarios
												</h5>
												<button
													type="button"
													className="close"
													data-dismiss="modal"
													aria-label="Close"
													onClick={e => actions.deleteAddUsuarios(e)}>
													<span aria-hidden="true">&times;</span>
												</button>
											</div>

											<div className="modal-body">
												<RolesForm />
											</div>
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-dismiss="modal"
													onClick={e => actions.deleteAddUsuarios(e)}>
													Cerrar
												</button>
												<button type="submit" className="btn btn-primary">
													Guardar
												</button>
											</div>
										</div>
									</div>
								</div>
							</form>
						);
					}}
				</Context.Consumer>
			</Fragment>
		);
	}
}

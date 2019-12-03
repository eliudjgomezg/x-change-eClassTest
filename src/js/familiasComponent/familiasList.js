import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { VerForm } from "../familiasComponent/verForm";

export class FamiliasList extends React.Component {
	render() {
		let margin = { marginLeft: "10px" };
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.familias.length > 0) {
						return store.familias.map((item, i) => {
							return (
								<Fragment key={i}>
									<div className=" card-body border border-primary container">
										<div className="row">
											<div className="col-8">Familia: {item.familyName}</div>
											<div className="col-2 ml-0 mr-0">
												<button
													type="button"
													className="btn btn-primary "
													data-toggle="modal"
													data-target="#exampleModal"
													onClick={e => actions.indextodeleteClassroon(item)}>
													Eliminar
												</button>
											</div>
											<div className="col-2 ml-0 mr-0">
												<button
													type="button"
													className="btn btn-primary "
													onClick={e => actions.verFamilia(item)}>
													Ver
												</button>
											</div>
										</div>
									</div>

									<div
										className="modal fade"
										id="exampleModal"
										tabIndex="-1"
										role="dialog"
										aria-labelledby="exampleModalLabel"
										aria-hidden="true">
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalLabel">
														ALERTA!!!
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
													¿Estas Segur@ que deseas eliminar esta familia?
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-secondary"
														data-dismiss="modal"
														onClick={e => actions.deleteAddFamilia(e)}>
														Cancelar
													</button>
													<button
														type="button"
														className="btn btn-primary"
														onClick={e => actions.deleteFamilia(e, item, i)}
														data-dismiss="modal">
														Eliminar
													</button>
												</div>
											</div>
										</div>
									</div>
								</Fragment>
							);
						});
					}
				}}
			</Context.Consumer>
		);
	}
}

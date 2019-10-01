import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class ListApoderados extends React.Component {
	render() {
		return (
			<Fragment>
				<div className="card card-body">
					<p>Apoderados agregados:</p>
					<ul className="list-group">
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.apoderadoArray.length > 0) {
									return store.apoderadoArray.map((item, i) => {
										return (
											<div key={i}>
												<div className="row">
													<div className="col-8">
														<li className="list-group-item">
															{item.nombreApoderado + " " + item.apellidoApoderado}
														</li>
													</div>
													<div className="col-2">
														<button
															type="button"
															className="btn btn-primary"
															onClick={() => actions.EditApoderado(item, i)}
															data-toggle="collapse"
															data-target="#collapseExample"
															aria-expanded="false"
															aria-controls="collapseExample">
															Editar
														</button>
													</div>
													<div className="col-2">
														<button
															type="button"
															className="btn btn-primarybtn btn-primary"
															data-toggle="modal"
															data-target="#exampleModal1"
															onClick={() => actions.deleteApoderado(i)}>
															Eliminar
														</button>
													</div>
												</div>
											</div>
										);
									});
								}
							}}
						</Context.Consumer>
					</ul>
				</div>
			</Fragment>
		);
	}
}

import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class ListHijos extends React.Component {
	render() {
		return (
			<div className="card card-body">
				<p>Hijos agregados:</p>
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							if (store.familia.hijos.length > 0) {
								return store.familia.hijos.map((item, i) => {
									return (
										<Fragment key={i}>
											<li className="list-group-item">
												<div className="row">
													<div className="col-8">{item.nombre + " " + item.apellido}</div>
													<div className="col-2">
														<button
															type="button"
															className="btn btn-primary"
															onClick={() => actions.editHijo(item, i)}>
															Editar
														</button>
													</div>
													<div className="col-2">
														<button
															type="button"
															className="btn btn-primarybtn btn-primary"
															data-toggle="modal"
															data-target="#exampleModal1"
															onClick={() => actions.deleteHijo(i)}>
															Eliminar
														</button>
													</div>
												</div>
											</li>
										</Fragment>
									);
								});
							}
						}}
					</Context.Consumer>
				</ul>
			</div>
		);
	}
}

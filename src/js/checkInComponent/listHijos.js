import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class ListHijos extends React.Component {
	render() {
		return (
			<Fragment>
				<h1 className="text-center">Seleccionar Niñ@:</h1>
				<div className="card card-body">
					<ul className="list-group">
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.hijos.length > 0) {
									return store.hijos.map((item, i) => {
										return (
											<Fragment key={i}>
												<div>
													<div className="row">
														<div className="col-11">
															<li className="list-group-item">{item.sonName}</li>
														</div>
														<div className="col-1">
															<input
																className="flotar-right"
																type="checkbox"
																data-toggle="toggle"
																onChange={e => actions.pickSon(e, item)}
															/>
														</div>
													</div>
												</div>
											</Fragment>
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

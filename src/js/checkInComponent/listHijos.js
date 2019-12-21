import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { SelectClassroom } from "../checkInComponent/selectClassroom";

export class ListHijos extends React.Component {
	render() {
		return (
			<Fragment>
				<h1 className="text-center">Seleccionar Niñ@:</h1>
				<div className="card card-body pr-0 pl-5">
					<ul className="list-group">
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.hijos.length > 0) {
									return store.hijos.map((item, i) => {
										return (
											<Fragment key={i}>
												<div className="row">
													<div className="col-10 mx-0">
														<li className="list-group-item ">
															<div className="row">
																<div className="col">{item.sonName}</div>
																<div className="col">
																	{item.age} Años, {item.classroomName}
																</div>
															</div>
														</li>
													</div>
													<div className="col-2 mx-0 px-0">
														<input
															className="toggle"
															type="checkbox"
															checked="false"
															onChange={e => actions.checkInSon(e, item)}
														/>
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

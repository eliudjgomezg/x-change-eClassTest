import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class Classroom extends React.Component {
	render() {
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="card card-body">
								<div className="container">
									<div className="row">
										<div className="col text-center">
											<h1>Bienvenid@ a la Sala de 1 a 3 años</h1>
										</div>
									</div>
									<div className="row">
										<div className="col">
											<p className="float-left">
												<strong>Lista de asistencia</strong>
											</p>
										</div>
										<div className="col">
											<button
												className="btn btn-primary float-right"
												onClick={e => actions.classroomList(e)}>
												ACTUALIZAR LISTA
											</button>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>

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

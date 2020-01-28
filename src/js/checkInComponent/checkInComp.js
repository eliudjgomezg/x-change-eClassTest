import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { ListHijos } from "../checkInComponent/listHijos";

export class CheckInComp extends React.Component {
	render() {
		let width = { width: "100 px" };
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							{!!store.noClassroom && (
								<div className="alert alert-danger" role="alert">
									<h1 className="text-center m-0 p-0">
										No es posible hacer CheckIn, ya que no hay aulas creadas. Notificar a un
										Administrador{" "}
									</h1>
								</div>
							)}
							<div className="container">
								<div className=" container input-group mb-3 mt-2">
									<input
										type="text"
										className="form-control"
										aria-label="Recipient's username"
										aria-describedby="button-addon2"
										value={store.rut}
										name="rut"
										onChange={e => actions.getData(e)}
										placeholder="Ingresar Rut de Apoderado"
									/>
									<div className="input-group-append">
										<button
											className="btn btn-primary"
											type="button"
											id="button-addon2"
											disabled={store.noClassroom}
											onClick={e => actions.serchRut(e)}>
											Buscar
										</button>
									</div>
								</div>

								{!!store.alert && (
									<div className="alert alert-danger" role="alert">
										<p className="text-center m-0 p-0">Ingrese un Rut valido</p>
									</div>
								)}
								{!!store.noSon && (
									<div className="alert alert-danger" role="alert">
										<p className="text-center m-0 p-0">
											Este apoderad@ no tienes Hij@s registrados con su rut
										</p>
									</div>
								)}
							</div>
							<ListHijos />

							{!!(store.hijos.length > 0) && (
								<div className="row">
									<div className="col">
										<button
											type="button"
											className="btn btn-primary float-right mt-2 mr-5 mb-2"
											data-toggle="modal"
											data-target="#exampleModal2"
											onClick={e => actions.outCheckin(e)}>
											Aceptar
										</button>
									</div>
								</div>
							)}
							<div className="container">
								<Fragment>
									<h5 className="text-center">Estatus de capacidad del Aula</h5>
									<Context.Consumer>
										{({ store, actions }) => {
											if (store.cardArray.length > 0) {
												return store.cardArray.map((item, i) => {
													return (
														<Fragment key={i}>
															<div className=" card card-body py-1 px-2 mb-1">
																<div className="row">
																	<div className="col-6 float-right">
																		<div className="mx-auto">
																			{item.classroomName}
																		</div>
																	</div>
																	<div className="col-6 ">
																		<div className="mx-auto">
																			CAPACIDAD: {item.sonsInClassroom}
																			{"/"}
																			{item.capacity}
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
								</Fragment>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

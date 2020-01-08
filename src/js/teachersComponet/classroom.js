import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class Classroom extends React.Component {
	render() {
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container">
								<div className="row mt-2 mb-3">
									<div className="col">
										<div className="row">
											<p className="my-0 ml-3">Hola!!! {store.usuarioLoged.name}</p>
										</div>
										<div className="row">
											<p className="my-0 ml-3">{store.usuarioLoged.classrooms.classroomName}</p>
										</div>
										<div className="row">
											<p className="my-0 ml-3">
												CAPACIDAD: {store.usuarioLoged.classrooms.sonsInClassroom}
												{" / "}
												{store.usuarioLoged.classrooms.capacity}
											</p>
										</div>
									</div>
									<div className="col">
										<button
											className="btn btn-primary float-right d-flex align-self-center"
											onClick={e => actions.classroom(e)}>
											ACTUALIZAR
										</button>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p>
											<strong>
												Lista de asistencia: {store.attendance} de {store.hijos.length}{" "}
											</strong>
										</p>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>

				<Context.Consumer>
					{({ store, actions }) => {
						if (store.hijos.length > 0) {
							return store.hijos.map((item, i) => {
								return (
									<Fragment key={i}>
										<div className="container">
											<div className={"card card-body py-1 px-2 mb-2 " + item.borderColor}>
												<div className="row">
													<div className="col-12">
														<div className="col justify-content-center">
															Hola soy {item.sonName} y tengo {item.age} años.
														</div>
													</div>
												</div>
												{item.button ? (
													<div className="container">
														<div className="row my-3 justify-content-center">
															{!!item.status && (
																<div className="col-lg-4 col-sm-12">
																	<button
																		className="btn btn-warning container"
																		type="button"
																		onClick={e => actions.showBorder(item, i)}>
																		PRESENTE
																	</button>
																</div>
															)}

															<div className="col-lg-4 col-sm-12">
																<div className="dropdown">
																	<button
																		type="button"
																		className="btn btn-success dropdown-toggle container"
																		href="#"
																		role="button"
																		id="dropdownMenuLink"
																		data-toggle="dropdown"
																		aria-haspopup="true"
																		aria-expanded="false">
																		LLAMAR APODERADO
																	</button>
																	<div
																		className="dropdown-menu"
																		aria-labelledby="dropdownMenuLink">
																		<a className="dropdown-item">
																			Apoderad@:
																			{item.parentName}
																		</a>
																		<a
																			className="dropdown-item btn btn-primary"
																			href={"tel:" + item.parentPhone}>
																			Llamada
																		</a>
																		<a
																			className="dropdown-item btn btn-success"
																			href={
																				"https://api.whatsapp.com/send?phone=" +
																				item.parentPhone +
																				"&text=hola,%20¿qué%20tal%20estás? "
																			}>
																			whatapp
																		</a>
																	</div>
																</div>
															</div>
															<div className="col-lg-4 col-sm-12">
																<button
																	type="button"
																	className=" btn btn-info container"
																	data-toggle="modal"
																	data-target="#exampleModalScrollable"
																	onClick={e => actions.myData(item)}>
																	MIS DATOS
																</button>
															</div>
														</div>
													</div>
												) : (
													<div className="container">
														<div className="row my-3 justify-content-center">
															<div className="col-lg-5 col-sm-12 ">
																<button
																	className="btn btn-success container"
																	onClick={e => actions.button(item, i)}
																	type="button">
																	RECIBIR
																</button>
															</div>
															<div className="col-lg-5 col-sm-12">
																<button
																	className="btn btn-danger container"
																	type="button"
																	data-toggle="modal"
																	data-target="#exampleModal">
																	RETIRAR
																</button>
															</div>
														</div>
													</div>
												)}
												{!!item.hBirthDate && (
													<div className="alert alert-success mt-2" role="alert">
														<p className="text-center my-auto">
															<strong>¡¡¡ESTOY DE CUMPLEAÑOSSSSSSS!!!</strong>
														</p>
													</div>
												)}
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
															¡¡¡ALERTA!!!
														</h5>
														<button
															type="button"
															className="close"
															data-dismiss="modal"
															aria-label="Close">
															<span aria-hidden="true">&times;</span>
														</button>
													</div>
													<div className="modal-body">
														Si retiras a {item.sonName}, se eliminara de la lista y
														permitira la entrada a otro niñ@. ¿Segur@ deseas continuar?
													</div>
													<div className="modal-footer">
														<button
															type="button"
															className="btn btn-primary"
															onClick={e => actions.deleteCurrentClassroom(item)}>
															Aceptar
														</button>
													</div>
												</div>
											</div>
										</div>

										<div
											className="modal fade"
											id="exampleModalScrollable"
											tabIndex="-1"
											role="dialog"
											aria-labelledby="exampleModalScrollableTitle"
											aria-hidden="true">
											<div className="modal-dialog modal-dialog-scrollable" role="document">
												<div className="modal-content">
													<div className="modal-header">
														<h5 className="modal-title" id="exampleModalScrollableTitle">
															Datos del Niñ@
														</h5>
														<button
															type="button"
															className="close"
															data-dismiss="modal"
															aria-label="Close">
															<span aria-hidden="true">&times;</span>
														</button>
													</div>
													<div className="modal-body">
														<Context.Consumer>
															{({ store, actions }) => {
																if (store.apoderados.length > 0) {
																	return store.apoderados.map((item, i) => {
																		return (
																			<Fragment key={i}>
																				<div className="container">
																					<div className="card card-body py-1 px-2 mb-2 ">
																						<div className="row ">
																							<div className="col-12">
																								<div className="col justify-content-center">
																									Apoderad@:{" "}
																									{item.parentName}
																								</div>
																							</div>
																						</div>

																						<div className="container">
																							<div className="row justify-content-center">
																								<div className="col-lg-5 col-sm-12 ">
																									<button
																										className="btn btn-primary container"
																										type="button"
																										href={
																											"tel:" +
																											item.phone
																										}>
																										LLAMAR
																									</button>
																								</div>
																								<div className="col-lg-5 col-sm-12">
																									<button
																										className="btn btn-success container"
																										type="button"
																										href={
																											"https://api.whatsapp.com/send?phone=" +
																											item.phone +
																											"&text=hola,%20¿qué%20tal%20estás? "
																										}>
																										WHATAPP
																									</button>
																								</div>
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
													</div>
													<div className="modal-footer">
														<button
															type="button"
															className="btn btn-primary"
															data-dismiss="modal">
															Aceptar
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
			</Fragment>
		);
	}
}

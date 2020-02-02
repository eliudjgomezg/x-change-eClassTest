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
												CAPACIDAD: {store.hijos.length}
												{" / "}
												{store.usuarioLoged.classrooms.capacity}
											</p>
										</div>
									</div>
									<div className="col align-items-center ">
										<button
											className="btn btn-primary  float-right"
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
																			href={
																				"tel:" + item.area + item.parentPhone
																			}>
																			Llamada
																		</a>
																		<a
																			className="dropdown-item btn btn-success"
																			href={
																				"https://api.whatsapp.com/send?phone=" +
																				item.area +
																				item.parentPhone +
																				"&text=Estimad@ " +
																				item.parentName +
																				" , por favor dirigirse a UneteKids a la " +
																				store.usuarioLoged.classrooms
																					.classroomName +
																				" por " +
																				item.sonName
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
																	data-target="#exampleModal"
																	onClick={e => actions.byeSon(item)}>
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
														Si retiras a {store.sonName}, se eliminara de la lista y
														permitira la entrada a otro niñ@. ¿Segur@ deseas continuar?
													</div>

													<div className="modal-footer">
														<button
															type="button"
															className="btn btn-secondary"
															data-dismiss="modal">
															Cancelar
														</button>
														<button
															type="button"
															className="btn btn-primary"
															data-dismiss="modal"
															onClick={e => actions.deleteCurrentClassroom()}>
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
													<div className="modal-body ">
														<div className="container ">
															<div className="card card-body pt-1 mb-2">
																<div className="row">
																	Hola soy {store.hijo.sonName} y tengo{" "}
																	{store.hijo.age} años.
																</div>
																{!!store.hijo.notes.length > 0 && (
																	<Fragment>
																		<div className="row">
																			Por favor ten en cuenta estas
																			consideraciones sobre mi:
																		</div>
																		<div className="row">
																			<textarea
																				className="form-control"
																				id="exampleFormControlTextarea1"
																				rows="4"
																				disabled
																				value={store.hijo.notes}
																				name="notes"
																			/>
																		</div>
																	</Fragment>
																)}
															</div>
														</div>
														<Context.Consumer>
															{({ store, actions }) => {
																if (store.apoderados.length > 0) {
																	return store.apoderados.map((a, i) => {
																		return (
																			<Fragment key={i}>
																				<div className="container">
																					<div className="card card-body py-1 px-2 mb-2 ">
																						<div className="row ">
																							<div className="col-12">
																								<div className="col justify-content-center">
																									Apoderad@:{" "}
																									{a.parentName}
																								</div>
																							</div>
																						</div>

																						<div className="container">
																							<div className="row justify-content-center">
																								<div className="col-lg-5 col-sm-12 ">
																									<a
																										className="btn btn-primary container"
																										type="button"
																										href={
																											"tel:" +
																											a.area +
																											a.phone
																										}>
																										LLAMAR
																									</a>
																								</div>
																								<div className="col-lg-5 col-sm-12">
																									<a
																										className="btn btn-success container"
																										type="button"
																										href={
																											"https://api.whatsapp.com/send?phone=" +
																											a.area +
																											a.phone +
																											"&text=Estimad@ " +
																											a.parentName +
																											" , por favor dirigirse a UneteKids a la " +
																											store
																												.usuarioLoged
																												.classrooms
																												.classroomName +
																											" por " +
																											store.hijo
																												.sonName
																										}>
																										WHATAPP
																									</a>
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
				<div className="container">
					<button
						type="button"
						className=" container btn btn-primary float-right"
						data-toggle="modal"
						data-target="#exampleModalScrollable2">
						CHECK OUT
					</button>

					<div
						className="modal fade"
						id="exampleModalScrollable2"
						tabIndex="-1"
						role="dialog"
						aria-labelledby="exampleModalScrollableTitle"
						aria-hidden="true">
						<div className="modal-dialog modal-dialog-scrollable" role="document">
							<div className="modal-content">
								<Context.Consumer>
									{({ store, actions }) => {
										return (
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalScrollableTitle">
													Check Out
												</h5>

												<button
													type="button"
													className="close"
													data-dismiss="modal"
													aria-label="Close"
													onClick={() => actions.exitCheckOut()}>
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
										);
									}}
								</Context.Consumer>

								<div className="modal-body">
									<div className=" container input-group mb-3 mt-2">
										<Context.Consumer>
											{({ store, actions }) => {
												return (
													<Fragment>
														<input
															type="text"
															className="form-control"
															aria-label="Recipient's username"
															aria-describedby="button-addon2"
															value={store.rut}
															name="rut"
															onChange={e => actions.getData2(e)}
															placeholder="Ingresar Rut de Apoderado"
														/>
														<div className="input-group-append">
															<button
																className="btn btn-primary"
																type="button"
																id="button-addon2"
																onClick={e => actions.checkOutHijos(e)}>
																Buscar
															</button>
														</div>
														{!!store.status && (
															<div className="alert alert-danger" role="alert">
																<p className="text-center m-0 p-0">
																	Apoderado no tiene Hij@s asignados a esta aula.
																</p>
															</div>
														)}
													</Fragment>
												);
											}}
										</Context.Consumer>
									</div>
									<Context.Consumer>
										{({ store, actions }) => {
											if (store.checkOutHijos.length > 0) {
												return store.checkOutHijos.map((item, i) => {
													return (
														<div className="container" key={i}>
															<div className="card card-body">
																<div className="row">
																	<div className="col-12">
																		<div className="col justify-content-center">
																			{i + 1} {item.sonName}
																		</div>
																	</div>
																</div>
															</div>
														</div>
													);
												});
											}
										}}
									</Context.Consumer>
								</div>
								<Context.Consumer>
									{({ store, actions }) => {
										return (
											<div className="modal-footer">
												<button
													type="button"
													className="btn btn-secondary"
													data-dismiss="modal"
													onClick={() => actions.exitCheckOut()}>
													Cancelar
												</button>
												<button
													type="button"
													className="btn btn-primary"
													data-dismiss="modal"
													onClick={() => actions.checkOut()}
													disabled={store.status}>
													Check Out
												</button>
											</div>
										);
									}}
								</Context.Consumer>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

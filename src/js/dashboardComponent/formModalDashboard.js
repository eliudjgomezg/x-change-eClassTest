import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Select } from "../dashboardComponent/Select";

export class FormModalDashboard extends React.Component {
	render() {
		let textColor = { color: "white" };
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<Fragment>
								<form onSubmit={e => actions.setCard(e)}>
									{!!store.alert && (
										<div className="alert alert-danger" role="alert">
											<h1 className="text-center m-0 p-0">
												¡¡¡Upsss. Es necesario crear roles de profesor antes de crear aulas!!!
											</h1>
										</div>
									)}
									<div>
										<h1 className="text-center">Crear Nueva Aula</h1>
									</div>
									<div className="card card-body mt-2">
										<div className="form-group">
											<label htmlFor="exampleFormControlInput1">Nombre de la sala:</label>
											<input
												className="form-control"
												id="classroomName"
												onChange={e => actions.getData(e)}
												name="classroomName"
												value={store.classroomName}
												required
											/>
										</div>
										<div className="form-group">
											<label htmlFor="exampleFormControlInput2">Rango de edades:</label>

											<div className="row">
												<div className="col">
													<input
														className="form-control"
														id="startAgeRank"
														placeholder="Desde 3 Años"
														name="startAgeRank"
														onChange={e => actions.getData(e)}
														value={store.startAgeRank}
														required
													/>
												</div>

												<div className="col">
													<input
														className="form-control"
														id="finaltAgeRank"
														placeholder="Hasta 5 Años"
														name="finaltAgeRank"
														onChange={e => actions.getData(e)}
														value={store.finaltAgeRank}
														required
													/>
												</div>
											</div>
										</div>
										<div
											className="form-group btn btn-primary float-right"
											type="button"
											data-toggle="modal"
											data-target="#exampleModalScrollable"
											onClick={e => actions.formModalDashboard(e)}>
											SELECCIONAR PROFESORES
										</div>

										<div className="form-group">
											<div className="row">
												<div className="col">
													<label htmlFor="capacidad">Capacidad:</label>
													<input
														className="form-control"
														id="capacity"
														name="capacity"
														onChange={e => actions.getData(e)}
														value={store.capacity}
														required
													/>
												</div>
												<div className="col">
													<label htmlFor="diaUso">Dia de uso:</label>
													<input
														className="form-control"
														id="dayUse"
														name="dayUse"
														onChange={e => actions.getData(e)}
														value={store.dayUse}
														required
													/>
												</div>

												<div className="col">
													<label htmlFor="horarioDesde">Horario:</label>
													<input
														className="form-control"
														id="startScheduleRank"
														placeholder="Desde"
														name="startScheduleRank"
														onChange={e => actions.getData(e)}
														value={store.startScheduleRank}
														required
													/>
												</div>
												<div className="col">
													<label htmlFor="horarioHasta" style={textColor}>
														.
													</label>
													<input
														className="form-control"
														id="finalScheduleRank"
														placeholder="Hasta"
														name="finalScheduleRank"
														onChange={e => actions.getData(e)}
														value={store.finalScheduleRank}
														required
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary"
											data-dismiss="modal"
											onClick={e => actions.deleteForm(e)}>
											Cerrar
										</button>
										<button type="submit" disabled={store.alert} className="btn btn-primary">
											Guardar
										</button>
									</div>
								</form>

								<div
									className="modal fade"
									id="exampleModalScrollable"
									tabIndex="-1"
									role="dialog"
									aria-labelledby="exampleModalScrollableTitle"
									aria-hidden="true">
									<div className="modal-dialog modal-dialog-scrollable" role="document">
										<div className="modal-content">
											<form onSubmit={e => actions.setCard(e)}>
												<div className="modal-header">
													<h5 className="modal-title" id="exampleModalScrollableTitle">
														Agregar Profesores
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
														onClick={e => actions.selectedTeachersOut(e)}>
														<span aria-hidden="true">&times;</span>
													</button>
												</div>
												<div className="modal-body">
													<Select />
												</div>
												<div className="modal-footer">
													<button
														type="button"
														className="btn btn-secondary"
														data-dismiss="modal"
														onClick={e => actions.selectedTeachersOut(e)}>
														Aceptar
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</Fragment>
						);
					}}
				</Context.Consumer>
			</Fragment>
		);
	}
}

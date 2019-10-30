import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { Select } from "../dashboardComponent/select";

export class FormModalDashboard extends React.Component {
	render() {
		let textColor = { color: "white" };
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<Fragment>
								<div className="form-group">
									<label htmlFor="exampleFormControlInput1">Nombre de la sala:</label>
									<input
										className="form-control"
										id="exampleFormControlInput1"
										onChange={e => actions.getData(e)}
										name="nombreDeSala"
										value={store.nombreDeSala}
										required
									/>
								</div>
								<div className="form-group">
									<label htmlFor="exampleFormControlInput1">Rango de edades:</label>

									<div className="row">
										<div className="col">
											<input
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="Desde 3 Años"
												name="rangoDesde"
												onChange={e => actions.getData(e)}
												value={store.rangoDesde}
												required
											/>
										</div>
										<div className="col">
											<input
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="Hasta 5 Años"
												name="rangoHasta"
												onChange={e => actions.getData(e)}
												value={store.rangoHasta}
												required
											/>
										</div>
									</div>
								</div>
								<div className="form-group ">
									<label htmlFor="exampleFormControlSelect1">Seleccionar Profesores</label>
									<select
										className="form-control selectpicker"
										id="exampleFormControlSelect1"
										required
										multiple>
										<Select />
									</select>
								</div>

								<div className="form-group">
									<div className="row">
										<div className="col">
											<label htmlFor="exampleFormControlInput1">Capacidad:</label>
											<input
												className="form-control"
												id="exampleFormControlInput1"
												name="capacidad"
												onChange={e => actions.getData(e)}
												value={store.capacidad}
												required
											/>
										</div>
										<div className="col">
											<label htmlFor="exampleFormControlInput1">Dia de uso:</label>
											<input
												className="form-control"
												id="exampleFormControlInput1"
												name="diaUso"
												onChange={e => actions.getData(e)}
												value={store.diaUso}
												required
											/>
										</div>
										<div className="col">
											<label htmlFor="exampleFormControlInput1">Horario:</label>
											<input
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="Desde"
												name="horarioDesde"
												onChange={e => actions.getData(e)}
												value={store.horarioDesde}
												required
											/>
										</div>
										<div className="col">
											<label htmlFor="exampleFormControlInput1" style={textColor}>
												.
											</label>
											<input
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="Hasta"
												name="horarioHasta"
												onChange={e => actions.getData(e)}
												value={store.horarioHasta}
												required
											/>
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

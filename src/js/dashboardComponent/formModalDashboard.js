import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class FormModalDashboard extends React.Component {
	render() {
		let inLine = {
			float: "left",
			display: "flex"
		};
		let halfSide = {
			width: "50%"
		};
		let inLine2 = {
			float: "left",
			display: "flex",
			width: "50%"
		};
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
									<div style={inLine}>
										<input
											className="form-control"
											id="exampleFormControlInput1"
											placeholder="Desde 3 Años"
											style={halfSide}
											name="rangoDesde"
											onChange={e => actions.getData(e)}
											value={store.rangoDesde}
											required
										/>
										<input
											className="form-control"
											id="exampleFormControlInput1"
											placeholder="Hasta 5 Años"
											style={halfSide}
											name="rangoHasta"
											onChange={e => actions.getData(e)}
											value={store.rangoHasta}
											required
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="exampleFormControlSelect2">Example multiple select</label>
									<select
										multiple
										className="form-control select-checkbox"
										id="exampleFormControlSelect2">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</select>
								</div>
								<div className="form-group" style={inLine}>
									<div style={halfSide}>
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
									<div style={halfSide}>
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
									<div className="form-group">
										<label htmlFor="exampleFormControlInput1">Horario:</label>
										<div style={inLine}>
											<input
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="Desde"
												style={halfSide}
												name="horarioDesde"
												onChange={e => actions.getData(e)}
												value={store.horarioDesde}
												required
											/>
											<input
												className="form-control"
												id="exampleFormControlInput1"
												placeholder="Hasta"
												style={halfSide}
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

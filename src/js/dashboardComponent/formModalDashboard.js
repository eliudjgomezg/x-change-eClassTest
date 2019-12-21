import React, { Fragment, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Select } from "../dashboardComponent/select";

export const FormModalDashboard = () => {
	const { store, actions } = useContext(Context);
	const [selectedTeachers, setSelectedTeachers] = useState([]);

	let textColor = { color: "white" };
	return (
		<Fragment>
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
			<div className="form-group ">
				<label htmlFor="profesores">Seleccionar Profesores</label>

				<select
					className="form-control "
					id="teachers"
					multiple
					name="teachers"
					onChange={e => console.log("selected Teachers", e)}>
					{store.usuarios.length > 0 &&
						store.usuarios.map((p, i) => {
							if (p.rol == "Profesor") {
								return (
									<option key={i} value={p.name}>
										{p.name}
									</option>
								);
							}
						})}
				</select>
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
		</Fragment>
	);
};

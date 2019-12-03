import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { FormFamilias } from "../familiasComponent/formFamilias";
import { FamiliasList } from "../familiasComponent/familiasList";
import { AddApoderado } from "../familiasComponent/addApoderado";
import { ListApoderados } from "../familiasComponent/listApoderados";
import { ListHijos } from "../familiasComponent/listHijos";
import { AddHijos } from "../familiasComponent/addHijos";

export class Familias extends React.Component {
	render() {
		let margin = { marginBotton: "20px" };
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							{!!store.menu && (
								<div className="container my-2">
									<div className="row">
										<div className="col-3" />
										<div className="col-3">
											<button className="btn btn-primary" onClick={e => actions.familias(e)}>
												Ver Familias
											</button>
										</div>
										<div className="col-3">
											<button
												className="btn btn-primary"
												onClick={e => actions.familyLastName(e)}>
												Agregar Familias
											</button>
										</div>
										<div className="col-3" />
									</div>
								</div>
							)}

							{!!store.familyOptions && (
								<div className="container my-2">
									<div className="row">
										<div className="col-3" />
										<div className="col-3">
											<button className="btn btn-primary" onClick={e => actions.addFamily(e)}>
												Agregar Apoderados
											</button>
										</div>
										<div className="col-3">
											<button className="btn btn-primary" onClick={e => actions.addHijo(e)}>
												Agregar Hijos
											</button>
										</div>
										<div className="col-3">
											<button
												className="btn btn-primary float-right"
												onClick={e => actions.goBack(e)}>
												Volver
											</button>
										</div>
									</div>
								</div>
							)}

							{!!store.familyLastName && (
								<form onSubmit={e => actions.addFamily(e)}>
									<div className="row my-5">
										<div className="col float-right">
											<label
												htmlFor="exampleFormControlInput1"
												className="float-right"
												onClick={e => actions.addFamily(e)}>
												Ingrese apellidos de la familia:
											</label>
										</div>
										<div className="col">
											<input
												className="form-control"
												placeholder="Ej: Gomez Gonzalez"
												value={store.familyName}
												name="familyName"
												onChange={e => actions.getData(e)}
												required
											/>
										</div>
										<div className="col">
											<button className="btn btn-primary" type="submit">
												Crear Familia
											</button>
										</div>
									</div>
								</form>
							)}
							{!!store.familiasss && <FamiliasList />}
							{!!store.editNewFamilia && (
								<div className="container">
									<div className="row my-3">
										<div className="col float-right">
											<label
												htmlFor="exampleFormControlInput1"
												className="float-right"
												onClick={e => actions.addFamily(e)}>
												Apellidos de la familia:
											</label>
										</div>
										<div className="col">
											<input
												className="form-control"
												value={store.familyName}
												name="familyName"
												onChange={e => actions.getData(e)}
												placeholder="Ej: Gomez Gonzalez"
											/>
										</div>
										<div className="col">
											<button className="btn btn-primary">Editar</button>
										</div>
										<div className="col">
											<button
												className="btn btn-primary float-right"
												onClick={e => actions.goBack(e)}>
												Volver
											</button>
										</div>
									</div>

									<div className="row">
										<div className="col-3" />
										<div className="col-3">
											<button
												className="btn btn-primary"
												onClick={e => actions.editNewApoderados(e)}>
												Editar Apoderados
											</button>
										</div>
										<div className="col-3">
											<button className="btn btn-primary" onClick={e => actions.editNewHijo(e)}>
												Editar Hijos
											</button>
										</div>
									</div>
								</div>
							)}
							{!!store.addApoderado && (
								<Fragment>
									<div className="container">
										<div className="row">
											<div className="col">
												<AddApoderado />
											</div>
											<div className="col">
												<ListApoderados />
											</div>
										</div>
										<div className="row">
											<div className="col ">
												<button
													className="btn btn-primary float-right mr-5"
													onClick={e => actions.goBack(e)}>
													Aceptar
												</button>
											</div>
										</div>
									</div>
								</Fragment>
							)}
							{!!store.addHijo && (
								<Fragment>
									<div className="container">
										<div className="row">
											<div className="col">
												<AddHijos />
											</div>
											<div className="col">
												<ListHijos />
											</div>
										</div>

										<div className="row">
											<div className="col  mr-5">
												<button
													className="btn btn-primary float-right "
													onClick={e => actions.goBack(e)}>
													Aceptar
												</button>
											</div>
										</div>
									</div>
								</Fragment>
							)}
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

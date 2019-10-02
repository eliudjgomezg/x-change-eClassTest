import React, { Fragment } from "react";
import { AddApoderado } from "./addApoderado";
import { AddHijos } from "./addHijos";
import { ListApoderados } from "./listApoderados";
import { ListHijos } from "./listHijos";
import { Context } from "../store/appContext";

export class FormFamilias extends React.Component {
	render() {
		let alertFields = "";

		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							{!!store.alert && (
								<div className="alert alert-danger" role="alert">
									Llenar todos los campos.
								</div>
							)}
							<div className="form-group">
								<label htmlFor="exampleFormControlInput1">Apellidos de familia</label>
								<input
									className="form-control"
									id="exampleFormControlInput1"
									placeholder="Ejemplo: Perez Gonzalez"
									onChange={e => actions.setFamilialastName(e)}
									value={store.lastNameFamilia}
									name="lastNameFamilia"
									required
								/>
							</div>
							<AddApoderado />
							<ListApoderados />
							<AddHijos />
							<ListHijos />
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

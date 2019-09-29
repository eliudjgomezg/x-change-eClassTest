import React, { Fragment } from "react";
import { AddApoderado } from "./addApoderado";
import { AddHijos } from "./addHijos";
import { ListApoderados } from "./listApoderados";
import { ListHijos } from "./listHijos";

export class FormFamilias extends React.Component {
	render() {
		return (
			<Fragment>
				<form>
					<div className="form-group">
						<label htmlFor="exampleFormControlInput1">Apellidos de familia</label>
						<input
							type="email"
							className="form-control"
							id="exampleFormControlInput1"
							placeholder="Ejemplo: Perez Gonzalez"
						/>
					</div>
					<AddApoderado />
					<ListApoderados />
					<AddHijos />
					<ListHijos />
				</form>
			</Fragment>
		);
	}
}

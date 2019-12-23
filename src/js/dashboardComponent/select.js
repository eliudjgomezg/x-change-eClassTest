import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { Multiselect } from "multiselect-react-dropdown";

export class Select extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Multiselect
							options={store.selectUSuarios}
							displayValue="name"
							selectedValues={store.selectUSuarios}
							placeholder="Elejir con DOBLE CLICK"
							onSelect={(optionsList, selectedItem) => actions.addTeacher(optionsList, selectedItem)}
							onRemove={(optionsList, removedItem) => actions.removeTeacher(optionsList, removedItem)}
						/>
					);
				}}
			</Context.Consumer>
		);
	}
}

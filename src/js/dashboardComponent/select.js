import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class Select extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.usuarios.length > 0) {
						return store.usuarios.map((item, i) => {
							return (
								<option key={i} value={i}>
									{" "}
									{item.nombre}{" "}
								</option>
							);
						});
					}
				}}
			</Context.Consumer>
		);
	}
}

import React, { Fragment } from "react";
import { Context } from "../store/appContext";

export class NovedadesList extends React.Component {
	render() {
		let align = {
			paddingBottom: "10px"
		};
		let inline = {
			display: "inline"
		};
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.novedadesArray.length > 0) {
							return store.novedadesArray.map((item, i) => {
								return (
									<div key={i} className="accordion" id="accordionExample">
										<div className="card">
											<div className="card-header" id={"headingPanel" + i}>
												<h2 className="mb-0">
													<button
														className="btn btn-link collapsed"
														type="button"
														data-toggle="collapse"
														data-target={"#collapsePanel" + i}
														aria-expanded="false"
														aria-controls="collapseThree">
														Profesor: Aula: Fecha:
													</button>
												</h2>
											</div>
											<div
												id={"collapsePanel" + i}
												className="collapse"
												aria-labelledby="headingThree"
												data-parent="#accordionExample">
												<div className="card-body">{item.news}</div>
											</div>
										</div>
									</div>
								);
							});
						}
					}}
				</Context.Consumer>
			</Fragment>
		);
	}
}

import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { DeleteModal } from "../dashboardComponent/deleteModal";

export class Carddashboard extends React.Component {
	render() {
		return (
			<Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						if (store.cardArray.length > 0) {
							return store.cardArray.map((item, i) => {
								return (
									<div key={i} className="card-body">
										<h5 className="card-title btn btn-primary">{item.nombreDeSala}</h5>
										<p className="card-text">
											Rango de Edades: Desde {item.rangoDesde} años, hasta {item.rangoHasta} años
										</p>
										<p className="card-text">Capacidad: {item.capacidad}</p>
										<p className="card-text">Dia de uso: {item.diaUso}</p>
										<p className="card-text">
											Horario de uso: Desde {item.horarioDesde}, hasta {item.horarioHasta}
										</p>
										<a
											href="#"
											className="btn btn-primary"
											data-toggle="modal"
											data-target="#exampleModalScrollable"
											onClick={() => actions.setEditCard(item, i)}>
											Editar
										</a>
										<button
											type="button"
											className="btn btn-primary"
											data-toggle="modal"
											data-target="#deleteAlert"
											onClick={e => actions.deleteCard(i)}>
											Eliminar
										</button>
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

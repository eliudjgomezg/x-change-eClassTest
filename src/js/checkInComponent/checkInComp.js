import React, { Fragment } from "react";
import { Context } from "../store/appContext";
import { ListHijos } from "../checkInComponent/listHijos";

export class CheckInComp extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<Fragment>
							<div className="container">
								<div className="row my-3 ">
									<div className="col float-right">
										<label htmlFor="exampleFormControlInput1" className="float-right">
											Ingrese Rut de Apoderado:
										</label>
									</div>
									<div className="col">
										<input
											className="form-control"
											value={store.rut}
											name="rut"
											onChange={e => actions.getData(e)}
											placeholder="11.111.111"
										/>
									</div>
									<div className="col">
										<button className="btn btn-primary" onClick={e => actions.serchRut(e)}>
											Aceptar
										</button>
									</div>
								</div>
								{!!store.alert && (
									<div className="alert alert-danger" role="alert">
										<p className="text-center m-0 p-0">Ingrese un Rut valido</p>
									</div>
								)}
							</div>
							<ListHijos />
							<div>
								<button
									type="button"
									className="btn btn-primary float-right mt-2 mr-5 "
									data-toggle="modal"
									data-target="#exampleModal2"
									onClick={e => actions.outCheckin(e)}>
									Aceptar
								</button>
							</div>
						</Fragment>
					);
				}}
			</Context.Consumer>
		);
	}
}

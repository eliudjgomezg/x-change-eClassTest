//Componente que envia el foemulario al servidor (simulacion)
import React, { useState } from "react";
import PropTypes from "prop-types";
import NavBar from "../components/homeComponents/navBar";
import { Link } from "react-router-dom";

//En este componente jugaremos con el Hook useState
const Register = props => {
	let styleLetter = { color: "white" };
	const [form, setState] = useState({
		//Definimos hook
		name: "",
		email: "",
		password: "",
		rPassword: "",
		alert: false,
		sendedForm: false
	});
	const handleChange = e => {
		//Funcion para captura de datos del input
		setState({
			...form,
			[e.target.name]: e.target.value,
			alert: false,
			sendedForm: false
		});
	};
	const sendForm = (e, history) => {
		//Funcion que realiza el Submit
		e.preventDefault();
		if (form.password === form.rPassword && form.password.length >= 8) {
			//Verifica que las contraseñas sean iguales mayores a 8 caracteres
			setState({
				name: "",
				email: "",
				password: "",
				rPassword: "",
				alert: false,
				sendedForm: true
			});
			setTimeout(() => {
				setState({ sendedForm: false }); // Notifica que el formulario fue enviado y despues de 3 seg, devuelve a la vista principal
				history.push("/");
			}, 3000);
		} else setState({ ...form, alert: true }); //Alerta de falla en las contraseñas
	};

	return (
		<div className="container-fluid mx-0 px-0 bg-light">
			<NavBar />
			<div className="container py-5">
				<div className="row">
					<div className="col-lg-6 col-sm-12">
						<div className="justify-content-center border border-success rounded bg-dark mt-3 px-5 py-5">
							<h2 style={styleLetter}>
								Registrate para seguir nuestras noticias y las actulizaciones de los pares de moneda en
								forma personalizada y mucho mas !!!
							</h2>
							<div
								className="collapse navbar-collapse d-flex justify-content-end mt-3"
								id="navbarSupportedContent">
								<Link to="/" className="btn btn-outline-success my-2 my-sm-0" type="button">
									Volver!!!
								</Link>
							</div>
						</div>
					</div>

					<div className="col-lg-6 col-sm-12">
						<diiv className="card card-body border-success mt-3 py-0 rounded">
							{!!form.sendedForm && (
								<div className="alert alert-success mt-2" role="alert">
									<p className="text-center">Registrado correctamente</p>
								</div>
							)}
							<h2 className="text-success mt-1">Registro</h2>
							<form className="mt-2" onSubmit={e => sendForm(e, props.history)}>
								<div className="container">
									<div className="row">
										<div className="col-lg-6 col-sm-12">
											<div className="form-group">
												<label htmlFor="exampleFormControlInput1">Nombre Completo</label>
												<input
													type="text"
													className="form-control"
													id="exampleFormControlInput1"
													placeholder="Ej: Eliud Gomez"
													onChange={handleChange}
													name="name"
													value={form.name}
												/>
											</div>
										</div>
										<div className="col-lg-6 col-sm-12">
											<div className="form-group">
												<label htmlFor="exampleFormControlInput1">email</label>
												<input
													type="email"
													className="form-control"
													id="exampleFormControlInput1"
													placeholder="Ej: eliudjgomezg@gmail.com"
													name="email"
													value={form.email}
													onChange={handleChange}
												/>
											</div>
										</div>
									</div>

									<div className="form-group">
										<label htmlFor="exampleFormControlInput1">Contraseña</label>
										<input
											type="password"
											className="form-control"
											id="exampleFormControlInput1"
											name="password"
											value={form.password}
											onChange={handleChange}
											placeholder="Minimo 8 caracteres"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="exampleFormControlInput1">Repetir contraseña</label>
										<input
											type="password"
											className="form-control"
											id="exampleFormControlInput1"
											name="rPassword"
											value={form.rPassword}
											onChange={handleChange}
											placeholder="Minimo 8 caracteres"
										/>
									</div>

									<div className="modal-footer">
										<button type="submit" className="btn btn-outline-success">
											Enviar
										</button>
									</div>
								</div>
							</form>
							{!!form.alert && (
								<div className="alert alert-danger" role="alert">
									<p className="text-center">
										Las contraseñas no coinciden o tiene menos de 8 caracteres
									</p>
								</div>
							)}
						</diiv>
					</div>
				</div>
			</div>
		</div>
	);
};
Register.propTypes = {
	history: PropTypes.object
};
export default Register;

import React, { Fragment } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export class CreateFamily extends React.Component {
	render() {
		let style1 = { backgroundColor: "#C408BC" };
		let style2 = { color: "white" };
		let style3 = { color: "#C408BC" };
		let style4 = { backgroundColor: "#23D5F0" };
		return (
			<div className="page-content " style={style4}>
				<div className="form-v4-content my-3">
					<div className="form-left" style={style1}>
						<h2>Estimad@ Apoderad@</h2>
						<p className="text-1" style={style2}>
							En el siguiente apartado, usted podra crear el perfil de su familia y de esta manera tener
							acceso a la escuela dominical
						</p>
						<p className="text-2" style={style2}>
							<span>iKids:</span> Te permitira agregar tus hij@s y amiguit@s que van contigo a la iglesia.
							A su vez podras registrar o eliminar cuando gustes, las personas que pueden entregar o
							retirar a los niñ@s en sus aulas de clase.
						</p>
					</div>
					<form className="form-detail" action="#" method="post" id="myform">
						<h2 style={style3}>REGISTRO</h2>

						<div className="form-row">
							<label htmlFor="your_email">Apellidos de la familia</label>
							<input type="text" name="your_email" id="your_email" className="input-text" required />
						</div>
						<div className="form-row">
							<label htmlFor="your_email">Email</label>
							<input
								type="text"
								name="your_email"
								id="your_email"
								className="input-text"
								required
								pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
							/>
						</div>

						<div className="form-group">
							<div className="form-row form-row-1 ">
								<label htmlFor="password">Password</label>
								<input type="password" name="password" id="password" className="input-text" required />
							</div>
							<div className="form-row form-row-1">
								<label htmlFor="comfirm-password">Comfirm Password</label>
								<input
									type="password"
									name="comfirm_password"
									id="comfirm_password"
									className="input-text"
									required
								/>
							</div>
						</div>
						<div className="container-login100-form-btn">
							<div className="wrap-login100-form-btn">
								<div className="login100-form-bgbtn" />
								<button className="login100-form-btn" type="submit" name="register">
									Registrar
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

//Componente donde se hace la peticion al servidor y renderiza
import React, { Fragment } from "react";
import argentina from "../../../img/argentina.png";
import chile from "../../../img/chile.jpg";
import colombia from "../../../img/colombia.jpg";
import paraguay from "../../../img/paraguay.png";
import mexico from "../../../img/mexico.jpg";

export class Data extends React.Component {
	constructor() {
		super();
		this.state = {
			// Se declara el state con las variables a utilizar
			data: {},
			quotes: [],
			argentina: false,
			chile: false,
			colombia: false,
			paraguay: false,
			mexico: false,
			error: false
		};
	}
	UNSAFE_componentWillMount() {
		//realiza la peticion al servidor antes que se renderice el componente
		fetch(
			"http://apilayer.net/api/live?access_key=9d27ad1fe17536aa5dfd80bdd373baa3&currencies=ARS,CLP,COP,PYG,MXN&source=USD&format=1",
			{
				method: "GET",
				headers: {}
			}
		)
			.then(resp => {
				return resp.json();
			})
			.then(data => {
				//Respuesta desde el servidor
				console.log(data);
				const foo = Object.values(data.quotes); //Necesito convertir el objeto quotes en un array de sus tributos
				const quotesArray = foo.map((f, i) => {
					//Agrego atributos adicionales para un facil renderizado
					let flag = ""; //Le asigno valor a flag con el index del map
					let currencies = ""; //Asigno la moneda a la cual sera convertida
					switch (i) {
						case 0: //Asigno los valores segun la informacion que llega
							flag = "argentina";
							currencies = "pesos Argentinos";
							break;
						case 1:
							flag = "chile";
							currencies = "pesos Chilenos";
							break;
						case 2:
							flag = "colombia";
							currencies = "pesos Colombianos";
							break;
						case 3:
							flag = "paraguay";
							currencies = "guaraní Paraguayo";
							break;
						case 4:
							flag = "mexico";
							currencies = "pesos Mexicanos";
							break;
					}
					const timestamp = new Date(data.timestamp * 1000); //Convierto timestamp a fecha en formato humano
					let day = timestamp.getDate();
					let month = timestamp.getMonth() + 1;
					let year = timestamp.getFullYear();
					const today = `${day}-0${month}-${year}`;

					return {
						//devuelvo en cada iteracion un nuevo objeto con la data estructurada para un facil renderizado
						quote: f,
						source: data.source,
						timestamp: today,
						flag: flag,
						currencies: currencies
					};
				});
				console.log(quotesArray);
				this.setState({ data: data, quotes: quotesArray }); //Cargo la nueva data estructurda al State
			})
			.catch(error => {
				this.setState({ error: true }); // Se emite alerta por falla en la conexion
				console.log(error);
			});
	}
	render() {
		let styleLetter = { color: "white" };
		return (
			<Fragment>
				<div className=" justify-content-center  border border-success rounded bg-dark container mt-3">
					<h2 className="text-center" style={styleLetter}>
						Cambio del par VS Dolar segun el pais
					</h2>
					{!!this.state.error && (
						<div className="alert alert-danger" role="alert">
							<p className="text-center">
								Fallo en la conexion. Intenta nuevamente o verifica tu conexion a internet
							</p>
						</div>
					)}
					<div className="row ">
						{this.state.quotes.map((q, i) => {
							return (
								<div className="col-lg-3 col-md-6 col-sm-12 mt-2  " key={i}>
									<div className="card border border-success" styles="width: 18rem;">
										{!!(q.flag === "argentina") && (
											<img src={argentina} className="card-img-top" alt="..." />
										)}
										{!!(q.flag === "chile") && (
											<img src={chile} className="card-img-top" alt="..." />
										)}
										{!!(q.flag === "colombia") && (
											<img src={colombia} className="card-img-top" alt="..." />
										)}
										{!!(q.flag === "paraguay") && (
											<img src={paraguay} className="card-img-top" alt="..." />
										)}
										{!!(q.flag === "mexico") && (
											<img src={mexico} className="card-img-top" alt="..." />
										)}
										<div className="card-body bg-light">
											<p className="card-text">
												<strong>1 {q.source} Es igual a:</strong>
											</p>
											<p className="card-text">
												<strong>
													{q.quote} {q.currencies}{" "}
												</strong>
											</p>
											<p className="card-text">
												<strong>{q.timestamp}</strong>
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Fragment>
		);
	}
}

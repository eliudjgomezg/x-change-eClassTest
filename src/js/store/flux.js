import { ENGINE_METHOD_STORE } from "constants";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			data: {},
			quotes: []
		},

		actions: {
			//Fectch para consumir api
			getData: () => {
				fetch(
					"http://apilayer.net/api/live?access_key=9d27ad1fe17536aa5dfd80bdd373baa3&currencies=ARS,CPL,COP,PYG,MXN&source=USD&format=1",
					{
						method: "GET",
						headers: {}
					}
				)
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						//Respues desde el servidor
						console.log(data);
						const foo = Object.values(data.quotes); //Nececito convertir el objeto quotes en un array de sus tributos
						const quotes = foo.map(f => {
							//Agrego atributos adicionales para un facil renderizado
							return {
								quote: f,
								source: data.source,
								timestamp: data.timestamp
							};
						});
						setStore({ data: data, quotes }); //Cargo la nueva data estructurda al Store
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			}
		}
	};
};
export default getState;

import { ENGINE_METHOD_STORE } from "constants";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			nombreDeSala: "",
			rangoDesde: "",
			rangoHasta: "",
			capacidad: "",
			diaUso: "",
			horarioDesde: "",
			horarioHasta: "",
			saveCard: "",

			cardArray: []
		},

		actions: {
			getData: e => {
				//get the store
				const store = getStore();
				const { name, value } = e.target;
				setStore({ [name]: value });
			},

			setCard: e => {
				const store = getStore();

				let data = {
					nombreDeSala: store.nombreDeSala,
					rangoDesde: store.rangoDesde,
					rangoHasta: store.rangoHasta,
					capacidad: store.capacidad,
					diaUso: store.diaUso,
					horarioDesde: store.horarioDesde,
					horarioHasta: store.horarioHasta
				};
				let newCard = store.cardArray.concat(data);

				setStore({
					cardArray: newCard,
					nombreDeSala: "",
					rangoDesde: "",
					rangoHasta: "",
					capacidad: "",
					diaUso: "",
					horarioDesde: "",
					horarioHasta: "",
					saveCard: "saved"
				});
			}
		}
	};
};

export default getState;

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
			index: 0,
			cardEdited: true,
			cardArray: []
		},

		actions: {
			getData: e => {
				//get the store
				const store = getStore();
				const { name, value } = e.target;
				setStore({ [name]: value });
			},

			setEditCard: (item, index) => {
				setStore({
					index: index,
					cardEdited: false,
					nombreDeSala: item.nombreDeSala,
					rangoDesde: item.rangoDesde,
					rangoHasta: item.rangoHasta,
					capacidad: item.capacidad,
					diaUso: item.diaUso,
					horarioDesde: item.horarioDesde,
					horarioHasta: item.horarioHasta
				});
			},

			setCard: e => {
				const store = getStore();

				if (store.cardEdited) {
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
						horarioHasta: ""
					});
				} else {
					let dataEdited = {
						nombreDeSala: store.nombreDeSala,
						rangoDesde: store.rangoDesde,
						rangoHasta: store.rangoHasta,
						capacidad: store.capacidad,
						diaUso: store.diaUso,
						horarioDesde: store.horarioDesde,
						horarioHasta: store.horarioHasta
					};
					let newDataEdited = store.cardArray;
					newDataEdited[store.index] = dataEdited;

					setStore({
						cardArray: newDataEdited,
						index: 0,
						cardEdited: true,
						nombreDeSala: "",
						rangoDesde: "",
						rangoHasta: "",
						capacidad: "",
						diaUso: "",
						horarioDesde: "",
						horarioHasta: ""
					});
				}
			},

			deleteForm: e => {
				setStore({
					nombreDeSala: "",
					rangoDesde: "",
					rangoHasta: "",
					capacidad: "",
					diaUso: "",
					horarioDesde: "",
					horarioHasta: ""
				});
			},
			deleteCard: index => {
				const store = getStore();
				let deleteCard = store.cardArray;
				deleteCard.splice(index, 1);
				setStore({
					cardArray: deleteCard
				});
			}
		}
	};
};

export default getState;

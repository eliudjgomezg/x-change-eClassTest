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
			index2: "",
			disabledButton: "",
			cardEdited: true,
			getName: "",
			addNovedades: "",

			cardArray: [],
			novedadesArray: []
		},

		actions: {
			getData: e => {
				//Toma la data del Input y la coloca en las variables del store
				const store = getStore();
				const { name, value } = e.target;
				setStore({ [name]: value });
			},

			setEditCard: (item, itemPosition) => {
				// Boton de editar: Toma el valos del Item correspondiente
				// del map en el form para ser editado.
				setStore({
					index: itemPosition,
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
				e.preventDefault();
				const store = getStore();
				//Boton de guardar: Guarda una nueva aula en un card. Puede diferenciar entre editar
				// un aula y guardar una nueva. Tamnien, verifica que los campos estes escritos
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
					//Boton cerrar: Limpia los input del form
					nombreDeSala: "",
					rangoDesde: "",
					rangoHasta: "",
					capacidad: "",
					diaUso: "",
					horarioDesde: "",
					horarioHasta: ""
				});
			},
			indextodeleteClassroon: index => {
				setStore({
					index: index
				});
			},

			deleteCard: () => {
				//Boton eliminar: Borra el aula seleccionada
				const store = getStore();
				let deleteCard = store.cardArray;
				deleteCard.splice(store.index, 1);
				setStore({
					cardArray: deleteCard,
					index: ""
				});
			},

			setNovedad: e => {
				const store = getStore();
				let newAddNovedad = store.novedadesArray.concat(store.addNovedades);
				setStore({
					novedadesArray: newAddNovedad,
					addNovedades: ""
				});
			}
		}
	};
};

export default getState;

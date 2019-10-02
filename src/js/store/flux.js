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
			cardArray: [],

			addNovedades: "",
			novedadesArray: [],

			nombreApoderado: "",
			apellidoApoderado: "",
			rutApoderado: "",
			emailApoderado: "",
			telefonoApoderado: "",
			checkApoderado: "",
			apoderadoArray: [],
			apoderadoRenderArray: [],

			nombreHijo: "",
			apellidoHijo: "",
			fnacimientoHijo: "",
			observacionesHijo: "",
			checkHijo: "",
			hijoArray: [],
			hijoRenderArray: [],

			familiaArray: [],
			lastNameFamilia: "",

			alert: false
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
				//Agrega la novedad al arreglo addNovedades
				e.preventDefault();
				const store = getStore();
				let newAddNovedad = store.novedadesArray.concat(store.addNovedades);
				setStore({
					novedadesArray: newAddNovedad,
					addNovedades: ""
				});
			},

			setApoderado: e => {
				e.preventDefault();
				const store = getStore();
				if (store.cardEdited) {
					const store = getStore();
					let data = {
						nombreApoderado: store.nombreApoderado,
						apellidoApoderado: store.apellidoApoderado,
						rutApoderado: store.rutApoderado,
						emailApoderado: store.emailApoderado,
						telefonoApoderado: store.telefonoApoderado
					};
					let checkApoderado = store.nombreApoderado;

					let newApoderado = store.apoderadoArray.concat(data);
					let newRenderApoderado = store.apoderadoRenderArray.concat(data);

					setStore({
						apoderadoArray: newApoderado,
						apoderadoRenderArray: newRenderApoderado,
						nombreApoderado: "",
						apellidoApoderado: "",
						rutApoderado: "",
						emailApoderado: "",
						telefonoApoderado: "",
						checkApoderado: checkApoderado
					});
				} else {
					let dataEdited = {
						nombreApoderado: store.nombreApoderado,
						apellidoApoderado: store.apellidoApoderado,
						rutApoderado: store.rutApoderado,
						emailApoderado: store.emailApoderado,
						telefonoApoderado: store.telefonoApoderado
					};
					let checkApoderado = store.nombreApoderado;

					let newDataEdited = store.apoderadoArray;
					newDataEdited[store.index] = dataEdited;

					let newRenderDataEdited = store.apoderadoRenderArray;
					newRenderDataEdited[store.index] = dataEdited;

					setStore({
						apoderadoArray: newDataEdited,
						apoderadoRenderArray: newRenderDataEdited,
						index: 0,
						cardEdited: true,
						nombreApoderado: "",
						apellidoApoderado: "",
						rutApoderado: "",
						emailApoderado: "",
						telefonoApoderado: "",
						checkApoderado: checkApoderado
					});
				}
			},

			editApoderado: (item, itemPosition) => {
				// Boton de editar: Toma el valos del Item correspondiente
				// del map en el form para ser editado.
				setStore({
					index: itemPosition,
					cardEdited: false,
					nombreApoderado: item.nombreApoderado,
					apellidoApoderado: item.apellidoApoderado,
					rutApoderado: item.rutApoderado,
					emailApoderado: item.emailApoderado,
					telefonoApoderado: item.telefonoApoderado
				});
			},
			deleteAddApoderado: e => {
				setStore({
					nombreApoderado: "",
					apellidoApoderado: "",
					rutApoderado: "",
					emailApoderado: "",
					telefonoApoderado: "",
					cardEdited: true
				});
			},
			deleteApoderado: index => {
				//Boton eliminar: Borra el aula seleccionada
				const store = getStore();
				let deleteApoderado = store.apoderadoArray;
				deleteApoderado.splice(index, 1);
				let deleteRenderApoderado = store.apoderadoRenderArray;
				deleteRenderApoderado.splice(index, 1);
				setStore({
					apoderadoArray: deleteApoderado,
					apoderadoRenderArray: deleteRenderApoderado,
					index: ""
				});
			},
			deleteAddHijo: e => {
				setStore({
					nombreHijo: "",
					apellidoHijo: "",
					fnacimientoHijo: "",
					observacionesHijo: "",
					cardEdited: true
				});
			},
			setHijo: e => {
				e.preventDefault();
				const store = getStore();
				if (store.cardEdited) {
					const store = getStore();
					let data = {
						nombreHijo: store.nombreHijo,
						apellidoHijo: store.apellidoHijo,
						fnacimientoHijo: store.fnacimientoHijo,
						observacionesHijo: store.observacionesHijo
					};
					let checkHijo = store.nombreHijo;

					let newHijo = store.hijoArray.concat(data);
					let newRenderHijo = store.hijoRenderArray.concat(data);

					setStore({
						hijoArray: newHijo,
						hijoRenderArray: newRenderHijo,
						nombreHijo: "",
						apellidoHijo: "",
						fnacimientoHijo: "",
						observacionesHijo: "",
						checkHijo: checkHijo
					});
				} else {
					let dataEdited = {
						nombreHijo: store.nombreHijo,
						apellidoHijo: store.apellidoHijo,
						fnacimientoHijo: store.fnacimientoHijo,
						observacionesHijo: store.observacionesHijo
					};
					let checkHijo = store.nombreHijo;
					let newDataEdited = store.hijoArray;
					newDataEdited[store.index] = dataEdited;

					let newRenderDataEdited = store.hijoRenderArray;
					newRenderDataEdited[store.index] = dataEdited;

					setStore({
						hijoArray: newDataEdited,
						hijoRenderArray: newRenderDataEdited,
						index: 0,
						cardEdited: true,
						nombreHijo: "",
						apellidoHijo: "",
						fnacimientoHijo: "",
						observacionesHijo: "",
						checkHijo: checkHijo
					});
				}
			},
			editHijo: (item, itemPosition) => {
				// Boton de editar: Toma el valos del Item correspondiente
				// del map en el form para ser editado.
				setStore({
					index: itemPosition,
					cardEdited: false,
					nombreHijo: item.nombreHijo,
					apellidoHijo: item.apellidoHijo,
					fnacimientoHijo: item.fnacimientoHijo,
					observacionesHijo: item.observacionesHijo
				});
			},
			deleteHijo: index => {
				//Boton eliminar: Borra el aula seleccionada
				const store = getStore();
				let deleteHijo = store.hijoArray;
				deleteHijo.splice(index, 1);
				let deleteRenderhijo = store.hijoRenderArray;
				deleteRenderhijo.splice(index, 1);
				setStore({
					hijoArray: deleteHijo,
					hijoRenderArray: deleteRenderhijo,
					index: ""
				});
			},
			deleteAddFamilia: e => {
				const store = getStore();
				setStore({
					lastNameFamilia: "",
					hijoArray: "",
					apoderadoArray: "",
					nombreHijo: "",
					apellidoHijo: "",
					fnacimientoHijo: "",
					observacionesHijo: "",
					nombreApoderado: "",
					apellidoApoderado: "",
					rutApoderado: "",
					emailApoderado: "",
					telefonoApoderado: ""
				});
			},
			setFamilialastName: e => {
				const store = getStore();
				let data = e.target.value;
				setStore({
					lastNameFamilia: data,
					alert: false
				});
			},

			setFamilia: e => {
				const store = getStore();
				e.preventDefault();
				if (store.checkApoderado != "" && store.checkHijo != "" && store.lastNameFamilia != "") {
					console.log("campos llenos");
					let newFamiliaArray = store.familiaArray.concat(store.lastNameFamilia);

					setStore({
						familiaArray: newFamiliaArray,
						lastNameFamilia: "",
						hijoArray: [],
						apoderadoArray: [],
						checkApoderado: [],
						checkHijo: [],
						alert: false
					});
				} else {
					setStore({
						alert: true
					});
				}
			}
		}
	};
};
export default getState;

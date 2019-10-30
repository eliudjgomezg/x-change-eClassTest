import { ENGINE_METHOD_STORE } from "constants";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Variables para creacion de aula
			nombreDeSala: "",
			rangoDesde: "",
			rangoHasta: "",
			capacidad: "",
			diaUso: "",
			horarioDesde: "",
			horarioHasta: "",
			cardArray: [],
			//Variables para creacion de novedades
			addNovedades: "",
			novedadesArray: [],
			//Variables para creacion de familias
			apoderado: {
				nombre: "",
				apellido: "",
				rut: "",
				email: "",
				telefono: ""
			},
			hijo: {
				nombre: "",
				apellido: "",
				fNacimiento: "",
				observaciones: ""
			},
			familia: {
				lastName: "",
				apoderados: [],
				hijos: []
			},
			familias: [],
			//Variables para creacion de Roles
			usuario: {
				nombre: "",
				apellido: "",
				rut: "",
				rol: "",
				email: "",
				contraseña: "",
				rContraseña: ""
			},
			usuarios: [],
			//Variables generales
			alert: false,
			index: "",
			cardEdited: true,
			contraseña: false,
			rol: false,
			dashboard: true,
			novedades: false,
			familiass: false,
			roles: false,
			estadistica: false
		},

		actions: {
			//Funciones para renderizado condicional
			dashboard: e => {
				const store = getStore();
				setStore({ dashboard: true, novedades: false, familias: false, roles: false, estadistica: false });
			},
			novedades: e => {
				const store = getStore();
				setStore({ dashboard: false, novedades: true, familias: false, roles: false, estadistica: false });
			},
			familias: e => {
				const store = getStore();
				setStore({ dashboard: false, novedades: false, familiass: true, roles: false, estadistica: false });
			},
			roles: e => {
				const store = getStore();
				setStore({ dashboard: false, novedades: false, familias: false, roles: true, estadistica: false });
			},
			estadistica: e => {
				const store = getStore();
				setStore({ dashboard: false, novedades: false, familias: false, roles: false, estadistica: true });
			},
			//Funciones para la creacion de aulas
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
			//Funciones para agregar novedad
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
			//Funciones para llenar formulario de familia
			handleChangeApoderado: e => {
				const store = getStore();
				const { name, value } = e.target;
				let apoderado = store.apoderado;
				apoderado[name] = value;
				setStore({
					apoderado
				});
			},
			handleChangeHijo: e => {
				const store = getStore();
				const { name, value } = e.target;
				let hijo = store.hijo;
				hijo[name] = value;
				setStore({
					hijo
				});
			},
			//Funciones para crear, editar y eliminar apoderado
			setApoderado: e => {
				e.preventDefault();
				const store = getStore();
				if (store.cardEdited) {
					let familia = store.familia;
					familia.apoderados.push(store.apoderado);
					setStore({
						familia,
						apoderado: {
							nombre: "",
							apellido: "",
							rut: "",
							email: "",
							telefono: ""
						}
					});
				} else {
					let apoderado = {
						nombre: store.apoderado.nombre,
						apellido: store.apoderado.apellido,
						rut: store.apoderado.rut,
						email: store.apoderado.email,
						telefono: store.apoderado.telefono
					};
					let familia = store.familia;
					familia.apoderados[store.index] = apoderado;
					setStore({
						familia,
						index: 0,
						cardEdited: true,
						apoderado: {
							nombre: "",
							apellido: "",
							rut: "",
							email: "",
							telefono: ""
						}
					});
				}
			},
			editApoderado: (item, itemPosition) => {
				// Boton de editar: Toma el valos del Item correspondiente
				// del map en el form para ser editado.
				setStore({
					index: itemPosition,
					cardEdited: false,
					apoderado: {
						nombre: item.nombre,
						apellido: item.apellido,
						rut: item.rut,
						email: item.email,
						telefono: item.telefono
					}
				});
			},
			deleteAddApoderado: e => {
				setStore({
					apoderado: {
						nombre: "",
						apellido: "",
						rut: "",
						email: "",
						telefono: ""
					},
					cardEdited: true
				});
			},
			deleteApoderado: index => {
				const store = getStore();
				let familia = store.familia;
				familia.apoderados.splice(index, 1);
				setStore({
					familia,
					index: ""
				});
			},
			//Funciones para crear, editar y eliminar hijo
			deleteAddHijo: e => {
				setStore({
					hijo: {
						nombre: "",
						apellido: "",
						fNacimiento: "",
						observaciones: ""
					},
					cardEdited: true
				});
			},
			setHijo: e => {
				e.preventDefault();
				const store = getStore();
				if (store.cardEdited) {
					const store = getStore();
					let familia = store.familia;
					familia.hijos.push(store.hijo);

					setStore({
						familia,
						hijo: {
							nombre: "",
							apellido: "",
							fNacimiento: "",
							observaciones: ""
						}
					});
				} else {
					let hijo = {
						nombre: store.hijo.nombre,
						apellido: store.hijo.apellido,
						fNacimiento: store.hijo.fNacimiento,
						observaciones: store.hijo.observaciones
					};
					let familia = store.familia;
					familia.hijos[store.index] = hijo;
					setStore({
						familia,
						index: 0,
						cardEdited: true,
						hijo: {
							nombre: "",
							apellido: "",
							fNacimiento: "",
							observaciones: ""
						}
					});
				}
			},
			editHijo: (item, itemPosition) => {
				setStore({
					index: itemPosition,
					cardEdited: false,
					hijo: {
						nombre: item.nombre,
						apellido: item.apellido,
						fNacimiento: item.fNacimiento,
						observaciones: item.observaciones
					}
				});
			},
			deleteHijo: index => {
				//Boton eliminar: Borra el aula seleccionada
				const store = getStore();
				let familia = store.familia;
				familia.hijos.splice(index, 1);
				setStore({
					familia,
					index: ""
				});
			},
			//Funciones para crear, editar y eliminar Familia
			deleteAddFamilia: e => {
				const store = getStore();
				setStore({
					apoderado: {
						nombre: "",
						apellido: "",
						rut: "",
						email: "",
						telefono: ""
					},
					hijo: {
						nombre: "",
						apellido: "",
						fNacimiento: "",
						observaciones: ""
					},
					familia: {
						lastName: "",
						apoderados: [],
						hijos: []
					}
				});
			},

			setFamilialastName: e => {
				const store = getStore();
				let data = e.target.value;
				let familia = store.familia;
				familia["lastName"] = data;
				setStore({
					familia,
					alert: false
				});
			},

			setFamilia: e => {
				const store = getStore();
				e.preventDefault();
				if (
					store.familia.apoderados.length > 0 &&
					store.familia.hijos.length > 0 &&
					store.familia.lastName != ""
				) {
					let familias = store.familias.concat(store.familia);
					setStore({
						familias,
						alert: false,
						familia: {
							lastName: "",
							apoderados: [],
							hijos: []
						}
					});
				} else {
					setStore({
						alert: true
					});
				}
			},

			verFamilia: (e, item, i) => {
				const store = getStore();
				setStore({
					index: i,
					familia: {
						lastName: item.lastName,
						apoderados: item.apoderados,
						hijos: item.hijos
					}
				});
			},
			alert: e => {
				const store = getStore();
				if (
					store.familia.apoderados.length > 0 &&
					store.familia.hijos.length > 0 &&
					store.familia.lastName != ""
				) {
				} else setStore({ alert: true });
			},
			deleteFamilia: (e, item, i) => {
				const store = getStore();
				let familias = store.familias;
				familias.splice(i, 1);
				setStore({
					familias,
					index: ""
				});
			},
			//Funciones para creacion de profesores
			setUsuarios: e => {
				e.preventDefault();
				const store = getStore();
				if (store.cardEdited) {
					if (store.usuario.contraseña === store.usuario.rContraseña) {
						if (store.usuario.rol != "Elige una opcion...") {
							let usuarios = store.usuarios;
							usuarios.push(store.usuario);
							setStore({
								usuarios,
								usuario: {
									nombre: "",
									apellido: "",
									rut: "",
									rol: "",
									email: "",
									contraseña: "",
									rContraseña: ""
								}
							});
						} else {
							setStore({
								rol: true
							});
						}
					} else {
						setStore({
							contraseña: true
						});
					}
				} else {
					if (store.usuario.contraseña === store.usuario.rContraseña) {
						if (store.usuario.rol != "Elige una opcion...") {
							let usuarios = store.usuarios;
							usuarios[store.index] = store.usuario;
							setStore({
								usuarios,
								usuario: {
									nombre: "",
									apellido: "",
									rut: "",
									rol: "",
									email: "",
									contraseña: "",
									rContraseña: ""
								},
								cardEdited: true
							});
						} else {
							setStore({
								rol: true
							});
						}
					} else {
						setStore({
							contraseña: true
						});
					}
				}
			},
			handleChangeUsuario: e => {
				const store = getStore();
				const { name, value } = e.target;
				let usuario = store.usuario;
				usuario[name] = value;
				setStore({
					usuario,
					contraseña: false,
					rol: false
				});
			},
			deleteAddUsuarios: e => {
				setStore({
					usuario: {
						nombre: "",
						apellido: "",
						rut: "",
						rol: "",
						email: "",
						contraseña: "",
						rContraseña: ""
					},
					cardEdited: true
				});
			},
			editRoles: (e, item, i) => {
				const store = getStore();
				setStore({
					usuario: {
						nombre: item.nombre,
						apellido: item.apellido,
						rut: item.rut,
						rol: item.rol,
						email: item.email,
						contraseña: item.contraseña,
						rContraseña: item.rContraseña
					},
					index: i,
					cardEdited: false
				});
			},
			deleteUsuarios: i => {}
		}
	};
};
export default getState;

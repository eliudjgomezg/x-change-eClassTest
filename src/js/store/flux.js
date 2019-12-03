import { ENGINE_METHOD_STORE } from "constants";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Variables para creacion de aula
			id: "",
			classroomName: "",
			startAgeRank: "",
			finaltAgeRank: "",
			teachers: "",
			capacity: "",
			dayUse: "",
			startScheduleRank: "",
			finalScheduleRank: "",
			cardArray: [],

			//Variables para creacion de novedades
			news: "",
			novedadesArray: [],
			//Variables para creacion de familias
			familyName: "",
			apoderado: {
				id: "",
				parentName: "",
				rut: "",
				email: "",
				phone: ""
			},
			apoderados: [],
			hijo: {
				id: "",
				sonName: "",
				birthDate: "",
				notes: ""
			},
			hijos: [],
			familia: {
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
			familiasss: true,
			roles: false,
			estadistica: false,
			hiddeModal: "",
			familyLastName: false,
			familiasss: true,
			addApoderado: false,
			familyOptions: false,
			addHijo: false,
			menu: true,
			editNewFamilia: true
		},

		actions: {
			//Funciones para renderizado condicional
			dashboard: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/classrooms", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							dashboard: true,
							novedades: false,
							familiass: false,
							roles: false,
							estadistica: false,
							cardArray: data,
							familiasss: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: false,
							editNewFamilia: false
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			novedades: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/news", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							dashboard: false,
							novedades: true,
							familiass: false,
							roles: false,
							estadistica: false,
							novedadesArray: data,
							familiasss: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: false,
							editNewFamilia: false
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			familias: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/families", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							dashboard: false,
							novedades: false,
							familiass: true,
							roles: false,
							estadistica: false,
							familias: data,
							familiasss: true,
							familyLastName: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: true,
							editNewFamilia: false,
							familyName: ""
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			roles: e => {
				const store = getStore();
				setStore({
					dashboard: false,
					novedades: false,
					familiass: false,
					roles: true,
					estadistica: false,
					familiasss: false,
					addApoderado: false,
					familyOptions: false,
					addHijo: false,
					menu: false,
					editNewFamilia: false
				});
			},
			estadistica: e => {
				const store = getStore();
				setStore({
					dashboard: false,
					novedades: false,
					familiass: false,
					roles: false,
					estadistica: true,
					familiasss: false,
					addApoderado: false,
					familyOptions: false,
					addHijo: false,
					menu: false,
					editNewFamilia: false
				});
			},
			//Funciones para la creacion de aulas
			getData: e => {
				//Toma la data del Input y la coloca en las variables del store
				const store = getStore();
				const { name, value } = e.target;
				setStore({ [name]: value });
			},
			getDataSelect: e => {
				//Toma la data del Input y la coloca en las variables del store
				console.log(e.target.selectOption);
			},
			setEditCard: (item, itemPosition) => {
				// Boton de editar: Toma el valos del Item correspondiente
				// del map en el form para ser editado.
				setStore({
					id: item._id,
					cardEdited: false,
					classroomName: item.classroomName,
					startAgeRank: item.startAgeRank,
					finaltAgeRank: item.finaltAgeRank,
					teachers: "",
					capacity: item.capacity,
					dayUse: item.dayUse,
					startScheduleRank: item.startScheduleRank,
					finalScheduleRank: item.finalScheduleRank
				});
			},
			setCard: e => {
				e.preventDefault();
				const store = getStore();

				//Boton de guardar: Guarda una nueva aula en un card. Puede diferenciar entre editar
				// un aula y guardar una nueva. Tamnien, verifica que los campos estes escritos
				if (store.cardEdited) {
					fetch("http://localhost:3000/api/v1/classrooms", {
						method: "POST",
						body: JSON.stringify({
							classroomName: store.classroomName,
							startAgeRank: store.startAgeRank,
							finaltAgeRank: store.finaltAgeRank,
							teachers: store.teachers,
							capacity: store.capacity,
							dayUse: store.dayUse,
							startScheduleRank: store.startScheduleRank,
							finalScheduleRank: store.finalScheduleRank
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(resp => {
							//console.log(resp.ok); // will be true if the response is successfull
							//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
							//console.log(resp.text()); // will try return the exact result as string
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data);
							setStore({
								classroomName: "",
								startAgeRank: "",
								finaltAgeRank: "",
								teachers: "",
								capacity: "",
								dayUse: "",
								startScheduleRank: "",
								finalScheduleRank: ""
							});
							actions.dashboard();
							//this will print on the console the exact object received from the server
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					fetch("http://localhost:3000/api/v1/classroom/" + store.id, {
						method: "PUT",
						body: JSON.stringify({
							classroomName: store.classroomName,
							startAgeRank: store.startAgeRank,
							finaltAgeRank: store.finaltAgeRank,
							teachers: store.teachers,
							capacity: store.capacity,
							dayUse: store.dayUse,
							startScheduleRank: store.startScheduleRank,
							finalScheduleRank: store.finalScheduleRank
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data); //this will print on the console the exact object received from the server
							setStore({
								classroomName: "",
								startAgeRank: "",
								finaltAgeRank: "",
								teachers: "",
								capacity: "",
								dayUse: "",
								startScheduleRank: "",
								finalScheduleRank: "",
								id: "",
								cardEdited: true
							});
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				}
			},
			showClassrooms: e => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/" + user, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({ cardArray: data });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			deleteForm: e => {
				setStore({
					//Boton cerrar: Limpia los input del form
					classroomName: "",
					startAgeRank: "",
					finaltAgeRank: "",
					teachers: "",
					capacity: "",
					dayUse: "",
					startScheduleRank: "",
					finalScheduleRank: "",
					id: ""
				});
			},
			indextodeleteClassroon: item => {
				setStore({
					id: item._id
				});
			},
			deleteCard: () => {
				//Boton eliminar: Borra el aula seleccionada
				const store = getStore();
				fetch("http://localhost:3000/api/v1/classroom/" + store.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						setStore({ id: "" });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			//Funciones para agregar novedad...............................................................................
			setNovedad: e => {
				e.preventDefault();
				const store = getStore();

				//Agrega la novedad al arreglo addNovedades
				fetch("http://localhost:3000/api/v1/news", {
					method: "POST",
					body: JSON.stringify({
						news: store.news
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data);
						setStore({
							news: ""
						});

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			deleteNovedad: e => {
				const store = getStore();
				setStore({
					news: ""
				});
			},
			//Funciones para llenar formulario de familia......................................................
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
					fetch("http://localhost:3000/api/v1/parents", {
						method: "POST",
						body: JSON.stringify({
							parentName: store.apoderado.parentName,
							rut: store.apoderado.rut,
							email: store.apoderado.email,
							phone: store.apoderado.phone,
							families: store.id
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(resp => {
							//console.log(resp.ok); // will be true if the response is successfull
							//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
							//console.log(resp.text()); // will try return the exact result as string
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data);
							let apoderados = store.apoderados;
							apoderados.push(data);
							setStore({
								apoderado: {
									parentName: "",
									rut: "",
									email: "",
									phone: "",
									id: ""
								},
								apoderados
							});

							//this will print on the console the exact object received from the server
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					fetch("http://localhost:3000/api/v1/parent/" + store.id, {
						method: "PUT",
						body: JSON.stringify({
							parentName: store.apoderado.parentName,
							rut: store.apoderado.rut,
							email: store.apoderado.email,
							phone: store.apoderado.phone
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data); //this will print on the console the exact object received from the server
							let apoderados = store.apoderados;
							apoderados[store.index] = data;
							setStore({
								apoderado: {
									parentName: "",
									rut: "",
									email: "",
									phone: ""
								},
								cardEdited: true,
								id: "",
								index: "",
								apoderados
							});
						});
				}
			},
			editApoderado: (item, i) => {
				// Boton de editar: Toma el valos del Item correspondiente
				// del map en el form para ser editado.
				setStore({
					id: item._id,
					index: i,
					cardEdited: false,
					apoderado: {
						parentName: item.parentName,
						rut: item.rut,
						email: item.email,
						phone: item.phone
					}
				});
			},
			deleteAddApoderado: e => {
				setStore({
					apoderado: {
						parentName: "",

						rut: "",
						email: "",
						phone: ""
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
						sonName: "",

						birthDate: "",
						notes: ""
					},
					cardEdited: true
				});
			},
			setHijo: e => {
				e.preventDefault();
				const store = getStore();
				if (store.cardEdited) {
					fetch("http://localhost:3000/api/v1/sons", {
						method: "POST",
						body: JSON.stringify({
							sonName: store.hijo.sonName,
							birthDate: store.hijo.birthDate,
							notes: store.hijo.notes,
							families: store.id
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(resp => {
							//console.log(resp.ok); // will be true if the response is successfull
							//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
							//console.log(resp.text()); // will try return the exact result as string
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data);
							let hijos = store.hijos;
							hijos.push(data);
							setStore({
								hijo: {
									sonName: "",
									birthDate: "",
									notes: "",
									families: ""
								},
								hijos
							});

							//this will print on the console the exact object received from the server
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					fetch("http://localhost:3000/api/v1/son/" + store.id, {
						method: "PUT",
						body: JSON.stringify({
							sonName: store.hijo.sonName,
							birthDate: store.hijo.birthDate,
							notes: store.hijo.notes
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(resp => {
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data); //this will print on the console the exact object received from the server
							let hijos = store.hijos;
							hijos[store.index] = data;
							setStore({
								hijo: {
									sonName: "",
									birthDate: "",
									notes: ""
								},
								cardEdited: true,
								id: "",
								index: "",
								hijos
							});
						});
				}
			},
			editHijo: (item, i) => {
				setStore({
					id: item._id,
					index: i,
					cardEdited: false,
					hijo: {
						sonName: item.sonName,
						birthDate: item.birthDate,
						notes: item.notes
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
					id: ""
				});
			},

			setFamilialastName: e => {
				const store = getStore();
				let data = e.target.value;
				let familia = store.familia;
				familia["familyName"] = data;
				setStore({
					familia
				});
			},

			setFamilia: e => {
				const store = getStore();
				e.preventDefault();
				if (
					store.familia.apoderados.length > 0 &&
					store.familia.hijos.length > 0 &&
					store.familia.familyName != ""
				) {
					fetch("http://localhost:3000/api/v1/families", {
						method: "POST",
						body: JSON.stringify({
							familyName: store.familia.familyName,
							parents: store.familia.apoderados,
							sons: store.familia.hijos
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(resp => {
							//console.log(resp.ok); // will be true if the response is successfull
							//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
							//console.log(resp.text()); // will try return the exact result as string
							return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//here is were your code should start after the fetch finishes
							console.log(data);
							setStore({
								alert: false,
								familia: {
									lastName: "",
									apoderados: [],
									hijos: []
								}
							});

							//this will print on the console the exact object received from the server
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					setStore({
						alert: true
					});
				}
			},

			verFamilia: item => {
				const store = getStore();
				setStore({ id: item._id });
				fetch("http://localhost:3000/api/v1/parentEdit/" + store.id, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						console.log(data);
						setStore({
							apoderados: data,
							familyOptions: false,
							familyLastName: false,
							addApoderado: true,
							addHijo: false,
							menu: false,
							editNewFamilia: true,
							familiasss: false,
							familyName: item.familyName
						});
						fetch("http://localhost:3000/api/v1/sonEdit/" + store.id, {
							method: "GET",
							headers: {
								"Content-Type": "application/json"
							}
						})
							.then(resp => {
								return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
							})
							.then(data => {
								console.log(data);
								setStore({
									hijos: data
								});
							})
							.catch(error => {
								//error handling
								console.log(error);
							});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			alert: e => {
				//fetch put for edit family
				const store = getStore();
				if (
					store.familia.apoderados.length > 0 &&
					store.familia.hijos.length > 0 &&
					store.familia.familyName != ""
				) {
					let familias = store.familias;
					familias[store.index] = store.familia;
					setStore({
						hiddeModal: "modal",
						familias,
						familia: {
							familyName: "",
							apoderados: "",
							hijos: ""
						},
						index: ""
					});
				} else setStore({ alert: true });
			},
			deleteFamilia: (e, item, i) => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/family/" + store.id, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log(resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data); //this will print on the console the exact object received from the server
						setStore({ id: "" });
					})
					.catch(error => {
						//error handling
						console.log(error);
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
			familyLastName: e => {
				setStore({
					familyLastName: true,
					familiasss: false,
					addApoderado: false,
					familyOptions: false,
					addHijo: false
				});
			},
			addFamily: e => {
				const store = getStore();
				e.preventDefault();
				fetch("http://localhost:3000/api/v1/families", {
					method: "POST",
					body: JSON.stringify({
						familyName: store.familyName
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						//console.log(resp.ok); // will be true if the response is successfull
						//console.log("estatus=", resp.status); // the status code = 200 or code = 400 etc.
						//console.log(resp.text()); // will try return the exact result as string
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						console.log(data);
						setStore({
							familyLastName: false,
							addApoderado: true,
							familyOptions: true,
							addHijo: false,
							menu: false,
							familyName: "",
							id: data._id
						});

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			addHijo: e => {
				setStore({
					familyLastName: false,
					addApoderado: false,
					familyOptions: true,
					addHijo: true,
					menu: false,
					apoderado: {
						parentName: "",
						rut: "",
						email: "",
						phone: "",
						id: ""
					}
				});
			},
			goBack: e => {
				setStore({
					familyLastName: false,
					addApoderado: false,
					familyOptions: false,
					addHijo: false,
					menu: true,
					familiasss: true,
					editNewFamilia: false,
					apoderado: {
						parentName: "",
						rut: "",
						email: "",
						phone: "",
						id: ""
					},
					hijo: {
						sonName: "",
						birthDate: "",
						notes: "",
						families: ""
					},
					apoderados: [],
					hijos: [],
					id: ""
				});
			},
			editNewApoderados: e => {
				setStore({
					familyOptions: false,
					familyLastName: false,
					addApoderado: true,
					addHijo: false,
					menu: false,
					editNewFamilia: true
				});
			},
			editNewHijo: e => {
				setStore({
					familyOptions: false,
					familyLastName: false,
					addApoderado: false,
					addHijo: true,
					menu: false,
					editNewFamilia: true
				});
			}
		}
	};
};
export default getState;

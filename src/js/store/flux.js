import { ENGINE_METHOD_STORE } from "constants";

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Variables para creacion de aula
			id: "",
			classroomName: "",
			startAgeRank: "",
			finaltAgeRank: "",
			teachers: [],
			capacity: "",
			dayUse: "",
			startScheduleRank: "",
			finalScheduleRank: "",
			filterByWord: "",
			cardArray: [],

			//Variables para creacion de novedades
			news: "",
			date: "",
			timeStamp: "",
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
			area: "+56",
			apoderados: [],
			hijo: {
				id: "",
				sonName: "",
				birthDate: "",
				notes: "",
				age: ""
			},
			sonName: "",
			hijos: [],
			familia: {
				apoderados: [],
				hijos: []
			},
			familias: [],
			familyId: "",
			//Variables para creacion de Roles
			usuario: {
				id: "",
				name: "",
				rut: "",
				email: "",
				rol: "",
				phone: "",
				password: "",
				rPassword: "",
				logedIn: false
			},
			usuarioLoged: {
				id: "",
				name: "",
				rut: "",
				email: "",
				rol: "",
				phone: "",
				password: "",
				rPassword: "",
				logedIn: false,
				classrooms: ""
			},

			usuarios: [],
			selectUSuarios: [],
			selectedUsuarios: [],
			//Variables para hacer Loing
			login: {
				rut: "",
				password: ""
			},
			//Variables generales
			alert: false,
			alertt: false,
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
			editNewFamilia: true,
			goBackNewFamily: false,
			goBackEditFamily: false,
			disabledOut: true,
			disabledin: false,
			actualRol: "",
			actualId: "",
			view: "",
			rut: "",
			classroom: true,
			checkIn: true,
			configCheckIn: false,
			selectRol: true,
			carddashboard: true,
			formModalDashboard: false,
			noClassroom: false,
			showPasswoord: false,
			test: "",
			sonToClassroom: [],
			attendance: 0,
			checkOutHijos: [],
			status: false,
			noSon: false
		},

		actions: {
			//Funciones para renderizado condicional
			dashboard: e => {
				const store = getStore();
				const actions = getActions();
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
							editNewFamilia: false,
							goBackNewFamily: false,
							goBackEditFamily: false,
							formModalDashboard: false,
							carddashboard: true,
							alert: false,
							classroomName: "",
							startAgeRank: "",
							finaltAgeRank: "",
							selectedUsuarios: [],
							capacity: "",
							dayUse: "",
							startScheduleRank: "",
							finalScheduleRank: "",
							id: "",
							cardEdited: true,
							hijos: [],
							apoderados: []
						});
						actions.deleteAddHijo();
						actions.deleteAddApoderado();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			formModal: e => {
				setStore({ formModalDashboard: true, carddashboard: false });
			},
			formModalDashboard: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/roles", {
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
						let selectUSuarios = data.filter(s => s.rol === "Profesor" && s.selected === false);
						setStore({ selectUSuarios });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			novedades: e => {
				const store = getStore();
				const actions = getActions();
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
							editNewFamilia: false,
							goBackNewFamily: false,
							goBackEditFamily: false,
							checkIn: false,
							configCheckIn: false,
							hijos: [],
							rut: "",
							formModalDashboard: false,
							carddashboard: false,
							classroom: false,
							hijos: [],
							apoderados: []
						});
						actions.deleteAddHijo();
						actions.deleteAddApoderado();
						actions.deleteConfigCheckin();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			familias: e => {
				const store = getStore();
				const actions = getActions();
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
							familyName: "",
							goBackNewFamily: false,
							goBackEditFamily: false,
							carddashboard: false,
							formModalDashboard: false,
							alert: false,
							hijos: [],
							apoderados: []
						});
						actions.deleteAddHijo();
						actions.deleteAddApoderado();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			roles: e => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/roles", {
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
							familiass: false,
							roles: true,
							estadistica: false,
							familiasss: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: false,
							editNewFamilia: false,
							goBackNewFamily: false,
							goBackEditFamily: false,
							usuarios: data,
							hijos: [],
							apoderados: [],
							selectRol: true,
							carddashboard: false,
							formModalDashboard: false
						});
						actions.deleteAddHijo();
						actions.deleteAddApoderado();
					})
					.catch(error => {
						//error handling
						console.log(error);
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
					editNewFamilia: false,
					goBackNewFamily: false,
					goBackEditFamily: false,
					carddashboard: false,
					formModalDashboard: false
				});
			},
			checkIn: e => {
				const store = getStore();
				const actions = getActions();
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
						if (data.length > 0) {
							setStore({
								noClassroom: false,
								cardArray: data,
								checkIn: true,
								novedades: false,
								configCheckIn: false
							});
						} else {
							setStore({
								checkIn: true,
								novedades: false,
								configCheckIn: false,
								noClassroom: true
							});
						}
						actions.deleteConfigCheckin();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			configCheckIn: e => {
				const store = getStore();
				setStore({
					configCheckIn: true,
					novedades: false,
					checkIn: false,
					hijos: [],
					rut: "",
					selectRol: false,
					classroom: false,
					usuario: {
						name: store.usuarioLoged.name,
						rut: store.usuarioLoged.rut,
						email: store.usuarioLoged.email,
						rol: store.usuarioLoged.rol,
						phone: store.usuarioLoged.phone,
						password: store.usuarioLoged.password,
						rPassword: store.usuarioLoged.password
					}
				});
			},
			//Funciones para la creacion de aulas
			getData: e => {
				//Toma la data del Input y la coloca en las variables del store
				const store = getStore();
				const { name, value } = e.target;
				setStore({ [name]: value, alertt: false, alert: false, hijos: [], sonToClassroom: [], noSon: false });
			},
			getData2: e => {
				//Toma la data del Input y la coloca en las variables del store
				const store = getStore();
				const { name, value } = e.target;
				setStore({ [name]: value, status: false });
			},

			setEditCard: (item, itemPosition) => {
				// Boton de editar: Toma el valos del Item correspondiente
				// del map en el form para ser editado.
				const store = getStore();
				setStore({
					id: item._id,
					cardEdited: false,
					classroomName: item.classroomName,
					startAgeRank: item.startAgeRank,
					finaltAgeRank: item.finaltAgeRank,
					capacity: item.capacity,
					dayUse: item.dayUse,
					startScheduleRank: item.startScheduleRank,
					finalScheduleRank: item.finalScheduleRank,
					selectedUsuarios: item.teachers,
					carddashboard: false,
					formModalDashboard: true
				});
			},
			setCard: e => {
				e.preventDefault();
				const store = getStore();
				const actions = getActions();

				//Boton de guardar: Guarda una nueva aula en un card. Puede diferenciar entre editar
				// un aula y guardar una nueva. Tamnien, verifica que los campos estes escritos
				if (store.cardEdited) {
					fetch("http://localhost:3000/api/v1/classrooms", {
						method: "POST",
						body: JSON.stringify({
							classroomName: store.classroomName,
							startAgeRank: store.startAgeRank,
							finaltAgeRank: store.finaltAgeRank,
							teachers: store.selectedUsuarios,
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

							if (data === false) {
								setStore({ alert: true });
							} else {
								console.log(data);

								setStore({
									classroomName: "",
									startAgeRank: "",
									finaltAgeRank: "",
									selectedUsuarios: [],
									capacity: "",
									dayUse: "",
									startScheduleRank: "",
									finalScheduleRank: "",
									alert: false,
									selectedUsuarios: [],
									selectUSuarios: []
								});
								actions.dashboard();
								//this will print on the console the exact object received from the server
							}
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
							teachers: store.selectedUsuarios,
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
								selectedUsuarios: [],
								capacity: "",
								dayUse: "",
								startScheduleRank: "",
								finalScheduleRank: "",
								id: "",
								cardEdited: true,
								selectUSuarios: []
							});
							actions.dashboard();
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				}
			},
			deleteForm: e => {
				const store = getStore();
				setStore({
					//Boton cerrar: Limpia los input del form
					classroomName: "",
					startAgeRank: "",
					finaltAgeRank: "",
					selectedUsuarios: [],
					capacity: "",
					dayUse: "",
					startScheduleRank: "",
					finalScheduleRank: "",
					id: "",
					cardEdited: true,
					selectUSuarios: [],
					carddashboard: true,
					formModalDashboard: false
				});
			},
			selectedTeachersOut: e => {
				setStore({
					carddashboard: false,
					formModalDashboard: true
				});
			},
			indextodeleteClassroon: (item, i) => {
				setStore({
					id: item._id,
					index: i
				});
			},
			indextodeleteClassroon2: (item, i) => {
				setStore({
					id: item._id,
					index: i,
					test: item.classrooms
				});
			},
			filterByDay: e => {
				const store = getStore();
				let moment = require("moment");
				let day = moment().format("dddd");
				let sDay = "";
				if (day === "Monday") {
					sDay = "lunes";
				} else if (day === "Tuesday") {
					sDay = "martes";
				} else if (day === "Wednesday") {
					sDay = "miercoles";
				} else if (day === "Thursday") {
					sDay = "jueves";
				} else if (day === "Friday") {
					sDay = "viernes";
				} else if (day === "Saturday") {
					sDay = "sabado";
				} else if (day === "Sunday") {
					sDay = "sunday";
				}

				console.log(sDay);
				let cardArray = store.cardArray.filter(d => d.dayUse.toLowerCase() == sDay);
				if (cardArray.length > 0) {
					setStore({ cardArray });
				} else setStore({ cardArray, alert: true });
			},
			filterByDay2: e => {},

			deleteCard: () => {
				//Boton eliminar: Borra el aula seleccionada
				const store = getStore();
				const actions = getActions();

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
						actions.dashboard();
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
				const actions = getActions();
				let date = new Date();
				let timeStamp = new Date().getTime();

				let day = date.getDate();
				let month = date.getMonth() + 1;
				let year = date.getFullYear();

				if (month < 10 || day < 10) {
					let date = `${day}-0${month}-${year}`;
					setStore({ date, timeStamp });
				} else {
					let date = `${day}-${month}-${year}`;
					setStore({ date, timeStamp });
				}

				//Agrega la novedad al arreglo addNovedades
				fetch("http://localhost:3000/api/v1/news", {
					method: "POST",
					body: JSON.stringify({
						name: store.usuarioLoged.name,
						news: store.news,
						date: store.date,
						rol: store.usuarioLoged.rol,
						timeStamp: store.timeStamp
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
						actions.novedades();

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			news: (e, item) => {
				const store = getStore();
				setStore({
					news: item.news
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
					hijo,
					alertt: false
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
							families: store.familyId,
							area: store.area
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
					},
					area: item.area
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
					cardEdited: true,
					id: "",
					index: "",
					area: "+56"
				});
			},
			deleteApoderado: index => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/parent/" + store.id, {
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
						let apoderados = store.apoderados;
						apoderados.splice(store.index, 1);
						setStore({ id: "", apoderados, index: "" });
					})
					.catch(error => {
						//error handling
						console.log(error);
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
							families: store.familyId
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
							if (data.status) {
								setStore({
									alertt: true,
									startAgeRank: data.startAgeRank,
									finaltAgeRank: data.finaltAgeRank
								});
							} else {
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
							}

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
							console.log(data);
							if (data.status) {
								setStore({
									alertt: true,
									startAgeRank: data.startAgeRank,
									finaltAgeRank: data.finaltAgeRank
								});
							} else {
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
							}
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
			//Funciones para crear, editar y eliminar hijo
			deleteAddHijo: e => {
				setStore({
					hijo: {
						sonName: "",

						birthDate: "",
						notes: ""
					},
					cardEdited: true,
					id: "",
					index: ""
				});
			},
			deleteHijo: index => {
				//Boton eliminar: Borra el aula seleccionada
				const store = getStore();
				fetch("http://localhost:3000/api/v1/son/" + store.id, {
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
						let hijos = store.hijos;
						hijos.splice(store.index, 1);
						setStore({ id: "", hijos, index: "" });
					})
					.catch(error => {
						//error handling
						console.log(error);
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
				setStore({ familyId: item._id });
				fetch("http://localhost:3000/api/v1/parentEdit/" + store.familyId, {
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
							familyName: item.familyName,
							goBackNewFamily: false,
							goBackEditFamily: true
						});
						fetch("http://localhost:3000/api/v1/sonEdit/" + store.familyId, {
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
			deleteNewFamilia: (e, item, i) => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/family/" + store.familyId, {
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
								phone: ""
							},
							hijo: {
								sonName: "",
								birthDate: "",
								notes: "",
								families: ""
							},
							apoderados: [],
							hijos: [],
							familyId: "",
							familyName: "",
							apoderados: [],
							hijos: [],
							goBackNewFamily: false,
							goBackEditFamily: false
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
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
						let familias = store.familias;
						familias.splice(store.index, 1);
						setStore({
							id: "",
							index: "",
							familias
						});
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
				const actions = getActions();
				if (store.cardEdited) {
					if (store.usuario.password === store.usuario.rPassword && store.usuario.password.length >= 4) {
						if (store.usuario.rol != "Elige una opcion...") {
							fetch("http://localhost:3000/api/v1/roles", {
								method: "POST",
								body: JSON.stringify({
									name: store.usuario.name,
									rut: store.usuario.rut,
									email: store.usuario.email,
									phone: store.usuario.phone,
									rol: store.usuario.rol,
									password: store.usuario.password,
									area: store.area
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
									let usuarios = store.usuarios;
									usuarios.push(data);
									setStore({
										usuario: {
											name: "",
											rut: "",
											email: "",
											rol: "",
											phone: "",
											password: "",
											rPassword: ""
										},
										usuarios
									});
									actions.roles();
									//this will print on the console the exact object received from the server
								})
								.catch(error => {
									//error handling
									console.log(error);
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
					if (store.usuario.password === store.usuario.rPassword) {
						if (store.usuario.rol != "Elige una opcion...") {
							fetch("http://localhost:3000/api/v1/rol/" + store.id, {
								method: "PUT",
								body: JSON.stringify({
									name: store.usuario.name,
									rut: store.usuario.rut,
									email: store.usuario.email,
									rol: store.usuario.rol,
									phone: store.usuario.phone,
									password: store.usuario.password
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
									let usuarios = store.usuarios;
									usuarios[store.index] = data;
									setStore({
										usuario: {
											name: "",
											rut: "",
											email: "",
											rol: "",
											phone: "",
											password: "",
											rPassword: ""
										},
										cardEdited: true,
										id: "",
										index: "",
										usuarios,
										showPasswoord: false
									});
									actions.roles();
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
						name: "",
						rut: "",
						phone: "",
						rol: "",
						email: "",
						password: "",
						rPassword: ""
					},
					cardEdited: true,
					id: "",
					index: "",
					showPasswoord: false
				});
			},
			deleteUsuarios: item => {
				const store = getStore();
				const actions = getActions();

				fetch("http://localhost:3000/api/v1/rol/" + store.id + "/" + store.test, {
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
						let usuarios = store.usuarios;
						usuarios.splice(store.index, 1);
						setStore({
							id: "",
							index: "",
							usuarios
						});
						actions.roles();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			editRol: (item, i) => {
				const store = getStore();
				setStore({
					usuario: {
						name: item.name,
						rut: item.rut,
						email: item.email,
						phone: item.phone,
						rol: item.rol,
						password: item.password,
						rPassword: item.password
					},
					area: item.area,
					index: i,
					cardEdited: false,
					id: item._id,
					showPasswoord: true
				});
			},
			filterByRole: e => {
				const store = getStore();
				let foo = e.target.name;
				fetch("http://localhost:3000/api/v1/roles", {
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
						const usuarios = data.filter(u => u.rol === foo);
						setStore({ usuarios });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			familyLastName: e => {
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
						if (data.length <= 0) {
							setStore({
								alert: true,
								familyLastName: true,
								familiasss: false,
								addApoderado: false,
								familyOptions: false,
								addHijo: false,
								menu: false
							});
						} else {
							console.log(data);
							setStore({
								familyLastName: true,
								familiasss: false,
								addApoderado: false,
								familyOptions: false,
								addHijo: false,
								menu: false,
								alert: false
							});
						}

						console.log(data);
						setStore({
							familyLastName: true,
							familiasss: false,
							addApoderado: false,
							familyOptions: false,
							addHijo: false,
							menu: false
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
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
							familyId: data._id,
							goBackNewFamily: true,
							goBackEditFamily: false
						});

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			editFamilyName: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/family/" + store.familyId, {
					method: "PUT",
					body: JSON.stringify({
						familyName: store.familyName
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
						setStore({});
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
						phone: ""
					},
					hijos: [],
					apoderdos: []
				});
			},
			addApoderado: e => {
				setStore({
					familyLastName: false,

					familyOptions: true,
					addHijo: false,
					menu: false,
					addApoderado: true,
					hijo: {
						sonName: "",
						birthDate: "",
						notes: "",
						families: ""
					},
					hijos: [],
					apoderdos: []
				});
			},
			goBack: e => {
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
							id: "",
							familyId: "",
							familyName: "",
							apoderados: [],
							hijos: [],
							goBackNewFamily: false,
							goBackEditFamily: false,
							familyName: "",
							familias: data
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			editNewApoderados: e => {
				setStore({
					familyOptions: false,
					familyLastName: false,
					addApoderado: true,
					addHijo: false,
					menu: false,
					editNewFamilia: true,
					hijo: {
						id: "",
						sonName: "",
						birthDate: "",
						notes: ""
					}
				});
			},
			editNewHijo: e => {
				setStore({
					familyOptions: false,
					familyLastName: false,
					addApoderado: false,
					addHijo: true,
					menu: false,
					editNewFamilia: true,
					apoderado: {
						id: "",
						parentName: "",
						rut: "",
						email: "",
						phone: ""
					}
				});
			},
			//Funciones pra hacer login
			login: (e, history) => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/rolesLogin", {
					method: "POST",
					body: JSON.stringify({
						rut: store.login.rut,
						password: store.login.password
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
						if (data != false) {
							setStore({
								usuarioLoged: {
									id: data._id,
									name: data.name,
									rut: data.rut,
									email: data.email,
									rol: data.rol,
									phone: data.phone,
									password: data.password,
									rPassword: data.password,
									classrooms: data.classrooms,
									logedIn: true
								},
								login: {
									rut: "",
									password: ""
								}
							});
							history.push("/" + data.rol);
							if (data.rol === "Administrador") {
								actions.dashboard();
							} else if (data.rol === "Profesor") {
								actions.classroom();
							} else if (data.rol === "Check In") {
								actions.checkIn();
							}
						} else setStore({ alert: true });

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			deleteConfigCheckin: () => {
				setStore({
					usuario: {
						name: "",
						rut: "",
						email: "",
						rol: "",
						phone: "",
						password: "",
						rPassword: ""
					}
				});
			},
			handleLoging: e => {
				const store = getStore();
				const { name, value } = e.target;
				let login = store.login;
				login[name] = value;
				setStore({
					login,
					alert: false
				});
			},
			//Funciones pra modulo CheckIn
			serchRut: e => {
				const store = getStore();
				const actions = getActions();
				if (store.rut != "") {
					fetch("http://localhost:3000/api/v1/serchRut/" + store.rut, {
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
							if (data) {
								if (data.length === 0) {
									setStore({ noSon: true });
								} else {
									setStore({
										hijos: data
									});
									actions.checkIn();
								}
							} else setStore({ alert: true });
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else setStore({ alert: true });
			},
			checkInSon: (e, item, i) => {
				setStore({ status: true });
				const actions = getActions();
				const store = getStore();
				let newClassroom = store.cardArray.find(c => c.startAgeRank <= item.age && c.finaltAgeRank >= item.age);
				console.log(newClassroom);
				if (e.target.checked) {
					if (newClassroom.capacity != newClassroom.sonsInClassroom) {
						let sonToClassroom = store.sonToClassroom;
						let son = {
							id: item.id,
							sonName: item.sonName,
							birthDate: item.birthDate,
							notes: item.notes,
							families: item.families,
							age: item.age,
							classroomName: item.classroomName,
							hBirthDate: item.hBirthDate,
							parentPhone: item.parentPhone,
							classroomId: item.classroomId,
							parentName: item.parentName,
							parentsList: item.parentsList,
							parentRut: item.parentRut,
							fullClassroom: item.fullClassroom
						};
						sonToClassroom.push(son);
						setStore({ sonToClassroom });
						fetch("http://localhost:3000/api/v1/classroomPutAssintance/" + item.classroomId, {
							method: "PUT",
							body: JSON.stringify({
								sonsInClassroom: newClassroom.sonsInClassroom + 1
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
								console.log(data);
								actions.checkIn();
								setStore({ status: false });
							})
							.catch(error => {
								//error handling
								console.log(error);
							});
					} else {
						console.log(" aula ful");
						let hijos = store.hijos;
						hijos[i].fullClassroom = true;
						setStore({ hijos, status: false });
					}
				} else {
					let sonToClassroom = store.sonToClassroom;
					let foo = sonToClassroom.filter(f => f.id != item.id);
					let hijos = store.hijos;
					hijos.map(h => ((h.fullClassroom = false), (h.status = false)));
					console.log(hijos);

					fetch("http://localhost:3000/api/v1/classroomPutAssintance/" + item.classroomId, {
						method: "PUT",
						body: JSON.stringify({
							sonsInClassroom: newClassroom.sonsInClassroom - 1
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
							console.log(data);
							actions.checkIn();
							setStore({ status: false, sonToClassroom: foo, hijos });
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				}
			},
			outCheckin: (e, item) => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/currentClassroom", {
					method: "POST",
					body: JSON.stringify({
						newClass: store.sonToClassroom
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
						setStore({ hijos: [], rut: "", sonToClassroom: [] });
						actions.checkIn();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			logedEditRol: e => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/rol/" + store.usuarioLoged.id, {
					method: "PUT",
					body: JSON.stringify({
						name: store.usuario.name,
						rut: store.usuario.rut,
						email: store.usuario.email,
						rol: store.usuario.rol,
						phone: store.usuario.phone,
						password: store.usuario.password
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
							usuario: {
								name: data.name,
								rut: data.rut,
								email: data.email,
								rol: data.rol,
								phone: data.phone,
								password: data.password,
								rPassword: data.password
							},
							usuarioLoged: {
								name: data.name,
								rut: data.rut,
								email: data.email,
								rol: data.rol,
								phone: data.phone,
								password: data.password,
								rPassword: data.password
							}
						});
					});
			},
			capacityClassroon: () => {
				const store = getStore();
				let foo = store.hijos.length;
				console.log(foo);
				fetch("http://localhost:3000/api/v1/classroomPutAssintance/" + store.usuarioLoged.classrooms._id, {
					method: "PUT",
					body: JSON.stringify({
						sonsInClassroom: foo
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
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},

			classroom: e => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/currentClassroom/", {
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

						let hijos = data.filter(
							c =>
								store.usuarioLoged.classrooms.startAgeRank <= c.age &&
								store.usuarioLoged.classrooms.finaltAgeRank >= c.age
						);
						console.log(hijos);
						setStore({
							hijos,
							classroom: true,
							novedades: false,
							configCheckIn: false
						});
						actions.capacityClassroon();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			addTeacher: (item, i) => {
				const store = getStore();
				let selectedUsuarios = store.selectedUsuarios;
				let selectUSuarios = store.selectUSuarios;
				item["selected"] = true;
				selectedUsuarios.push(item);
				selectUSuarios.splice(i, 1);
				setStore({ selectedUsuarios, selectUSuarios });
			},
			removeTeacher: (item, i) => {
				const store = getStore();
				let selectedUsuarios = store.selectedUsuarios;
				let selectUSuarios = store.selectUSuarios;
				item["selected"] = false;
				selectUSuarios.push(item);
				selectedUsuarios.splice(i, 1);
				setStore({ selectedUsuarios, selectUSuarios });
			},
			button: (item, i) => {
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/currentClassroom/" + item._id, {
					method: "PUT",
					body: JSON.stringify({
						button: true
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
						actions.classroom();
						console.log(item.parentsList);
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			showBorder: (item, i) => {
				const store = getStore();
				const actions = getActions();
				fetch("http://localhost:3000/api/v1/currentClassroom/" + item._id, {
					method: "PUT",
					body: JSON.stringify({
						borderColor: "border-success",
						status: false
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
						let attendance = store.attendance;
						attendance = attendance + 1;
						setStore({
							attendance
						});
						actions.classroom();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			deleteCurrentClassroom: item => {
				const actions = getActions();
				const store = getStore();
				fetch("http://localhost:3000/api/v1/currentClassroom/" + store.id, {
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
						setStore({ sonName: "", id: "" });
						actions.classroom();
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			myData: item => {
				const store = getStore();
				setStore({
					apoderados: item.parentsList,
					hijo: { sonName: item.sonName, notes: item.notes, age: item.age }
				});
			},
			byeSon: item => {
				setStore({ sonName: item.sonName, id: item._id });
			},
			checkOutHijos: e => {
				const store = getStore();
				let checkOutHijos = store.hijos.filter(c => c.parentRut === store.rut);
				if (checkOutHijos.length > 0) {
					setStore({ checkOutHijos, rut: "" });
				} else setStore({ status: true });
			},
			exitCheckOut: () => {
				setStore({ checkOutHijos: [], rut: "", status: false });
			},
			checkOut: () => {
				const store = getStore();
				const actions = getActions();
				if (store.checkOutHijos.length > 0) {
					store.checkOutHijos.map(c => {
						fetch("http://localhost:3000/api/v1/currentClassroom/" + c._id, {
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
							})
							.catch(error => {
								//error handling
								console.log(error);
							});
					});
					setStore({ checkOutHijos: [] });
					actions.classroom();
				} else actions.exitCheckOut();
			},
			wrapper: () => {
				const classes = document.querySelector("#wrapper");
				classes.className.indexOf("hola") > -1
					? (classes.className = classes.className.replace("hola", ""))
					: (classes.className += " hola");
			}
		}
	};
};
export default getState;

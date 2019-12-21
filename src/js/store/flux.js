import { ENGINE_METHOD_STORE } from "constants";

const getState = ({ getStore, setStore, getActions }) => {
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
				name: "",
				rut: "",
				email: "",
				rol: "",
				phone: "",
				password: "",
				rPassword: "",
				logedIn: false
			},

			usuarios: [],
			//Variables para hacer Loing
			login: {
				rut: "",
				password: ""
			},
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
			selectRol: true
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
							editNewFamilia: false,
							goBackNewFamily: false,
							goBackEditFamily: false
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
							editNewFamilia: false,
							goBackNewFamily: false,
							goBackEditFamily: false,
							checkIn: false,
							configCheckIn: false,
							hijos: [],
							rut: ""
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
							familyName: "",
							goBackNewFamily: false,
							goBackEditFamily: false
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			roles: e => {
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
							selectRol: true
						});
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
					goBackEditFamily: false
				});
			},
			checkIn: e => {
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
							cardArray: data,
							checkIn: true,
							novedades: false,
							configCheckIn: false
						});
					})
					.catch(error => {
						//error handling
						console.log(error);
					});

				setStore({ checkIn: true, novedades: false, configCheckIn: false });
			},
			configCheckIn: e => {
				setStore({
					configCheckIn: true,
					novedades: false,
					checkIn: false,
					hijos: [],
					rut: "",
					selectRol: false
				});
			},
			//Funciones para la creacion de aulas
			getData: e => {
				//Toma la data del Input y la coloca en las variables del store
				const store = getStore();
				const { name, value } = e.target;
				setStore({ [name]: value, alert: false, hijos: [] });
			},
			getDataSelect: e => {
				//Toma la data del Input y la coloca en las variables del store
				console.log(e.target.value);
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
			indextodeleteClassroon: (item, i) => {
				setStore({
					id: item._id,
					index: i
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
						let novedadesArray = store.novedadesArray;
						novedadesArray.push(data);
						setStore({
							news: "",
							novedadesArray
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
					cardEdited: true,
					id: "",
					index: ""
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
							familyName: item.familyName,
							goBackNewFamily: false,
							goBackEditFamily: true
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
			deleteNewFamilia: (e, item, i) => {
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
							id: "",
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
				if (store.cardEdited) {
					if (store.usuario.password === store.usuario.rPassword) {
						if (store.usuario.rol != "Elige una opcion...") {
							fetch("http://localhost:3000/api/v1/roles", {
								method: "POST",
								body: JSON.stringify({
									name: store.usuario.name,
									rut: store.usuario.rut,
									email: store.usuario.email,
									phone: store.usuario.phone,
									rol: store.usuario.rol,
									password: store.usuario.password
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
										usuarios
									});
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
					index: ""
				});
			},
			deleteUsuarios: (item, i) => {
				const store = getStore();
				fetch("http://localhost:3000/api/v1/rol/" + store.id, {
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
						rol: item.rol
					},
					index: i,
					cardEdited: false,
					id: item._id
				});
			},
			familyLastName: e => {
				setStore({
					familyLastName: true,
					familiasss: false,
					addApoderado: false,
					familyOptions: false,
					addHijo: false,
					menu: false
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
							id: data._id,
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
				fetch("http://localhost:3000/api/v1/family/" + store.id, {
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
								usuario: {
									name: data.name,
									rut: data.rut,
									email: data.email,
									rol: data.rol,
									phone: data.phone,
									password: data.password,
									rPassword: data.password,
									logedIn: true
								},
								id: data._id
							});
							history.push("/" + data.rol);
						} else setStore({ alert: true });

						//this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
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
								setStore({
									hijos: data
								});
							} else setStore({ alert: true });
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else setStore({ alert: true });
			},
			checkInSon: (e, item) => {
				const store = getStore();
				if (e.target.checked) {
					fetch("http://localhost:3000/api/v1/currentClassroom", {
						method: "POST",
						body: JSON.stringify({
							id: item.id,
							sonName: item.sonName,
							birthDate: item.birthDate,
							notes: item.notes,
							families: item.families,
							age: item.age,
							classroomName: item.classroomName
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

							//this will print on the console the exact object received from the server
						})
						.catch(error => {
							//error handling
							console.log(error);
						});
				} else {
					fetch("http://localhost:3000/api/v1/currentClassroom/" + item.id, {
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
				}
			},
			outCheckin: (e, item) => {
				const store = getStore();
				setStore({ hijos: [], rut: "" });
			},
			logedEditRol: e => {
				const store = getStore();
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
						setStore({
							usuario: {
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
			classroom: e => {
				const store = getStore();
				setStore({ classroom: true });
			},
			classroomList: e => {
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
						setStore({
							hijos: data
						});
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

import { Card } from "react-bootstrap";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: null,
			currentUser: null,
			isLogged: false,
			photo: null,
			name: "",
			active: false,
			description: "",
			position: "",
			price: "",
			amount: "",
			products: null,
			category_id: "",
			subcategory_id: "",
			lastname: "",
			email: "",
			password: "",
			password2: "",
			cart: [],
			categories: null,
			subcategories: null,
			cartTotal: 0,
			relatedProducts: [],
			filteredProducts: [],
			order: null,
			orderHistory: [],






			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			checkUser: () => {
				const token = sessionStorage.getItem("token")
				if (token) {
					setStore({
						token: token,
						isLogged: true,
						currentUser: JSON.parse(sessionStorage.getItem("currentUser"))
					})
				}

			},
			handleSubmit: async (e) => {
				e.preventDefault();
				try {
					const { email, password } = e.target
					console.log("Datos enviados:", email.value, password.value)
					const response = await fetch("https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/login", {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify({ email: email.value, password: password.value })
					})
					if (response.ok) {

						const data = await response.json();
						console.log("Respuesta del servidor: ", data)
						const currentUser = {
							email: email.value,
							admin: data.admin || false,
							name: data.name,
							lastname: data.lastname,
							photo: data.photo
						};

						console.log("Token:", data.token);
						sessionStorage.setItem("token", data.token);
						sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
						localStorage.setItem("token", data.token);

						setStore({
							token: data.token,
							isLogged: true,
							currentUser
						})
						email.value = ""
						password.value = ""

					}
					else {
						console.error("Error de autenticación:", response.status);
						const errorData = await response.json();
						if (errorData.message === "Contraseña incorrecta") {
							alert("La contraseña ingresada no es correcta. Por favor, intenta nuevamente.");
						} else {
							alert(`Error: ${errorData.message}`);
						}
					}
				} catch (error) {
					console.error("Error al realizar el fetch: ", error)
				}

			},

			logout: () => {
				sessionStorage.removeItem("token");
				sessionStorage.removeItem("currentUser");
				setStore({
					token: null,
					isLogged: false,
					currentUser: null,
				});
				window.location.href = "/";
			},
			setPhoto: (e) => {
				setStore({ photo: e.target.files[0] })
			},
			handleChange: e => {
				const { name, value } = e.target
				setStore({
					[name]: value
				})
			},
			createProduct: async (e) => {
				try {
					e.preventDefault()
					const { name, photo, active, description, position, price, amount, category_id, subcategory_id } = getStore()

					const formData = new FormData();
					formData.append("name", name);
					formData.append("photo", photo);
					formData.append("active", active);
					formData.append("description", description);
					formData.append("position", position);
					formData.append("price", price);
					formData.append("amount", amount);
					formData.append("category_id", category_id);
					formData.append("subcategory_id", subcategory_id);


					const cloudResponse = await fetch(
						"https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products",
						{
							method: "POST",
							body: formData,
						}
					);
					if (!cloudResponse.ok) {
						throw new Error("Error al subir el producto, error 400")
					}
					const data = await cloudResponse.json()
					console.log("Se ha creado el producto", data)
					alert("Producto creado correctamente")



					setStore({
						name: "",
						photo: null,
						active: false,
						description: "",
						position: "",
						price: "",
						amount: "",
						category_id: "",
						subcategory_id: "",

					})

				}
				catch (error) {
					console.log("Error creando el producto", error.message)
					alert(error.message)
				}
			},
			deleteProduct: async (id) => {
				try {
					const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products/${id}`, {
						method: 'DELETE',
						headers: {
							"Content-Type": "application/json"
						}
					});
					if (response.ok) {
						alert("Producto eliminado con éxito")
						getActions().fetchProducts()
					} else {
						throw new Error("Error eliminando el producto");
					}
				}
				catch (error) {
					console.error("Problemas eliminando el producto", error)
				}
			},
			fetchProducts: async () => {
				try {
					const response = await fetch("https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products");
					const data = await response.json();
					setStore({ products: data });
				} catch (error) {
					console.error("Error al cargar productos:", error);
				}
			},
			editProduct: async (e, id) => {
				try {
					e.preventDefault()
					const { name, photo, active, description, position, price, amount, category_id, subcategory_id } = getStore()

					const formData = new FormData();
					formData.append("name", name);
					formData.append("photo", photo);
					formData.append("active", active);
					formData.append("description", description);
					formData.append("position", position);
					formData.append("price", price);
					formData.append("amount", amount);
					formData.append("category_id", category_id);
					formData.append("subcategory_id", subcategory_id);


					const cloudResponse = await fetch(
						"https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products/" + id,
						{
							method: "PUT",
							body: formData,
						}
					);
					if (!cloudResponse.ok) {
						throw new Error("Error al actualizar el producto, error 400")
					}
					const data = await cloudResponse.json()
					console.log("Se ha actualizado  el producto", data)
					alert("Producto actualizado correctamente")



					setStore({
						name: "",
						photo: null,
						active: false,
						description: "",
						position: "",
						price: "",
						amount: "",
						category_id: "",
						subcategory_id: "",

					})

				}
				catch (error) {
					console.log("Error creando el producto", error.message)
					alert(error.message)
				}
			},
			getProductById: async (id) => {
				try {
					const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products/${id}`);
					if (!response.ok)
						throw new Error("Error en el fetch");

					const product = await response.json();
					console.log(product)
					setStore({
						id: product.id,
						name: product.name,
						photo: product.photo,
						active: product.active,
						description: product.description,
						position: product.position,
						price: product.price,
						amount: product.amount,
						category_id: product.category_id,
						subcategory_id: product.subcategory_id,
						order: product.order,
						category: product.category,
						subcategory: product.subcategory,

					})
				} catch (error) {
					console.error("Error en el fetch1:", error);
				}

			},
			updateProduct: async (id, updatedProduct) => {
				try {
					const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products/${id}`, {
						method: "PUT",
						body: formData,
					});
					if (!response.ok) throw new Error("Error al actualizar producto");
					const data = await response.json();


					const store = getStore();
					const updatedProducts = store.products.map((product) =>
						product.id === id ? data.product : product
					);
					setStore({ products: updatedProducts });

					return true;
				} catch (error) {
					console.error("Error actualizando producto:", error);
					return false;
				}



			},
			handleSubmitRegister: async (e) => {
				e.preventDefault();
				try {
					const { email, password, name, lastname, password2 } = getStore()
					if (password !== password2) {
						alert("Las contraseñas no coinciden")
						return;
					}
					console.log({ email: email, password: password, name: name, lastname: lastname })
					const response = await fetch("https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/register", {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify({ email: email, password: password, name: name, lastname: lastname })
					})
					if (response.ok) {

						const data = await response.json();
						const currentUser = {
							email: data.email,
							name: data.name,
							lastname: data.lastname,
							admin: data.admin || false,

						};
						sessionStorage.setItem("token", data.token);
						sessionStorage.setItem("currentUser", JSON.stringify(currentUser));
						setStore({
							token: data.token,
							isLogged: true,
							email: "",
							name: "",
							lastname: "",
							password: "",
							password2: "",
							currentUser
						})
						alert("Usuario creado correctamente")


					}
				} catch (error) {
					console.error("Error al realizar el fetch: ", error)
				}

			},
			addToCart: (id, name, photo, description, price, quantity = 1) => {
				const store = getStore()
				if (store.cart.find(item => item.id == id)) {
					const updatedCart = [...store.cart]
					const cartItem = updatedCart.find(item => item.id == id)
					cartItem.quantity += 1
					const total = updatedCart.reduce((total, item) => total += item.price * item.quantity, 0)
					setStore({
						cart: updatedCart,
						cartTotal: total
					})

				} else {
					const newCartItem = { id, name, photo, description, price, quantity }
					const updatedCart = [...store.cart, newCartItem]
					const total = updatedCart.reduce((total, item) => total += item.price * item.quantity, 0)
					setStore({
						cart: updatedCart,
						cartTotal: total
					})
				}
			},
			loadProducts: async () => {
				try {
					const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products`);
					if (!response.ok)
						throw new Error("Error en el fetch");

					const products = await response.json();


				}

				catch (error) {
					console.error("Error en el fetch1:", error);
				}
			},
			getCategories: async () => {
				try {
					const response = await fetch("https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/categories")
					const data = await response.json()
					setStore({
						categories: data
					})
				} catch (error) {
					console.log(error)


				}
			},
			getSubCategories: async () => {
				try {
					const store = getStore()
					const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/subcategories`)
					const data = await response.json()
					setStore({
						subcategories: data
					})
				} catch (error) {
					console.log(error)


				}
			},
			removeFromCart: (id) => {
				const store = getStore();
				const updatedCart = store.cart.filter((item) => item.id !== id)
				const total = updatedCart.reduce((total, item) => total += item.price * item.quantity, 0)
				setStore({
					cart: updatedCart,
					cartTotal: total
				})
			},
			updateCart: (id, quantity) => {
				const store = getStore();
				const newCart = [...store.cart]
				const updatedCart = newCart.find((item) => item.id == id)
				updatedCart.quantity = quantity

				const total = newCart.reduce((total, item) => total += item.price * item.quantity, 0)

				setStore({
					cart: newCart,
					cartTotal: total
				})
			},
			loadProductByCategoryRelated: async (category) => {
				try {
					const store = getStore()
					const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products/related/${category}`);

					if (!response.ok)
						throw new Error("Error en el fetch");

					const products = await response.json();


					setStore({
						relatedProducts: products
					})

				} catch (error) {
					console.error("Error en el fetch:", error);
				}
			},
			updateProfile: async (e) => {
				e.preventDefault()
				const { name, lastname } = e.target
				try {
					const { currentUser, token } = getStore()
					const response = await fetch('https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/profile', {
						method: "PUT",
						body: JSON.stringify({ name: name.value, lastname: lastname.value }),
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						}
					})

					const data = await response.json()
					currentUser.name = data?.profile?.name
					currentUser.lastname = data?.profile?.lastname
					sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
					setStore({
						currentUser
					})
					alert(data?.message)
				} catch (error) {

				}
			},
			updatePassword: async (e) => {
				e.preventDefault()
				const { current_password, new_password, confirm_password } = e.target
				if (new_password.value !== confirm_password.value) {
					alert("Las contraseñas no coinciden")
					return;
				}
				try {
					const { currentUser, token } = getStore()
					const response = await fetch('https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/update-password', {
						method: "PUT",
						body: JSON.stringify({ current_password: current_password.value, new_password: new_password.value }),
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token
						}
					})

					const data = await response.json()


					setStore({
						currentUser
					})
					alert(data?.message)
				} catch (error) {

				}
				finally {
					current_password.value = ""
					new_password.value = ""
					confirm_password.value = ""
				}
			},
			getProductByName: async (search) => {
				try {
					const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products/search?q=${search}`);
					if (!response.ok)
						throw new Error("Error en el fetch");

					const data = await response.json();
					console.log(data)

					setStore({
						products: data,


					})
				} catch (error) {
					console.error("Error en el fetch:", error);
				}

			},
			loadProducts: async () => {
				try {
					const response = await fetch(`https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/products`);
					if (!response.ok)
						throw new Error("Error en el fetch");

					const productsCharge = await response.json();

					setStore({
						products: productsCharge
					})


				}

				catch (error) {
					console.error("Error en el fetch:", error);
				}
			},
			addToOrder: async () => {
				setStore({
					order: getStore().cart,
					
					
				})

			},
			clearCart: () =>{
				setStore({ cart:[]})
			},
			// saveOrderDataBase: async () => {

			// }



			// FUNCIONA PERO MAL
			formatNumber(num) {

				return new Intl.NumberFormat('es-CL').format(num);
			}

			// FUNCIONA PERO MAL
			// agregarMiles(numero, separador = '.') {
			// 	if (typeof numero != 'number' || !Number.isInteger(numero)) {
			// 		return null;
			// 	}
			// 	numero = String(numero)
			// 	let partes = numero.replace(/\B(?=(\d{3})+(?!\d))/g, separador)
			// 	return partes;
			// },


			// FUNCIONA PERO MAL
			// agregarMiles(numero){
			// 	let numeroStr = numero.toString();
			// 	let [parteEntera, parteDecimal] = numeroStr.split(".");
			// 	parteEntera = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
			// 	if (parteDecimal) {
			// 		parteDecimal = parteDecimal.substring(0, 2);
			// 		return `${parteEntera},${parteDecimal}`;
			// 	  }
			// 	  return parteEntera;
			// 	}

			// agregarMiles(numero){
			// 	Number(numero)
			// 	if (isNaN(numero)) return '';
			// 	let numeroRedondeado = (Math.round(numero * 100) / 100).toFixed(2)
			// 	let [parteEntera, parteDecimal] = numeroRedondeado.split(".");
			// 	parteEntera = parteEntera.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
			// 	if (parteDecimal) {
			// 		return `${parteEntera},${parteDecimal}`;
			// 	  }
			// 	  return parteEntera;z
			// 	}	

		}
	};
}

export default getState;

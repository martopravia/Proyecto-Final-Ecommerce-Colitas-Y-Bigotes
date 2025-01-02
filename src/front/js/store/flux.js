const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			token: null,
			currentUser: null,
			isLogged: false,

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
					const response = await fetch("https://opulent-succotash-pjgxgx4rq7xqcr4rg-3001.app.github.dev/api/login", {
						method: "POST",
						headers: {
							"Content-type": "application/json"
						},
						body: JSON.stringify({ email: email.value, password: password.value })
					})
					if (response.ok) {

						const data = await response.json();
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
						setStore({
							token: data.token,
							isLogged: true,
							currentUser
						})
						email.value = ""
						password.value = ""

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
			}

		}
	};
};

export default getState;

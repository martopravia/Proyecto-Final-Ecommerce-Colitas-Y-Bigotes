const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			currentUser: {
				email: "usuario.admin@gmail.com",
				admin: true,
				token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTczNTU2NzM5OSwianRpIjoiNzVmYzExMzAtMDA5YS00ZWE0LWIzMzItYTMwZDI2ZTY5YmY0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MTAsIm5iZiI6MTczNTU2NzM5OSwiY3NyZiI6IjgyODQ5NTMyLTJlYzEtNDU5NS05NDA4LTIxZjNlZGQ2YzllOSIsImV4cCI6MTczNTgyNjU5OX0.vt5juDY1FqFfqUKw2Cd8Frmi4vjiMTwsieXi4wbd-vE",

			},
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
			}
		}
	};
};

export default getState;

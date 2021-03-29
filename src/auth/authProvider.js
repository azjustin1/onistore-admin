import inMemoryJWT from "./inMemoryJWT";

const authProvider = {
	login: ({ username, password }) => {
		const request = new Request("http://localhost:3000/signin", {
			method: "POST",
			body: JSON.stringify({ username, password }),
			headers: new Headers({ "Content-Type": "application/json" }),
		});
		return fetch(request)
			.then((response) => {
				if (response.status < 200 || response.status >= 300) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then((auth) => {
				localStorage.setItem("auth", JSON.stringify(auth));
			})
			.catch(() => {
				throw new Error("Network error");
			});
	},
	logout: () => {
		localStorage.removeItem("auth");
		return Promise.resolve();
	},

	checkAuth: () => {
		return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
	},

	checkError: (error) => {
		const status = error.status;
		if (status === 401 || status === 403) {
			localStorage.removeItem("auth");
			return Promise.reject();
		}
		return Promise.resolve();
	},

	getPermissions: () => {
		return inMemoryJWT.getToken() ? Promise.resolve() : Promise.reject();
	},
};

export default authProvider;

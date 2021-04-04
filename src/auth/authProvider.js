import inMemoryJWT from "./inMemoryJWT";

let END_POINT = "http://localhost:8000/api";

const authProvider = {
	login: ({ username, password }) => {
		const request = new Request(END_POINT + "/signin", {
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
				localStorage.setItem("auth", auth.token);
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
		const request = new Request(END_POINT + "/admin/auth", {
			method: "GET",
			headers: new Headers({
				"Content-Type": "application/json",
				Authorization: "Bearer " + localStorage.getItem("auth"),
			}),
		});

		return fetch(request)
			.then((response) => {
				if (response.status < 200 || response.status >= 300) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.catch(() => {
				throw new Error("Network error");
			});
	},

	checkError: (error) => {
		const status = error.status;
		if (status === 401 || status === 403) {
			localStorage.removeItem("auth");
			return Promise.reject();
		}
		// other error code (404, 500, etc): no need to log out
	},

	getPermissions: () => {
		// return localStorage.getItem("auth") ? Promise.resolve() : Promise.reject();
		return Promise.resolve();
	},
};

export default authProvider;

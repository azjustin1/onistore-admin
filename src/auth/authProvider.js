export default {
	// authentication
	login: ({ username, password }) => {
		console.log({ username, password });
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
		localStorage.setItem("not_authenticated", true);
		localStorage.removeItem("role");
		localStorage.removeItem("login");
		localStorage.removeItem("user");
		return Promise.resolve();
	},
	checkError: ({ status }) => {
		return status === 401 || status === 403
			? Promise.reject()
			: Promise.resolve();
	},
	checkAuth: () => {
		return localStorage.getItem("not_authenticated")
			? Promise.reject()
			: Promise.resolve();
	},
	getPermissions: () => {
		const role = localStorage.getItem("role");
		return Promise.resolve(role);
	},
	getIdentity: () => {
		return {
			id: localStorage.getItem("login"),
			fullName: localStorage.getItem("user"),
			avatar: localStorage.getItem("avatar"),
		};
	},
};

import { stringify } from "query-string";
import { fetchUtils } from "react-admin";

const apiUrl = "http://localhost:8000/api/admin";

// const httpClient = fetchUtils.fetchJson;
const httpClient = async (url, options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: "application/json" });
	}
	const token = await localStorage.getItem("auth");
	options.headers.set("Authorization", `Bearer ${token}`);
	return fetchUtils.fetchJson(url, options);
};

export default {
	getList: async (resource, params) => {
		const { page, perPage } = params.pagination;
		const { field, order } = params.sort;

		const query = {
			sort: JSON.stringify([field, order]),
			range: JSON.stringify((page - 1) * perPage, page * perPage - 1),
			filter: JSON.stringify(params.filter),
		};
		const url = `${apiUrl}/${resource}?${stringify(query)}`;

		const { headers, json } = await httpClient(url);

		if (params.filter.q || params.filter.description)
			return {
				data: json
					.slice((page - 1) * perPage, page * perPage - 1)
					.sort(dynamicSort(field, order)) // This will call the dynamic sort function at the end of the file
					.filter((e) => {
						return (
							e.name == params.filter.q ||
							e.description == params.filter.description
						);
					}),
				total: parseInt(headers.get("X-Total-Count").split("/").pop(), 10),
			};

		return {
			data: json
				.slice((page - 1) * perPage, page * perPage - 1)
				.sort(dynamicSort(field, order)), // This will call the dynamic sort function at the end of the file
			total: parseInt(headers.get("X-Total-Count").split("/").pop(), 10),
		};
	},

	getOne: async (resource, params) => {
		const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
		if (resource === "products")
			return {
				data: {
					id: json.products.id,
					name: json.products.name,
					description: json.products.description,
					amount: json.products.amount,
					created_at: json.products.created_at,
					updated_at: json.products.updated_at,
				},
			};
	},

	getMany: (resource, params) => {
		const query = {
			filter: JSON.stringify({ id: params.ids }),
		};
		const url = `${apiUrl}/${resource}?${stringify(query)}`;
		return httpClient(url).then(({ json }) => ({ data: json }));
	},

	getManyReference: (resource, params) => {
		const { page, perPage } = params.pagination;
		const { field, order } = params.sort;
		const query = {
			sort: JSON.stringify([field, order]),
			range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
			filter: JSON.stringify({
				...params.filter,
				[params.target]: params.id,
			}),
		};
		const url = `${apiUrl}/${resource}?${stringify(query)}`;

		return httpClient(url).then(({ headers, json }) => ({
			data: json,
			total: parseInt(headers.get("X-Total-Count").split("/").pop(), 10),
		}));
	},

	update: (resource, params) =>
		httpClient(`${apiUrl}/${resource}/${params.id}`, {
			method: "PUT",
			body: JSON.stringify(params.data),
		}).then(({ json }) => ({ data: json })),

	updateMany: (resource, params) => {
		const query = {
			filter: JSON.stringify({ id: params.ids }),
		};
		return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
			method: "PUT",
			body: JSON.stringify(params.data),
		}).then(({ json }) => ({ data: json }));
	},

	create: (resource, params) =>
		httpClient(`${apiUrl}/${resource}`, {
			method: "POST",
			body: JSON.stringify(params.data),
		}).then(({ json }) => ({
			data: { ...params.data, id: json.id },
		})),

	delete: (resource, params) =>
		httpClient(`${apiUrl}/${resource}/${params.id}`, {
			method: "DELETE",
		}).then(({ json }) => ({ data: json })),

	deleteMany: (resource, params) => {
		const query = {
			filter: JSON.stringify({ id: params.ids }),
		};

		return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
			method: "DELETE",
			body: JSON.stringify(params.data),
		}).then(({ json }) => ({ data: json }));
	},
};

// This function to sort object array by key and order
function dynamicSort(property, order) {
	let sortOrder = 1;
	if (order === "DESC") {
		sortOrder = -1;
	}
	return function (a, b) {
		let aProp = a[property];
		let bProp = b[property];
		if (!a.hasOwnProperty(property)) {
			aProp = "";
		}
		if (!b.hasOwnProperty(property)) {
			bProp = "";
		}
		const result = aProp < bProp ? -1 : aProp > bProp ? 1 : 0;
		return result * sortOrder;
	};
}

import jsonServerProvider from "ra-data-json-server";
import * as React from "react";
import { Admin, fetchUtils, Resource } from "react-admin";
import authProvider from "./auth/authProvider";
import { ProductEdit } from "./resources/products/ProductEdit";
import { ProductList } from "./resources/products/ProductList";
import { ProductShow } from "./resources/products/ProductShow";

const httpClient = (url, options = {}) => {
	if (!options.headers) {
		options.headers = new Headers({ Accept: "application/json" });
	}
	const { token } = JSON.parse(localStorage.getItem("auth"));
	options.headers.set("Authorization", `Bearer ${token}`);
	return fetchUtils.fetchJson(url, options);
};

let dataProvider = jsonServerProvider("http://localhost:3000", httpClient);

const App = () => {
	return (
		<Admin dataProvider={dataProvider} authProvider={authProvider}>
			<Resource
				dataProvider={dataProvider}
				name="products"
				list={ProductList}
				show={ProductShow}
				edit={ProductEdit}
			/>
		</Admin>
	);
};

export default App;

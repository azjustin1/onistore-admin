import * as React from "react";
import {
	Admin,
	fetchUtils,
	ListGuesser,
	Resource,
	SearchInput,
} from "react-admin";
import authProvider from "./auth/authProvider";
import Dashboard from "./Dashboard";
import { ProductEdit } from "./resources/products/ProductEdit";
import { ProductList } from "./resources/products/ProductList";
import { ProductShow } from "./resources/products/ProductShow";
import { ProductCreate } from "./resources/products/ProductCreate";
import { ProductFilter } from "./resources/products/ProductFilter";
import StorageIcon from "@material-ui/icons/Storage";
import jsonServerProvider from "ra-data-json-server";
import dataProvider from "./data/dataProvider";

// const httpClient = (url, options = {}) => {
// 	if (!options.headers) {
// 		options.headers = new Headers({ Accept: "application/json" });
// 	}
// 	const { token } = JSON.parse(localStorage.getItem("auth"));
// 	options.headers.set("Authorization", `Bearer ${token}`);
// 	return fetchUtils.fetchJson(url, options);
// };

// let dataProvider = jsonServerProvider("http://localhost:8000/api", httpClient);

const App = () => {
	return (
		<Admin
			dashboard={Dashboard}
			dataProvider={dataProvider}
			authProvider={authProvider}>
			<Resource
				name="products"
				filter={ProductFilter}
				list={ProductList}
				show={ProductShow}
				create={ProductCreate}
				edit={ProductEdit}
				icon={StorageIcon}
			/>
			<Resource name="categories" list={ListGuesser} />
		</Admin>
	);
};

export default App;

import StorageIcon from "@material-ui/icons/Storage";
import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import authProvider from "./auth/authProvider";
import Dashboard from "./Dashboard";
import dataProvider from "./data/dataProvider";
import { ProductCreate } from "./resources/products/ProductCreate";
import { ProductEdit } from "./resources/products/ProductEdit";
import { ProductFilter } from "./resources/products/ProductFilter";
import { ProductList } from "./resources/products/ProductList";
import { ProductShow } from "./resources/products/ProductShow";

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

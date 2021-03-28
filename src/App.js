import jsonServerProvider from "ra-data-json-server";
import * as React from "react";
import { Admin, Resource, Authenticated } from "react-admin";
import authProvider from "./auth/authProvider";
import { UserCreate } from "./pages/users/UserCreate";
import { UserEdit } from "./pages/users/UserEdit";
import { UserList } from "./pages/users/UserList";
import { ProductList } from "./pages/products/ProductList";

let dataProvider = jsonServerProvider("http://localhost:3000");

const App = () => {
	return (
		<Admin dataProvider={dataProvider}>
			<Resource
				name="users"
				list={UserList}
				create={UserCreate}
				edit={UserEdit}
			/>
			<Resource
				dataProvider={dataProvider}
				name="products"
				list={ProductList}
			/>
		</Admin>
	);
};

export default App;

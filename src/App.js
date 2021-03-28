import * as React from "react";

import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { UserList } from "./pages/users";
import { authProvider } from "./auth/auth";

const dataProvider = jsonServerProvider("http://localhost:9000");

const App = () => (
	<Admin dataProvider={dataProvider}>
		<Resource name="users" list={UserList} />
	</Admin>
);

export default App;

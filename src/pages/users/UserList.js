// in src/users.js
import * as React from "react";
import {
	List,
	Datagrid,
	TextField,
	EmailField,
	EditButton,
	DeleteButton,
} from "react-admin";

export const UserList = (props) => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="email" />
			{/* <TextField source="first_name" />
			<TextField source="last_name" />
			<EmailField source="address" />
			<EditButton basePath="users" />
			<DeleteButton basePath="users" /> */}
		</Datagrid>
	</List>
);

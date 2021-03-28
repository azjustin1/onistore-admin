// in src/users.js
import * as React from "react";
import {
	List,
	Datagrid,
	TextField,
	EmailField,
	DateField,
	EditButton,
	DeleteButton,
} from "react-admin";

export const ProductList = (props) => (
	<List {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="name" />
			<TextField source="description" />
			<TextField source="amount" />
			<DateField source="created_at" />
			<DateField source="updated_at" />
			<EditButton basePath="products" />
			<DeleteButton basePath="products" />
		</Datagrid>
	</List>
);

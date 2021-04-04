// in src/users.js
import * as React from "react";
import {
	List,
	Datagrid,
	TextField,
	DateField,
	ShowButton,
	EditButton,
	DeleteButton,
	Filter,
} from "react-admin";

import { ProductFilter } from "./ProductFilter";

export const ProductList = (props) => (
	<List filters={<ProductFilter />} {...props}>
		<Datagrid rowClick="edit">
			<TextField source="id" />
			<TextField source="name" />
			<TextField source="description" />
			<TextField source="amount" />
			<DateField source="created_at" />
			<DateField source="updated_at" />
			<ShowButton basePath="products" />
			<EditButton basePath="products" />
			<DeleteButton basePath="products" />
		</Datagrid>
	</List>
);

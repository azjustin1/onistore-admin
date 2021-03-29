// in src/users.js
import * as React from "react";
import { Create, SimpleForm, TextInput, PasswordInput } from "react-admin";

export const UserCreate = (props) => (
	<Create title="Create" {...props}>
		<SimpleForm>
			<TextInput source="first_name" />
			<TextInput source="last_name" />
			<PasswordInput source="password" />
			<TextInput source="address" />
		</SimpleForm>
	</Create>
);

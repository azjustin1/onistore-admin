import * as React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

export const UserEdit = (props) => (
	<Edit title="Edit" {...props}>
		<SimpleForm>
			<TextInput source="first_name" />
			<TextInput source="last_name" />
			<TextInput source="address" />
		</SimpleForm>
	</Edit>
);

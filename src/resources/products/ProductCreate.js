import { Create, SimpleForm, TextInput } from "react-admin";
import React from "react";

function ProductCreate(props) {
	return (
		<Create {...props}>
			<SimpleForm>
				<TextInput source="name" />
			</SimpleForm>
		</Create>
	);
}

export default ProductCreate;

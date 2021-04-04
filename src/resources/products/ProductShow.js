import { Show, TextField, DateField, SimpleFormView } from "react-admin";

export const ProductShow = (props) => {
	return (
		<Show {...props}>
			<SimpleFormView>
				<TextField source="id" />
				<TextField source="name" />
				<TextField source="description" />
				<TextField source="amount" />
				<DateField source="created_at" />
				<DateField source="updated_at" />
			</SimpleFormView>
		</Show>
	);
};

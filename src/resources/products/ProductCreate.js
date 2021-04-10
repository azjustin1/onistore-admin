import RichTextInput from "ra-input-rich-text";
import { Create, NumberInput, SimpleForm, TextInput } from "react-admin";

export const ProductCreate = (props) => {
	return (
		<Create {...props}>
			<SimpleForm>
				<TextInput source="name" />
				<NumberInput source="quantity" />
				<NumberInput source="price" />
				<NumberInput source="fake_price" />
				<RichTextInput source="description" />
			</SimpleForm>
		</Create>
	);
};

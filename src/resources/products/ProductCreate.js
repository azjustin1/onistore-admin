import {
	DateInput,
	Edit,
	NumberInput,
	SimpleForm,
	TextInput,
	Create,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const ProductCreate = (props) => {
	return (
		<Create {...props}>
			<SimpleForm>
				<SimpleForm>
					<TextInput source="name" />
					<NumberInput source="amount" />
					<DateInput source="created_at" />
					<DateInput source="updated_at" />
					<RichTextInput source="description" />
				</SimpleForm>
			</SimpleForm>
		</Create>
	);
};

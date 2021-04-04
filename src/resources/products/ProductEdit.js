import {
	DateInput,
	Edit,
	NumberInput,
	SimpleForm,
	TextInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

export const ProductEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<NumberInput source="amount" />
			<DateInput source="created_at" />
			<DateInput source="updated_at" />
			<RichTextInput source="description" />
		</SimpleForm>
	</Edit>
);

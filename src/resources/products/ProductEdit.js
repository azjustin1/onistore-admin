import RichTextInput from "ra-input-rich-text";
import { Edit, NumberInput, SimpleForm, TextInput } from "react-admin";

const configureQuill = (quill) =>
	quill.getModule("toolbar").addHandler("bold", function (value) {
		this.quill.format("bold", value);
	});

export const ProductEdit = (props) => (
	<Edit {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<NumberInput source="quantity" />
			<NumberInput source="price" />
			<NumberInput source="fake_price" />
			<RichTextInput source="description" configureQuill={configureQuill} />
		</SimpleForm>
	</Edit>
);

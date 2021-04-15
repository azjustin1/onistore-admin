import RichTextInput from "ra-input-rich-text";
import {
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

const configureQuill = (quill) =>
  quill.getModule("toolbar").addHandler("bold", function (value) {
    this.quill.format("bold", value);
  });

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <NumberInput source="quantity" validate={[required()]} />
      <NumberInput source="price" validate={[required()]} />
      <NumberInput source="fake_price" validate={[required()]} />
      <RichTextInput source="description" configureQuill={configureQuill} />
    </SimpleForm>
  </Edit>
);

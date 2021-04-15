import RichTextInput from "ra-input-rich-text";
import {
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";

export const ProductCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <NumberInput source="quantity" validate={[required()]} />
        <NumberInput source="price" validate={[required()]} />
        <NumberInput source="fake_price" validate={[required()]} />
        <RichTextInput source="description" />
      </SimpleForm>
    </Create>
  );
};

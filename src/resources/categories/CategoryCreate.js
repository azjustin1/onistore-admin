import RichTextInput from "ra-input-rich-text";
import { Create, SimpleForm, TextInput, required } from "react-admin";

export const CategoryCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <RichTextInput source="description" validate={[required()]} />
      </SimpleForm>
    </Create>
  );
};

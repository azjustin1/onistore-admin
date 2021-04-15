import RichTextInput from "ra-input-rich-text";
import { Edit, SimpleForm, TextInput, required } from "react-admin";

const configureQuill = (quill) =>
  quill.getModule("toolbar").addHandler("bold", function (value) {
    this.quill.format("bold", value);
  });

export const CategoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <RichTextInput source="description" configureQuill={configureQuill} />
    </SimpleForm>
  </Edit>
);

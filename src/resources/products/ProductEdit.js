import RichTextInput from "ra-input-rich-text";
import {
  Edit,
  NumberInput,
  SimpleForm,
  TextInput,
  required,
  ImageInput,
  ImageField,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  ArrayField,
  SingleFieldList,
  ChipField,
} from "react-admin";

const configureQuill = (quill) =>
  quill.getModule("toolbar").addHandler("bold", function (value) {
    this.quill.format("bold", value);
  });

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required()]} />
      <ArrayField source="category">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <NumberInput source="quantity" min={0} validate={[required()]} />
      <NumberInput source="price" min={1000} validate={[required()]} />
      <NumberInput source="fake_price" min={1000} validate={[required()]} />
      <RichTextInput source="description" configureQuill={configureQuill} />
    </SimpleForm>
  </Edit>
);

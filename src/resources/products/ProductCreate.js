import RichTextInput from "ra-input-rich-text";
import {
  Create,
  NumberInput,
  SimpleForm,
  TextInput,
  required,
  ImageInput,
  ImageField,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
  ChipField,
} from "react-admin";

export const ProductCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" validate={[required()]} />
        <ReferenceInput
          label="Category"
          source="categories"
          reference="categories"
          validate={[required()]}
        >
          <SelectArrayInput>
            <SelectInput optionText="name" />
          </SelectArrayInput>
        </ReferenceInput>
        <NumberInput source="quantity" min={1} validate={[required()]} />
        <NumberInput source="price" min={1000} validate={[required()]} />
        <NumberInput source="fake_price" min={1000} validate={[required()]} />
        <RichTextInput source="description" />
        <ReferenceInput
          label="Images"
          source="images"
          reference="images"
          validate={[required()]}
        >
          <SelectArrayInput optionText="url" optionValue="url" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

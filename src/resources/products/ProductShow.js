import {
  Show,
  TextField,
  DateField,
  SimpleFormView,
  ReferenceManyField,
  SingleFieldList,
} from "react-admin";

export const ProductShow = (props) => {
  return (
    <Show {...props}>
      <SimpleFormView>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <TextField source="quantity" />
        <TextField source="price" />
        <TextField source="fake_price" />
        <DateField source="created_at" />
        <DateField source="updated_at" />
        <ReferenceManyField reference="image" target="id">
          <SingleFieldList>
            <TextField source="url" />
          </SingleFieldList>
        </ReferenceManyField>
      </SimpleFormView>
    </Show>
  );
};

import {
  Show,
  TextField,
  DateField,
  SimpleFormView,
  ArrayField,
  ImageField,
  SingleFieldList,
  ChipField,
  Datagrid,
} from "react-admin";

export const ProductShow = (props) => {
  return (
    <Show {...props}>
      <SimpleFormView>
        <TextField source="id" />
        <TextField source="name" />
        <ArrayField source="category">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>
        <TextField source="description" />
        <TextField source="quantity" />
        <TextField source="price" />
        <TextField source="fake_price" />
        <DateField source="created_at" />
        <DateField source="updated_at" />
        <ArrayField source="image">
          <SingleFieldList>
            <ImageField source="url" />
          </SingleFieldList>
        </ArrayField>
        <ArrayField source="comment">
          <Datagrid>
            <TextField source="text" />
            <TextField source="user_id" />
          </Datagrid>
        </ArrayField>
        <ArrayField source="rating">
          <Datagrid>
            <TextField source="rate" />
            <TextField source="user_id" />
          </Datagrid>
        </ArrayField>
      </SimpleFormView>
    </Show>
  );
};

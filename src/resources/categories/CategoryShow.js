import { Show, TextField, DateField, SimpleFormView } from "react-admin";

export const CategoryShow = (props) => {
  return (
    <Show {...props}>
      <SimpleFormView>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="description" />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </SimpleFormView>
    </Show>
  );
};

import {
  Show,
  TextField,
  DateField,
  SimpleFormView,
  ChipField,
} from "react-admin";

export const UserShow = (props) => {
  return (
    <Show {...props}>
      <SimpleFormView>
        <TextField source="id" />
        <TextField source="username" />
        <TextField source="email" />
        <ChipField source="role" color="primary" />
        <TextField source="password" />
        <DateField source="created_at" />
        <DateField source="updated_at" />
      </SimpleFormView>
    </Show>
  );
};

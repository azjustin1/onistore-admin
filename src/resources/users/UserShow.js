import {
  Show,
  TextField,
  DateField,
  SimpleFormView,
  ChipField,
  Toolbar,
  SaveButton,
} from "react-admin";

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const UserShow = (props) => {
  return (
    <Show {...props}>
      <SimpleFormView toolbar={<UserEditToolbar />}>
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

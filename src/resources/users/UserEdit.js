import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  TextField,
  required,
  Toolbar,
  SaveButton,
} from "react-admin";

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const UserEdit = (props) => (
  <Edit title="Edit" {...props}>
    <SimpleForm toolbar={<UserEditToolbar />}>
      <TextField source="id" validate={[required()]} />
      <TextInput source="username" validate={[required()]} />
      <TextInput source="email" validate={[required()]} />
      <TextInput source="role" validate={[required()]} />
      <TextField source="password" />
    </SimpleForm>
  </Edit>
);

import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  DateField,
  ChipField,
  ShowButton,
} from "react-admin";

export const UserList = (props) => (
  <List bulkActionButtons={false} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="email" />
      <ChipField source="role" color="primary" />
      <TextField source="password" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <ShowButton basePath="users" />
    </Datagrid>
  </List>
);

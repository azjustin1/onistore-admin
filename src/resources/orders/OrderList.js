import * as React from "react";
import {
  Datagrid,
  List,
  TextField,
  DateField,
  ShowButton,
  ArrayField,
  SingleFieldList,
  Toolbar,
  SaveButton,
  NumberField,
} from "react-admin";

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const OrderList = (props) => (
  <List bulkActionButtons={false} {...props}>
    <Datagrid rowClick="edit" toolbar={<UserEditToolbar />}>
      <TextField source="id" />
      <TextField source="user.username" label="User" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phone" />
      <TextField source="address" />
      <TextField source="note" />
      <NumberField source="total" />
      <DateField source="created_at" />
      <ArrayField source="product">
        <Datagrid>
          <TextField source="name" label="Bought" />
        </Datagrid>
      </ArrayField>
      <ShowButton basePath="orders" />
    </Datagrid>
  </List>
);

import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  ShowButton,
  EditButton,
  DeleteButton,
} from "react-admin";

// import { ProductFilter } from "./ProductFilter";

export const CategoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="created_at" />
      <DateField source="updated_at" />
      <ShowButton basePath="categories" />
      <EditButton basePath="categories" />
      <DeleteButton basePath="categories" />
    </Datagrid>
  </List>
);

// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceManyField,
  ShowButton,
  EditButton,
  DeleteButton,
  NumberField,
  SingleFieldList,
  ChipField,
  ImageField,
  ArrayField,
  UrlField,
} from "react-admin";

import { ProductFilter } from "./ProductFilter";

export const ProductList = (props) => (
  <List filters={<ProductFilter />} {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="quantity" />
      <NumberField source="price" />
      <NumberField source="fake_price" />
      <ArrayField source="category">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="image">
        <SingleFieldList>
          <ImageField source="url" />
        </SingleFieldList>
      </ArrayField>
      <ShowButton basePath="products" />
      <EditButton basePath="products" />
      <DeleteButton basePath="products" />
    </Datagrid>
  </List>
);

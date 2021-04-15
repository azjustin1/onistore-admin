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
      <ReferenceManyField
        label="Categoreis"
        reference="category"
        target="product_id"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceManyField>
      {/* <DateField source="created_at" />
      <DateField source="updated_at" /> */}
      <ShowButton basePath="products" />
      <EditButton basePath="products" />
      <DeleteButton basePath="products" />
    </Datagrid>
  </List>
);

// in src/users.js
import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
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

export const ImageList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ImageField source="url" name="Image" />
      {/* <ArrayField source="product">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField> */}
      <ShowButton basePath="images" />
      <DeleteButton basePath="images" />
    </Datagrid>
  </List>
);

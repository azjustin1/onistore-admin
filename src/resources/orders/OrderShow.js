import {
  Show,
  TextField,
  SimpleFormView,
  ArrayField,
  SingleFieldList,
  Datagrid,
  Toolbar,
  SaveButton,
  NumberField,
} from "react-admin";

const UserEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

export const OrderShow = (props) => {
  return (
    <Show {...props}>
      <SimpleFormView toolbar={<UserEditToolbar />}>
        <TextField source="id" />
        <TextField source="user.username" label="User" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="phone" />
        <TextField source="address" />
        <TextField source="note" />
        <NumberField source="total" />
        <ArrayField source="product">
          <Datagrid>
            <TextField source="name" label="Bought" />
          </Datagrid>
        </ArrayField>
      </SimpleFormView>
    </Show>
  );
};

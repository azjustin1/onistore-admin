import { Show, TextField, SimpleFormView } from "react-admin";

export const OrderShow = (props) => {
  return (
    <Show {...props}>
      <SimpleFormView>
        <TextField source="id" />
        <TextField source="user_id" />
        <TextField source="name" />
        <TextField source="email" />
        <TextField source="phone" />
        <TextField source="address" />
        <TextField source="note" />
      </SimpleFormView>
    </Show>
  );
};

import StorageIcon from "@material-ui/icons/Storage";
import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import authProvider from "./auth/authProvider";
import Dashboard from "./Dashboard";
import dataProvider from "./data/dataProvider";
import { ProductCreate } from "./resources/products/ProductCreate";
import { ProductEdit } from "./resources/products/ProductEdit";
import { ProductFilter } from "./resources/products/ProductFilter";
import { ProductList } from "./resources/products/ProductList";
import { ProductShow } from "./resources/products/ProductShow";
import { CategoryList } from "./resources/categories/CategoryList";
import { CategoryCreate } from "./resources/categories/CategoryCreate";
import { CategoryEdit } from "./resources/categories/CategoryEdit";
import { CategoryShow } from "./resources/categories/CategoryShow";
import { UserList } from "./resources/users/UserList";
import { UserEdit } from "./resources/users/UserEdit";
import { UserShow } from "./resources/users/UserShow";
import { OrderList } from "./resources/orders/OrderList";
import { OrderShow } from "./resources/orders/OrderShow";
import { ImageList } from "./resources/images/ImageList";

const App = () => {
  return (
    <Admin
      dashboard={Dashboard}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource
        name="products"
        filter={ProductFilter}
        list={ProductList}
        show={ProductShow}
        create={ProductCreate}
        edit={ProductEdit}
        icon={StorageIcon}
      />
      <Resource
        name="categories"
        list={CategoryList}
        create={CategoryCreate}
        show={CategoryShow}
        edit={CategoryEdit}
      />
      <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} />
      <Resource name="orders" list={OrderList} show={OrderShow} />
      <Resource name="images" list={ImageList} />
    </Admin>
  );
};

export default App;

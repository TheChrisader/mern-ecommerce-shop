import { Link } from "react-router-dom";
import { savedData } from "../../data";
import Table from "../../components/Table/Table";

import "./User.scss";

type orderColumn = {
  id: Number;
  name: string;
}[];

type orderRow = {
  id: Number;
  name: Function;
}[];

const User = () => {
  const orderColumns: orderColumn = [
    {
      id: 1,
      name: "Product",
    },
    {
      id: 2,
      name: "Stock",
    },
    {
      id: 3,
      name: "Price",
    },
  ];

  const orderRows: orderRow = [
    {
      id: 1,
      name: (item: any) => {
        return (
          <Link to="/product/:slug" className="link saved-items-product">
            <img src={item.img} alt="" className="saved-items-img" />
            <span className="saved-items-table-item">{item.product}</span>
          </Link>
        );
      },
    },
    {
      id: 2,
      name: (item: any) => {
        return (
          <div>
            <span className="saved-items-table-item">{item.stock}</span>
          </div>
        );
      },
    },
    {
      id: 3,
      name: (item: any) => {
        return (
          <div>
            <span className="saved-items-table-item">{item.price}</span>
          </div>
        );
      },
    },
  ];

  return (
    <div className="user-page-wrapper">
      <h1 className="account-title">Account Overview</h1>
      <div className="user-page-layout-wrapper">
        <div className="account-details-wrapper">
          <div className="account-details-title-wrapper">
            <h1 className="account-details-title">Account Details</h1>
            <Link to="/user/:id/edit">
              <i className="account-icon fa-solid fa-user-pen"></i>
            </Link>
          </div>
          <div className="account-details">
            <span className="account-details-username">Username</span>
            <span className="account-details-email">email@email.com</span>
            <span className="account-details-change-password">
              CHANGE PASSWORD
            </span>
          </div>
        </div>
        <div className="saved-items-wrapper">
          <div className="saved-items-title-wrapper">
            <h1 className="saved-items-title">Saved Items</h1>
            <Link to="/user/:id/saved">
              <i className="account-icon fa-solid fa-pen"></i>
            </Link>
          </div>
          <Table columns={orderColumns} rows={orderRows} items={savedData} />
        </div>
      </div>
      <div className="orders-wrapper">
        <div className="orders-title-wrapper">
          <h1 className="orders-title">Orders</h1>
        </div>
      </div>
    </div>
  );
};

export default User;

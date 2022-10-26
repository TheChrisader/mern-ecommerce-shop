import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

// import { savedData } from "../../data";
import Table from "../../components/Table/Table";
import EventBus from "../../utils/services/EventBus";

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
  const [orders, setOrders] = useState([] as any);
  const user = useSelector((state: any) => state?.user?.currentUser);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/order/${user?._id}`
        );
        setOrders(response?.data);
      } catch (err: any) {
        if (
          err?.response?.data?.message === "You are not authenticated" ||
          err?.response?.data?.message === "Forbidden Access"
        ) {
          await EventBus.dispatch("logout");
        }
      }
    };

    fetchOrders();
  }, []);

  // Saved

  const savedColumns: orderColumn = [
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

  const savedRows: orderRow = [
    {
      id: 1,
      name: (item: any) => {
        return (
          <Link
            to={`/product/${item?.productSlug}`}
            className="link saved-items-product"
          >
            <img src={item?.productImage} alt="" className="saved-items-img" />
            <span className="saved-items-table-item">{item?.productName}</span>
          </Link>
        );
      },
    },
    {
      id: 2,
      name: (item: any) => {
        return (
          <div>
            <span className="saved-items-table-item">
              {item?.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        );
      },
    },
    {
      id: 3,
      name: (item: any) => {
        return (
          <div>
            <span className="saved-items-table-item">{item?.productPrice}</span>
          </div>
        );
      },
    },
  ];

  // Orders

  const orderColumns: orderColumn = [
    {
      id: 0,
      name: "Tracking ID",
    },
    {
      id: 1,
      name: "Product",
    },
    {
      id: 2,
      name: "Quantity",
    },
    {
      id: 3,
      name: "Amount",
    },
    {
      id: 4,
      name: "Date",
    },
    {
      id: 5,
      name: "Status",
    },
  ];

  const orderRows: orderRow = [
    {
      id: 0,
      name: (item: any) => {
        return <div className="saved-items-table-item">{item?._id}</div>;
      },
    },
    {
      id: 1,
      name: (item: any) => {
        return (
          <Link
            to={`/product/${item?.productSlug}`}
            className="link saved-items-product"
          >
            <img src={item?.productImage} alt="" className="saved-items-img" />
            <span className="saved-items-table-item">{item?.productName}</span>
          </Link>
        );
      },
    },
    {
      id: 2,
      name: (item: any) => {
        return <div className="saved-items-table-item">{item?.quantity}</div>;
      },
    },
    {
      id: 3,
      name: (item: any) => {
        return <div className="saved-items-table-item">{item?.totalPrice}</div>;
      },
    },
    {
      id: 4,
      name: (item: any) => {
        return (
          <div className="saved-items-table-item">
            {new Date(item?.paidAt).toDateString()}
          </div>
        );
      },
    },
    {
      id: 5,
      name: (item: any) => {
        return <div className="saved-items-table-item">{item?.status}</div>;
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
            {/* <Link to={"/user/" + user?._id + "/edit"}>
              <i className="account-icon fa-solid fa-user-pen"></i>
            </Link> */}
          </div>
          <div className="account-details">
            <span className="account-details-username">{user?.username}</span>
            <span className="account-details-email">{user?.email}</span>
            {/* <span className="account-details-change-password">
              CHANGE PASSWORD
            </span> */}
          </div>
        </div>
        <div className="saved-items-wrapper">
          <div className="saved-items-title-wrapper">
            <h1 className="saved-items-title">Saved Items</h1>
            <Link to={"/user/" + user?._id + "/saved"}>
              <i className="account-icon fa-solid fa-pen"></i>
            </Link>
          </div>
          <Table
            columns={savedColumns}
            rows={savedRows}
            items={user?.savedItems}
            tableSize={4}
          />
        </div>
      </div>
      <div className="orders-wrapper">
        <div className="account-details-title-wrapper">
          <h1 className="account-details-title">Orders</h1>
        </div>
        <Table
          columns={orderColumns}
          rows={orderRows}
          items={orders}
          // tableSize={4}
        />
      </div>
    </div>
  );
};

export default User;

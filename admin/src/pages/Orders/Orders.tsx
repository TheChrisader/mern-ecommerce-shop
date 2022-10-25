import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getOrders } from "../../redux/apiCalls/orderApiCalls";
import Table from "../../components/Table/Table";

import "./Orders.scss";

type orderColumn = {
  id: number;
  name: string;
}[];

type orderRow = {
  id: number;
  name: Function;
}[];

const Orders: React.FC = () => {
  const dispatch = useDispatch();

  const orders = useSelector((state: any) => state.order.orders);
  const isFetching = useSelector((state: any) => state.order.isFetching);

  useEffect(() => {
    const fetchOrders = async () => {
      getOrders(dispatch);
    };
    fetchOrders();
  }, [dispatch]);

  //   const handleChange = (id: string) => {
  //       updateOrder(dispatch, id, orders);
  //   };

  const orderColumns: orderColumn = [
    {
      id: 1,
      name: "Tracking Id",
    },
    {
      id: 2,
      name: "Product",
    },
    {
      id: 3,
      name: "Customer",
    },
    {
      id: 4,
      name: "Date",
    },
    {
      id: 5,
      name: "Amount",
    },
    {
      id: 6,
      name: "Quantity",
    },
    {
      id: 7,
      name: "Status",
    },
  ];

  const orderRows: orderRow = [
    {
      id: 1,
      name: (item: any) => {
        return <span className="transactions-item">{item._id}</span>;
      },
    },
    {
      id: 2,
      name: (item: any) => {
        return (
          <div style={{ display: "flex" }}>
            <img
              src={item.productImage}
              className="transaction-item-img"
              alt=""
            />
            <span className="transactions-item" style={{ maxWidth: "200px" }}>
              {item.productName}
            </span>
          </div>
        );
      },
    },
    {
      id: 3,
      name: (item: any) => {
        return <span className="transactions-item">{item.userName}</span>;
      },
    },
    {
      id: 4,
      name: (item: any) => {
        return (
          <span className="transactions-item">
            {new Date(item.paidAt).toDateString()}
          </span>
        );
      },
    },
    {
      id: 5,
      name: (item: any) => {
        return <span className="transactions-item">{item.totalPrice}</span>;
      },
    },
    {
      id: 6,
      name: (item: any) => {
        return <span className="transactions-item">{item.quantity}</span>;
      },
    },
    {
      id: 7,
      name: (item: any) => {
        return (
          <div>
            <span className="transactions-item">{item.status}</span>
          </div>
        );
      },
    },
  ];
  return (
    <main className="products">
      <div className="products-new-product">
        <h2 className="add-new-product">Orders</h2>
      </div>
      {isFetching && (
        <div className="products-loader-backdrop">
          <div className="products-loader"></div>
        </div>
      )}
      <Table
        columns={orderColumns}
        rows={orderRows}
        items={orders}
        pageSize={6}
        pagination={true}
      />
    </main>
  );
};

export default Orders;

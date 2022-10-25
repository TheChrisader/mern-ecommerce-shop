// import { Link } from "react-router-dom";
import { useEffect } from "react";

// import { transactionData } from "../../data";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";
import WidgetMd from "../../components/WidgetMd/WidgetMd";
import WidgetsSm from "../../components/WidgetsSm/WidgetsSm";
import "./Home.scss";
import { getOrders } from "../../redux/apiCalls/orderApiCalls";
import { useDispatch, useSelector } from "react-redux";

type orderColumn = {
  id: Number;
  name: string;
}[];

type orderRow = {
  id: Number;
  name: Function;
}[];

const Home = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: any) => state.order.orders);

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
            <span className="transactions-item" style={{ maxWidth: "250px" }}>
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

  useEffect(() => {
    const fetchOrders = async () => {
      getOrders(dispatch);
    };
    fetchOrders();
  }, [dispatch]);

  return (
    <main className="home">
      <WidgetsSm />
      <div className="home-middle-wrapper">
        <WidgetMd />
        <Chart />
      </div>
      <section className="home-transactions-table">
        <h2 className="transactions-title">Latest Transactions</h2>
        <Table
          columns={orderColumns}
          rows={orderRows}
          items={orders}
          pageSize={5}
        />
      </section>
    </main>
  );
};

export default Home;

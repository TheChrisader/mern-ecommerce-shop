import { Link } from "react-router-dom";

import { transactionData } from "../../data";
import Chart from "../../components/Chart/Chart";
import Table from "../../components/Table/Table";
import WidgetMd from "../../components/WidgetMd/WidgetMd";
import WidgetsSm from "../../components/WidgetsSm/WidgetsSm";
import "./Home.scss";

type orderColumn = {
  id: Number;
  name: string;
}[];

type orderRow = {
  id: Number;
  name: Function;
}[];

const Home = () => {
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
      name: "Payment Method",
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
        return <span className="transactions-item">{item.id}</span>;
      },
    },
    {
      id: 2,
      name: (item: any) => {
        return (
          <div>
            <span className="transactions-item">{item.product}</span>
          </div>
        );
      },
    },
    {
      id: 3,
      name: (item: any) => {
        return (
          <div>
            <span className="transactions-item">{item.customer}</span>
          </div>
        );
      },
    },
    {
      id: 4,
      name: (item: any) => {
        return (
          <div>
            <span className="transactions-item">{item.date}</span>
          </div>
        );
      },
    },
    {
      id: 5,
      name: (item: any) => {
        return (
          <div>
            <span className="transactions-item">{item.amount}</span>
          </div>
        );
      },
    },
    {
      id: 6,
      name: (item: any) => {
        return (
          <div>
            <span className="transactions-item">{item.method}</span>
          </div>
        );
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
          items={transactionData}
          pageSize={5}
        />
      </section>
    </main>
  );
};

export default Home;

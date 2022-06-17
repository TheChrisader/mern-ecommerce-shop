import { Link } from "react-router-dom";
import { savedData } from "../../data";
import Table from "../../components/Table/Table";
import "./Saved.scss";

type orderColumn = {
  id: Number;
  name: string;
}[];

type orderRow = {
  id: Number;
  name: Function;
}[];

const Saved = () => {
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
    <div className="saved-items-page">
      <h1 className="saved-title">Saved Items</h1>
      <Table columns={orderColumns} rows={orderRows} items={savedData} />
    </div>
  );
};

export default Saved;

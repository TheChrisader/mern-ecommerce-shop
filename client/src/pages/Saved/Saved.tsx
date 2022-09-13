import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// import { savedData } from "../../data";
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
  const savedItems = useSelector(
    (state: any) => state.user.currentUser.savedItems
  );

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
          <Link
            to={`/product/${item.productSlug}`}
            className="link saved-items-product"
          >
            <img src={item.productImage} alt="" className="saved-items-img" />
            <span className="saved-items-table-items">{item.productName}</span>
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
              {item.inStock ? "In Stock" : "Out of Stock"}
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
            <span className="saved-items-table-item">${item.productPrice}</span>
          </div>
        );
      },
    },
  ];

  return (
    <div className="saved-items-page">
      <h1 className="saved-title">Saved Items</h1>
      <Table columns={orderColumns} rows={orderRows} items={savedItems} />
    </div>
  );
};

export default Saved;

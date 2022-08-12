import { Link } from "react-router-dom";
import { savedData } from "../../data";
import Table from "../../components/Table/Table";

import "./Products.scss";

type productColumn = {
  id: number;
  name: string;
}[];

type productRow = {
  id: number;
  name: Function;
}[];

const Products: React.FC = () => {
  const productColumns: productColumn = [
    {
      id: 1,
      name: "ID",
    },
    {
      id: 2,
      name: "Product",
    },
    {
      id: 3,
      name: "Stock",
    },
    {
      id: 4,
      name: "Price",
    },
    {
      id: 5,
      name: "Action",
    },
  ];

  const productRows: productRow = [
    {
      id: 1,
      name: (item: any) => {
        return <span className="products-item">{item._id}</span>;
      },
    },
    {
      id: 2,
      name: (item: any) => {
        return <span className="products-item">{item.product}</span>;
      },
    },
    {
      id: 3,
      name: (item: any) => {
        return <span className="products-item">{item.stock}</span>;
      },
    },
    {
      id: 4,
      name: (item: any) => {
        return <span className="products-item">{item.price}</span>;
      },
    },
    {
      id: 5,
      name: (item: any) => {
        return (
          <>
            <Link to="/product/:slug" className="products-view link">
              View
            </Link>
            <Link to="/" className="products-delete link">
              Delete
            </Link>
          </>
        );
      },
    },
  ];
  return (
    <main className="products">
      <div className="products-new-product">
        <h2 className="add-new-product">Add New Product</h2>
        <Link to="/product/new" className="link add-new-button">
          {" "}
          Add New
        </Link>
      </div>
      <Table
        columns={productColumns}
        rows={productRows}
        items={savedData}
        check={true}
        pageSize={6}
        pagination={true}
      />
    </main>
  );
};

export default Products;

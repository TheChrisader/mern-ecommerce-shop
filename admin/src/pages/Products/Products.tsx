import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getProducts, deleteProduct } from "../../redux/apiCalls";
import { savedData } from "../../data";
import Table from "../../components/Table/Table";

import "./Products.scss";
import { useEffect } from "react";

type productColumn = {
  id: number;
  name: string;
}[];

type productRow = {
  id: number;
  name: Function;
}[];

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.product.products);

  useEffect(() => {
    const fetchProducts = async () => {
      getProducts(dispatch);
    };
    fetchProducts();
  }, [dispatch]);

  const handleDelete = (id: string) => {
    deleteProduct(dispatch, id);
  };

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
        return <span className="products-item">{item.name}</span>;
      },
    },
    {
      id: 3,
      name: (item: any) => {
        return (
          <span className="products-item">
            {!item.isOutOfStock ? "In Stock" : "Out of Stock"}
          </span>
        );
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
          <div className="products-options">
            <Link to={"/product/" + item.slug} className="products-view link">
              View
            </Link>
            <button
              type="button"
              onClick={() => handleDelete(item._id)}
              className="products-delete link"
            >
              Delete
            </button>
          </div>
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
        items={products}
        check={true}
        pageSize={6}
        pagination={true}
      />
    </main>
  );
};

export default Products;

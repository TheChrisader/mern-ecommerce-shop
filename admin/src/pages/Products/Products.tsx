import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getProducts,
  deleteProduct,
} from "../../redux/apiCalls/productApiCalls";
// import { savedData } from "../../data";
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
  const [idArray, setIdArray] = useState<string[]>([]);

  const dispatch = useDispatch();

  const products = useSelector((state: any) => state.product.products);
  const isFetching = useSelector((state: any) => state.product.isFetching);

  useEffect(() => {
    const fetchProducts = async () => {
      getProducts(dispatch);
    };
    fetchProducts();
  }, [dispatch]);

  const handleDelete = (id: string, idArray: string[]) => {
    if (idArray.length !== 0) {
      for (let i = 0; i < idArray.length; i++) {
        deleteProduct(dispatch, idArray[i]);
      }
      setIdArray([]);
    } else {
      deleteProduct(dispatch, id);
    }
  };

  const productColumns: productColumn = [
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
    {
      id: 4,
      name: "Action",
    },
  ];

  const productRows: productRow = [
    {
      id: 1,
      name: (item: any) => {
        return <span className="products-item product-name">{item.name}</span>;
      },
    },
    {
      id: 2,
      name: (item: any) => {
        return (
          <span className="products-item">
            {!item.isOutOfStock ? "In Stock" : "Out of Stock"}
          </span>
        );
      },
    },
    {
      id: 3,
      name: (item: any) => {
        return <span className="products-item">{item.price}</span>;
      },
    },
    {
      id: 4,
      name: (item: any) => {
        return (
          <div className="products-options">
            <Link to={"/product/" + item.slug} className="products-view link">
              View
            </Link>
            <button
              type="button"
              onClick={() => handleDelete(item._id, idArray)}
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
      {isFetching && (
        <div className="products-loader-backdrop">
          <div className="products-loader"></div>
        </div>
      )}
      <Table
        columns={productColumns}
        rows={productRows}
        items={products}
        check={true}
        pageSize={6}
        pagination={true}
        getIdArray={(id) => setIdArray(id)}
      />
    </main>
  );
};

export default Products;

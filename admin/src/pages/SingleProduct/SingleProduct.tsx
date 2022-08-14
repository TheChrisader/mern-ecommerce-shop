import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import "./SingleProduct.scss";

const SingleProduct: React.FC = () => {
  const location = useLocation();
  const productSlug = location.pathname.split("/")[2];

  const product = useSelector((state: any) =>
    state.product.products.find((product: any) => product.slug === productSlug)
  );

  return (
    <main className="single-product-wrapper">
      <section className="single-product-top">
        <h2 className="single-product-title">Product</h2>
        <Link to="/product/new" className="link">
          Create
        </Link>
      </section>
      <section className="single-product-middle">
        <div className="single-product-info-wrapper">
          <h2 className="single-product-info-title">{product.name}</h2>
        </div>
      </section>
      <section className="single-product-bottom">
        <form action="submit" className="single-product-form">
          <div className="single-product-form-left">
            <div className="single-product-form-divider">
              <label htmlFor="product-name" className="single-product-label">
                Product Name
              </label>
              <input
                type="text"
                placeholder={product.name}
                className="single-product-input"
                id="product-name"
              />
            </div>
            <div className="single-product-form-divider">
              <label
                htmlFor="product-description"
                className="single-product-label"
              >
                Product Description
              </label>
              <input
                type="text"
                placeholder={product.description}
                className="single-product-input"
                id="product-description"
              />
            </div>
            <div className="single-product-form-divider">
              <label htmlFor="product-price" className="single-product-label">
                Product Price
              </label>
              <input
                type="text"
                placeholder={product.price}
                className="single-product-input"
                id="product-price"
              />
            </div>
            <div className="single-product-form-divider">
              <label htmlFor="product-stock" className="single-product-label">
                In Stock?
              </label>
              <select
                name="in-stock"
                id="product-stock"
                className="single-product-select"
              >
                <option value="true"> Yes </option>
                <option value="false"> No </option>
              </select>
            </div>
          </div>
          <div className="single-product-form-right">
            <div className="single-product-image-upload-wrapper">
              <label htmlFor="file" className="single-product-image-upload">
                Upload
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="single-product-upload">Upload</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default SingleProduct;

import Products from "../../components/Products/Products";

import "./ProductPage.scss";

const ProductsPage: React.FC = () => {
  return (
    <>
      <div className="filter-wrapper">
        <div className="filter-products-wrapper">
          <span className="filter-products">Filter Products:</span>
          <div className="filter-products-options-wrapper">
            <select name="" id="" className="filter-products-options">
              <option value="" selected disabled>
                Color
              </option>
              <option value="">White</option>
              <option value="">Black</option>
              <option value="">Blue</option>
              <option value="">Red</option>
              <option value="">Yellow</option>
            </select>
            <select name="" id="" className="filter-products-options">
              <option value="">White</option>
              <option value="">Black</option>
              <option value="">Blue</option>
              <option value="">Red</option>
              <option value="">Yellow</option>
            </select>
          </div>
        </div>
        <div className="filter-products-wrapper">
          <span className="filter-products">Sort Products:</span>
          <div className="filter-products-options-wrapper">
            <select name="" id="" className="filter-products-options">
              <option value="">White</option>
              <option value="">Black</option>
              <option value="">Blue</option>
              <option value="">Red</option>
              <option value="">Yellow</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
    </>
  );
};

export default ProductsPage;

import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

import Products from "../../components/Products/Products";

import "./ProductPage.scss";

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState<
    undefined | { [name: string]: string }
  >(undefined);
  const [sort, setSort] = useState("");

  const handleFilters = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    setFilters((prev: any) => ({ ...prev, [e.target.name]: value }));
  };
  return (
    <>
      <div className="filter-wrapper">
        <div className="filter-products-wrapper">
          <span className="filter-products">Filter Products:</span>
          <div className="filter-products-options-wrapper">
            <select
              name="colors"
              id=""
              className="filter-products-options"
              onChange={handleFilters}
            >
              <option value={undefined} defaultValue="" disabled>
                Color
              </option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Gray">Gray</option>
            </select>
            <select
              name="sizes"
              id=""
              className="filter-products-options"
              onChange={handleFilters}
            >
              <option value={undefined} defaultValue="" disabled>
                Sizes
              </option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
              <option value="XXL">XX Large</option>
            </select>
          </div>
        </div>
        <div className="filter-products-wrapper">
          <span className="filter-products">Sort Products:</span>
          <div className="filter-products-options-wrapper">
            <select
              name=""
              id=""
              className="filter-products-options"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="highest">Price: highest</option>
              <option value="lowest">Price: lowest</option>
            </select>
          </div>
        </div>
      </div>
      <Products category={category} filters={filters} sort={sort} />
    </>
  );
};

export default ProductsPage;

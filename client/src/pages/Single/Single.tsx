import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./Single.scss";

const Single = () => {
  const location = useLocation();
  const productSlug = location.pathname.split("/")[2];

  const [product, setProduct] = useState({} as any);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/product/${productSlug}`);
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <section className="product-page-wrapper">
        <div className="product-image-wrapper">
          <div className="product-image-slider-wrapper">
            <img
              src={product?.mainImage}
              alt=""
              className="product-image-slider"
            />
          </div>
          <div className="product-images">
            <img
              src={product?.mainImage}
              alt=""
              className="product-slider-image"
            />
            <img
              src={product.images && product?.images[0]}
              alt=""
              className="product-slider-image"
            />
            <img
              src={product.images && product?.images[1]}
              alt=""
              className="product-slider-image"
            />
            <img
              src={product.images && product?.images[2]}
              alt=""
              className="product-slider-image"
            />
          </div>
        </div>
        <div className="product-text-wrapper">
          <div className="product-title-wrapper">
            <h1 className="product-title">{product?.name}</h1>
            <div className="product-categories">
              {product.categories &&
                product?.categories.map((category: string, i: number) => (
                  <span key={i} className="product-category">
                    {category}
                  </span>
                ))}
            </div>
            <span className="product-review">(1.5k customers review)</span>
          </div>

          <span className="product-description">{product?.description}</span>
          <button type="button" className="product-page-cart">
            Add to Cart
          </button>
        </div>
      </section>
    </>
  );
};

export default Single;

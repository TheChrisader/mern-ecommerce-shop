import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { addProduct } from "../../redux/CartRedux";

import "./Product.scss";

type Props = {
  img: string;
  title: string;
  price: number;
  slug: string;
  oldPrice?: number;
  cartProp: any;
};

const Product: React.FC<Props> = ({
  img,
  title,
  price,
  slug,
  oldPrice,
  cartProp,
}) => {
  const cartItems = useSelector((state: any) => state?.cart?.cart);

  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state?.user?.currentUser?._id);

  const updateCart = (products: any, slug: string) => {
    let clone = products.map((item: any) => {
      return { ...item };
    });
    let productItem = clone.find((item: any) => item.productSlug === slug);
    if (!productItem) {
      let data = { productSlug: slug, quantity: 1 };
      let newCart = [...clone, data];
      console.log(products);
      dispatch(addProduct(newCart));
    } else {
      productItem.quantity++;
      dispatch(addProduct(clone));
    }
  };

  const handleAddToCart = async (
    e: React.MouseEvent<HTMLButtonElement>,
    userId: string,
    products: undefined | { productSlug: string; quantity: number }[],
    slug: string
  ) => {
    if (!userId) throw new Error("Login! Fool, ya fool!");

    updateCart(products, slug);

    let data = {
      user: userId,
      products,
    };

    try {
      let response = await axios.put(`/cart/${userId}`, data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="product-item-wrapper">
      <img className="product-item-image " src={img} alt="" />
      <div className="product-item-text-wrapper">
        <Link to={`/product/${slug}`} className="link product-item-title-link">
          <h3 className="product-item-title">{title}</h3>
        </Link>
        <div>
          <span className="product-price">${price} </span>
          {oldPrice && <s className="product-price">${oldPrice}</s>}
        </div>
      </div>
      <button
        className="product-cart-button"
        onClick={(e) => handleAddToCart(e, userId, cartItems, slug)}
      >
        <i className="item-icon fa-solid fa-cart-shopping"></i>
        <span className="product-button-text">ADD TO CART</span>
      </button>
    </div>
  );
};

export default Product;

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, removeFromCart } from "../../utils/services/CartHandlers";

import "./CartItem.scss";

type cartProps = {
  slug: string;
  quantity: number;
  id: string;
  cart: any[];
};

const CartItem: React.FC<cartProps> = ({ slug, quantity, id, cart }) => {
  const [product, setProduct] = useState({} as any);

  const dispatch = useDispatch();
  // const cart = useSelector((state: any) => state.cart.cart);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/product/${slug}`);
        setProduct(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
      <div className="cart-item-wrapper">
        <img src={product?.mainImage} alt="" className="cart-img" />
        <div className="cart-product-info-wrapper">
          <div className="cart-product-info">
            <span className="cart-product-name">Product: {product?.name}</span>
            <span className="cart-product-id">ID: {product?._id}</span>
            <span className="cart-product-size">Size: {quantity}</span>
          </div>
        </div>
        <div className="cart-product-right">
          <div className="cart-product-quantity-wrapper">
            <span
              className="cart-product-quantity"
              onClick={() => {
                removeFromCart(dispatch, cart, slug);
              }}
            >
              - 1 +
            </span>
          </div>
          <span className="cart-product-cost">${product?.price}</span>
        </div>
      </div>
    </>
  );
};

export default CartItem;

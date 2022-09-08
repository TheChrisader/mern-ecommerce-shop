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

const CartItem: React.FC<cartProps> = ({ slug, quantity, cart }) => {
  const [product, setProduct] = useState({} as any);

  const dispatch = useDispatch();

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
  }, [cart]);
  return (
    <>
      <div className="cart-item-wrapper">
        <img src={product?.mainImage} alt="" className="cart-img" />
        <div className="cart-product-wrapper">
          <div className="cart-product-info-wrapper">
            <div className="cart-product-info">
              <span className="cart-product-name">{product?.name}</span>
              <span className="cart-product-id">ID: {product?._id}</span>
            </div>
          </div>
          <div className="cart-product-right">
            <div className="cart-product-quantity-wrapper">
              <button
                className="quantity-addition"
                onClick={() => {
                  addToCart(
                    dispatch,
                    cart,
                    slug,
                    product?.price,
                    product?.discountPrice
                  );
                }}
              >
                +
              </button>
              <span className="cart-product-quantity">{quantity}</span>
              <button
                className="quantity-subtraction"
                onClick={() => {
                  removeFromCart(dispatch, cart, slug);
                }}
              >
                -
              </button>
            </div>
            <span className="cart-product-cost">
              ${product?.price * quantity}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

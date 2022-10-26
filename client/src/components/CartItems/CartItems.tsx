import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "../CartItem/CartItem";
import { getCart } from "../../redux/CartRedux";
import { useIsMount } from "../../utils/hooks/useIsMount";

import "./CartItems.scss";

const CartItems = () => {
  const userId = useSelector((state: any) => state.user.currentUser._id);
  const cart = useSelector((state: any) => state.cart.cart);

  const dispatch = useDispatch();

  const isMount = useIsMount();

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/cart/${userId}`,
          {
            withCredentials: true,
          }
        );
        dispatch(getCart(response.data.products));
      } catch (err) {
        console.error(err);
      }
    };
    fetchCart();
  }, []);

  useEffect(() => {
    const updateApiCart = async () => {
      let data = {
        user: userId,
        products: cart,
      };

      try {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/cart/${userId}`,
          data,
          {
            withCredentials: true,
          }
        );
      } catch (err) {
        console.error(err);
      }
    };
    if (!isMount) updateApiCart();
  }, [cart]);

  return (
    <div className="cart-items-wrapper">
      {cart &&
        cart.map((item: any, i: number) => (
          <CartItem
            key={i}
            slug={item.productSlug}
            name={item.productName}
            image={item.productImage}
            quantity={item.quantity}
            id={item._id}
            price={item.productPrice}
            cart={cart}
          />
        ))}
    </div>
  );
};

export default CartItems;

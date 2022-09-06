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
        const response = await axios.get(`/cart/${userId}`);
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
        await axios.put(`/cart/${userId}`, data);
        console.log("first");
      } catch (err) {
        console.error(err);
      }
    };
    if (!isMount) updateApiCart();
  }, [cart]);

  return (
    <div className="cart-items-wrapper">
      {cart &&
        cart.map((item: any) => (
          <CartItem
            key={item._id}
            slug={item.productSlug}
            quantity={item.quantity}
            id={item._id}
            cart={cart}
          />
        ))}
    </div>
  );
};

export default CartItems;

import CartItem from "../CartItem/CartItem";

import "./CartItems.scss";

const CartItems = () => {
  return (
    <div className="cart-items-wrapper">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};

export default CartItems;

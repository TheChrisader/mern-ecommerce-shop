import CartItems from "../../components/CartItems/CartItems";
import "./Cart.scss";

const Cart = () => {
  return (
    <>
      <section className="cart-page-wrapper">
        <h1 className="cart-heading">Your Bag</h1>
        <div className="cart-options">
          <button className="continue-shopping">Continue Shopping</button>
          <div className="cart-display-options">
            <span className="shopping-bag">Shopping Bag(2)</span>
            <span className="your-wishlist">Your Wishlist(0)</span>
          </div>
          <button className="cart-checkout">Checkout Now</button>
        </div>
        <div className="cart-wrapper">
          <div className="cart-items">
            <CartItems />
          </div>
          <div className="order-summary-wrapper">
            <h2 className="order-summary-title">Order Summary</h2>
            <div className="order-summary-details">
              <div className="order-summary-costs">
                <span className="cost-description">Subtotal</span>
                <span className="cost-value">$ 200</span>
              </div>
              <div className="order-summary-costs">
                <span className="cost-description">Subtotal</span>
                <span className="cost-value">$ 200</span>
              </div>
              <div className="order-summary-costs">
                <span className="cost-description">Subtotal</span>
                <span className="cost-value">$ 200</span>
              </div>
              <div className="order-summary-total">
                <span className="total-description">Total</span>
                <span className="total-value">$ 200</span>
              </div>
              <button className="cart-checkout">Checkout Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import StripeCheckout, { Token } from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";

import CartItems from "../../components/CartItems/CartItems";
import { emptyCart } from "../../redux/CartRedux";

import "./Cart.scss";

const STRIPE_PUBISH_KEY = process.env.REACT_APP_STRIPE_KEY;

const Cart = () => {
  const [stripeToken, setStripeToken] = useState<null | Token>(null);
  const [totalCost, setTotalCost] = useState(0);
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart.cart);
  const user = useSelector((state: any) => state.user.currentUser);

  const navigate = useNavigate();

  const onToken = (token: Token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    let totalPrice = 0;
    let discount = 0;
    for (let cartItem of cart) {
      totalPrice += cartItem.quantity * cartItem.productPrice;
      discount += cartItem.quantity * cartItem.productDiscount;
    }
    setTotalCost(totalPrice);
    setTotalDiscount(discount);
  }, [cart]);

  useEffect(() => {
    setCartTotal(
      Number(
        (totalCost - totalDiscount - 5.9 < 0
          ? 0
          : totalCost - totalDiscount - 5.9
        ).toFixed(2)
      )
    );
  }, [totalCost, totalDiscount]);

  useEffect(() => {
    const makePaymentRequest = async () => {
      try {
        const response = await axios.post(`/payment/${user?._id}`, {
          amount: Math.round(cartTotal * 100),
          token: stripeToken?.id,
        });

        for (let cartItem of cart) {
          await axios.post(`/order/${user._id}`, {
            productSlug: cartItem?.productSlug,
            productName: cartItem?.productName,
            productImage: cartItem?.productImage,
            user: user?._id,
            userName: user?.username,
            totalPrice: cartItem?.productPrice * cartItem?.quantity,
            isPaid: true,
            paidAt: new Date(),
            quantity: cartItem.quantity,
          });
        }

        dispatch(emptyCart());
      } catch (err) {
        console.log(err);
      }
    };

    stripeToken && makePaymentRequest();
  }, [stripeToken, navigate]);

  return (
    <>
      <section className="cart-page-wrapper">
        <h1 className="cart-heading">Your Bag</h1>
        <div className="cart-options">
          <button className="continue-shopping">Continue Shopping</button>
          <div className="cart-display-options">
            <Link to={"/cart/" + cart._id} className="link cart-items-link">
              Shopping Bag({cart.length})
            </Link>
            <Link to="/user/:id/saved" className="link cart-items-link">
              Your Wishlist(0)
            </Link>
          </div>
          <button className="cart-checkout">Checkout Now</button>
        </div>
        <div className="cart-wrapper">
          <div className="cart-items">
            <CartItems />
          </div>
          <div className="order-summary-wrapper">
            <h2 className="order-summary-title">ORDER SUMMARY</h2>
            <div className="order-summary-details">
              <div className="order-summary-costs">
                <span className="cost-description">SUBTOTAL</span>
                <span className="cost-value">${totalCost}</span>
              </div>
              <div className="order-summary-costs">
                <span className="cost-description">DISCOUNT</span>
                <span className="cost-value">$ {totalDiscount}</span>
              </div>
              <div className="order-summary-costs">
                <span className="cost-description">SHIPPING DISCOUNT</span>
                <span className="cost-value">$5.90</span>
              </div>
              <div className="order-summary-total">
                <span className="total-description">TOTAL</span>
                <span className="total-value">${cartTotal}</span>
              </div>
              <div className="stripe-checkout-wrapper">
                <StripeCheckout
                  name="ShopLite"
                  ComponentClass="div"
                  description={"Your total is " + cartTotal}
                  amount={cartTotal * 100}
                  token={onToken}
                  stripeKey={STRIPE_PUBISH_KEY as string}
                >
                  <button className="cart-checkout">CHECKOUT NOW</button>
                </StripeCheckout>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

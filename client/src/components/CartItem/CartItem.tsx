import { useDispatch } from "react-redux";

import { addToCart, removeFromCart } from "../../utils/services/CartHandlers";

import "./CartItem.scss";

type cartProps = {
  slug: string;
  name: string;
  image: string;
  quantity: number;
  id: string;
  price: number;
  cart: any[];
};

const CartItem: React.FC<cartProps> = ({
  slug,
  name,
  image,
  quantity,
  id,
  price,
  cart,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-item-wrapper">
        <img src={image} alt="" className="cart-img" />
        <div className="cart-product-wrapper">
          <div className="cart-product-info-wrapper">
            <div className="cart-product-info">
              <span className="cart-product-name">{name}</span>
              <span className="cart-product-id">ID: {id}</span>
            </div>
          </div>
          <div className="cart-product-right">
            <div className="cart-product-quantity-wrapper">
              <button
                className="quantity-addition"
                onClick={() => {
                  addToCart(dispatch, cart, slug);
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
            <span className="cart-product-cost">${price * quantity}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;

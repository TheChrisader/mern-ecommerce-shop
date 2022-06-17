import "./CartItem.scss";

const CartItem = () => {
  return (
    <>
      <div className="cart-item-wrapper">
        <img
          src="https://static.live.templately.com/2021/06/b32321a0-image8.png"
          alt=""
          className="cart-img"
        />
        <div className="cart-product-info-wrapper">
          <div className="cart-product-info">
            <span className="cart-product-name">Product: green</span>
            <span className="cart-product-id">
              ID: 6298bfd21d13b8cbd83ded99
            </span>
            <span className="cart-product-size">Size: 200</span>
          </div>
        </div>
        <div className="cart-product-right">
          <div className="cart-product-quantity-wrapper">
            <span className="cart-product-quantity">- 1 +</span>
          </div>
          <span className="cart-product-cost">$200</span>
        </div>
      </div>
    </>
  );
};

export default CartItem;

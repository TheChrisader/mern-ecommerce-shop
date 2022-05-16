import "./Product.css";

const Product = () => {
  return (
    <div className="product-item-wrapper">
      <div className="product-item-image">
        <img src="" alt="" />
      </div>
      <div className="product-item-text-wrapper">
        <h3 className="product-title">Learn Python</h3>
        <span className="product-price">$54.99</span>
      </div>
      <button className="product-cart-button">
        <i className="icon fa-solid fa-cart-shopping"></i>
        <span className="product-button-text">ADD TO CART</span>
      </button>
    </div>
  );
};

export default Product;

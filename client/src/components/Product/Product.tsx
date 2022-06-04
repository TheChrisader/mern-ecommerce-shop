import "./Product.scss";

type Props = {
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
};

const Product: React.FC<Props> = ({ img, title, price, oldPrice }) => {
  return (
    <div className="product-item-wrapper">
      <img className="product-item-image " src={img} alt="" />
      <div className="product-item-text-wrapper">
        <h3 className="product-title">{title}</h3>
        <div>
          <span className="product-price">${price} </span>
          {oldPrice && <s className="product-price">${oldPrice}</s>}
        </div>
      </div>
      <button className="product-cart-button">
        <i className="item-icon fa-solid fa-cart-shopping"></i>
        <span className="product-button-text">ADD TO CART</span>
      </button>
    </div>
  );
};

export default Product;

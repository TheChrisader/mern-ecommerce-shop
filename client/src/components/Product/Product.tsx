import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../utils/hooks/services/CartHandlers";

import "./Product.scss";

type Props = {
  img: string;
  title: string;
  price: number;
  slug: string;
  oldPrice?: number;
  userId: string | undefined;
  cartItems: any[];
};

const Product: React.FC<Props> = ({
  img,
  title,
  price,
  slug,
  oldPrice,
  userId,
  cartItems,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = async (
    e: React.MouseEvent<HTMLButtonElement>,
    userId: string | undefined,
    products: undefined | { productSlug: string; quantity: number }[],
    slug: string
  ) => {
    if (!userId) throw new Error("Login! Fool, ya fool!");

    addToCart(dispatch, products, slug);

    let data = {
      user: userId,
      products,
    };

    try {
      await axios.put(`/cart/${userId}`, data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="product-item-wrapper">
      <img className="product-item-image " src={img} alt="" />
      <div className="product-item-text-wrapper">
        <Link to={`/product/${slug}`} className="link product-item-title-link">
          <h3 className="product-item-title">{title}</h3>
        </Link>
        <div>
          <span className="product-price">${price} </span>
          {oldPrice && <s className="product-price">${oldPrice}</s>}
        </div>
      </div>
      <button
        className="product-cart-button"
        onClick={(e) => handleAddToCart(e, userId, cartItems, slug)}
      >
        <i className="item-icon fa-solid fa-cart-shopping"></i>
        <span className="product-button-text">ADD TO CART</span>
      </button>
    </div>
  );
};

export default Product;

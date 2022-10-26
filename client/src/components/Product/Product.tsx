import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../utils/services/CartHandlers";
import { useIsMount } from "../../utils/hooks/useIsMount";

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

  const isMount = useIsMount();

  const handleAddToCart = async () => {
    if (!userId) throw new Error("Login! Fool, ya fool!");

    addToCart(dispatch, cartItems, slug, title, img, price, oldPrice);
  };

  useEffect(() => {
    const updateApiCart = async () => {
      let data = {
        user: userId,
        products: cartItems,
      };

      try {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/cart/${userId}`,
          data
        );
      } catch (err) {
        console.error(err);
      }
    };
    if (!isMount) updateApiCart();
  }, [cartItems]);

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
      <button className="product-cart-button" onClick={handleAddToCart}>
        <i className="item-icon fa-solid fa-cart-shopping"></i>
        <span className="product-button-text">ADD TO CART</span>
      </button>
    </div>
  );
};

export default Product;

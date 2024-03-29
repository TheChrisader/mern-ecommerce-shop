import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import "./Single.scss";
import { addToCart } from "../../utils/services/CartHandlers";
import { useIsMount } from "../../utils/hooks/useIsMount";
import { removeSavedItem, updateSavedItems } from "../../redux/UserRedux";

const Single = () => {
  const location = useLocation();
  const productSlug = location.pathname.split("/")[2];

  const [product, setProduct] = useState({} as any);

  const user = useSelector((state: any) => state.user.currentUser);
  const cart = useSelector((state: any) => state.cart.cart);

  const dispatch = useDispatch();

  const isMount = useIsMount();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/product/${productSlug}`,
          {
            withCredentials: true,
          }
        );
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, []);

  const handleCartClick = async () => {
    if (!user?._id) return alert("- Please sign in");

    addToCart(
      dispatch,
      cart,
      productSlug,
      product?.name,
      product?.mainImage,
      product?.price,
      product?.discountPrice
    );
  };

  const handleLikeClick = async () => {
    if (!user?._id) return alert("- Please sign in");

    let existingSavedItem = user.savedItems.find(
      (item: any) => productSlug === item.productSlug
    );

    if (!existingSavedItem) {
      dispatch(
        updateSavedItems({
          productName: product?.name,
          productSlug,
          productImage: product?.mainImage,
          productPrice: product?.price,
          inStock: !product?.isOutOfStock,
          id: product?._id,
        })
      );
    } else {
      dispatch(removeSavedItem(productSlug));
    }
  };

  useEffect(() => {
    const updateApiCart = async () => {
      let data = {
        user: user?._id,
        products: cart,
      };

      try {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/cart/${user?._id}`,
          data,
          {
            withCredentials: true,
          }
        );
      } catch (err) {
        console.error(err);
      }
    };
    if (!isMount) updateApiCart();
  }, [cart]);

  useEffect(() => {
    const updateLikedItems = async () => {
      try {
        await axios.put(
          `${process.env.REACT_APP_API_URL}/user/${user._id}`,
          {
            savedItems: user.savedItems,
          },
          {
            withCredentials: true,
          }
        );
      } catch (err) {
        console.log(err);
      }
    };
    if (!isMount) updateLikedItems();
  }, [user]);

  return (
    <>
      <section className="product-page-wrapper">
        <div className="product-image-wrapper">
          <div className="product-image-slider-wrapper">
            <img
              src={product?.mainImage}
              alt=""
              className="product-image-slider"
            />
          </div>
          <div className="product-images">
            <img
              src={product?.mainImage}
              alt=""
              className="product-slider-image"
            />
            <img
              src={product?.images && product?.images[0]}
              alt=""
              className="product-slider-image"
            />
            <img
              src={product?.images && product?.images[1]}
              alt=""
              className="product-slider-image"
            />
            <img
              src={product?.images && product?.images[2]}
              alt=""
              className="product-slider-image"
            />
          </div>
        </div>
        <div className="product-text-wrapper">
          <div className="product-title-wrapper">
            <h1 className="product-title">{product?.name}</h1>
            <div className="product-categories">
              {product?.categories &&
                product?.categories.map((category: string, i: number) => (
                  <span key={i} className="product-category">
                    {category}
                  </span>
                ))}
            </div>
            <span className="product-review">(1.5k customers review)</span>
          </div>

          <span className="product-description">{product?.description}</span>
          <div className="product-page-button-wrapper">
            <button
              type="button"
              className="product-page-cart"
              onClick={handleCartClick}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="product-page-like"
              onClick={handleLikeClick}
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Single;

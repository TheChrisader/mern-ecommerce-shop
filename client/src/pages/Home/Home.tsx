import { useRef } from "react";
import useObserver from "../../utils/hooks/useObserver";

import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import Widgets from "../../components/Widgets/Widgets";

import "./Home.scss";

const Home: React.FC = () => {
  const productTitleRef = useRef<HTMLHeadingElement | null>(null);
  let isProductVisible = useObserver(productTitleRef);

  const trendTitleRef = useRef<HTMLHeadingElement | null>(null);
  let isTrendVisible = useObserver(trendTitleRef);

  return (
    <>
      <Slider />
      <h2
        className={
          "products-heading " + (isProductVisible && "products-heading-active")
        }
        ref={productTitleRef}
      >
        Our Products
      </h2>
      <Products />
      <div className="trend">
        <div className="trend-container">
          <h1
            className={
              "trend-title " + (isTrendVisible && "trend-title-active")
            }
            ref={trendTitleRef}
          >
            Stay in Trend with ShopLite
          </h1>
          <Widgets />
        </div>
      </div>
    </>
  );
};

export default Home;

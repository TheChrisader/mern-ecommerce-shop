import { useRef } from "react";
import useObserver from "../../utils/hooks/useObserver";
import Product from "../Product/Product";

import "./Products.scss";

const Products: React.FC = () => {
  const productsRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useObserver(productsRef);

  const productTitleRef = useRef<HTMLHeadingElement | null>(null);
  const isProductVisible = useObserver(productTitleRef);

  return (
    <>
      <h2
        className={
          "products-heading " + (isProductVisible && "products-heading-active")
        }
        ref={productTitleRef}
      >
        Our Products
      </h2>
      <div
        className={"products-wrapper " + (isVisible && "products-active")}
        ref={productsRef}
      >
        <Product
          img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
          title="Learn Python Programming Masterclass"
          price={54.99}
        />
        <Product
          img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
          title="Learn Python"
          price={54.99}
          oldPrice={100.99}
        />
        <Product
          img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
          title="Learn Python"
          price={54.99}
          oldPrice={100.99}
        />
        <Product
          img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
          title="Learn Python"
          price={54.99}
          oldPrice={100.99}
        />
        <Product
          img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
          title="Learn Python"
          price={54.99}
          oldPrice={100.99}
        />
        <Product
          img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
          title="Learn Python"
          price={54.99}
          oldPrice={100.99}
        />
        <Product
          img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
          title="Learn Python"
          price={54.99}
          oldPrice={100.99}
        />
        <Product
          img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
          title="Learn Python"
          price={54.99}
          oldPrice={100.99}
        />
      </div>
    </>
  );
};

export default Products;

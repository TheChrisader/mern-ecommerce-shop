import { useState, useRef, useEffect } from "react";
import Product from "../Product/Product";

import "./Products.scss";

export type Props = {
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  border?: boolean;
};

const Products: React.FC = () => {
  const productsRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const callback = (entries: any) => {
    const [entry] = entries;
    console.log(entry.isIntersecting);
    if (!isVisible) setIsVisible(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    if (productsRef.current) observer.observe(productsRef.current);

    return () => {
      if (productsRef.current) observer.unobserve(productsRef.current);
    };
  }, [productsRef, options]);

  return (
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
        border={true}
      />
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python"
        price={54.99}
        oldPrice={100.99}
        border={true}
      />
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python"
        price={54.99}
        oldPrice={100.99}
        border={true}
      />
      <Product
        img="https://static.live.templately.com/2021/06/297c6a78-image0.png"
        title="Learn Python"
        price={54.99}
        oldPrice={100.99}
        border={true}
      />
    </div>
  );
};

export default Products;

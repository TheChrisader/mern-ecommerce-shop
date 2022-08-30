import axios from "axios";
import { useEffect, useRef, useState } from "react";
import useObserver from "../../utils/hooks/useObserver";
import Product from "../Product/Product";

import "./Products.scss";

const Products: React.FC = () => {
  const [products, setProducts] = useState([] as any);

  const productsRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useObserver(productsRef);

  const productTitleRef = useRef<HTMLHeadingElement | null>(null);
  const isProductVisible = useObserver(productTitleRef);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/product");
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);

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
        {products.map((product: any, i: number) => (
          <Product
            key={i}
            img={product?.mainImage}
            title={product.name}
            price={product.price}
            slug={product.slug}
          />
        ))}
      </div>
    </>
  );
};

export default Products;

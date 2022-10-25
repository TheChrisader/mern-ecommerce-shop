import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useObserver from "../../utils/hooks/useObserver";
import Product from "../Product/Product";

import "./Products.scss";

type filterProps = {
  category?: string;
  filters?: {
    [name: string]: string;
  };
  sort?: string;
};

const Products: React.FC<filterProps> = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([] as any);
  const [filteredProducts, setFilteredProducts] = useState([] as any);

  const productsRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useObserver(productsRef);

  const productTitleRef = useRef<HTMLHeadingElement | null>(null);
  const isProductVisible = useObserver(productTitleRef);

  const userId = useSelector((state: any) => state?.user?.currentUser?._id);
  const cart = useSelector((state: any) => state?.cart?.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          category ? `/product?category=${category}` : `/product`
        );
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [category]);

  useEffect(() => {
    filters &&
      setFilteredProducts(
        products.filter((item: any) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters]);

  useEffect(() => {
    switch (sort) {
      case "newest":
        setProducts((prev: any) =>
          [...prev].sort(
            (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
          )
        );
        break;
      case "lowest":
        setProducts((prev: any) => [...prev].sort((a, b) => a.price - b.price));
        break;
      case "highest":
        setProducts((prev: any) => [...prev].sort((a, b) => b.price - a.price));
        break;
      default:
        break;
    }
  }, [sort]);

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
        {filters
          ? filteredProducts?.map((product: any, i: number) => (
              <Product
                key={i}
                img={product?.mainImage}
                title={product.name}
                price={product.price}
                slug={product.slug}
                userId={userId}
                cartItems={cart}
              />
            ))
          : products.map((product: any, i: number) => (
              <Product
                key={i}
                img={product?.mainImage}
                title={product.name}
                price={product.price}
                slug={product.slug}
                userId={userId}
                cartItems={cart}
              />
            ))}
      </div>
    </>
  );
};

export default Products;

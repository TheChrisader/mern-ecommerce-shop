import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/CartRedux";

export const addToCart = (products: any, slug: string) => {
  const dispatch = useDispatch();
  let clone = products.map((item: any) => {
    return { ...item };
  });
  let productItem = clone.find((item: any) => item.productSlug === slug);
  if (!productItem) {
    let data = { productSlug: slug, quantity: 1 };
    let newCart = [...clone, data];
    dispatch(addProduct(newCart));
  } else {
    productItem.quantity++;
    dispatch(addProduct(clone));
  }
};

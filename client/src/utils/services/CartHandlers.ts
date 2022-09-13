import { updateCart } from "../../redux/CartRedux";

export const addToCart = (
  dispatch: React.Dispatch<any>,
  products: any,
  slug: string,
  name?: string,
  image?: string,
  price?: number,
  discount?: number
) => {
  let clone = products.map((item: any) => {
    return { ...item };
  });
  let productItem = clone.find((item: any) => item.productSlug === slug);
  if (!productItem) {
    let data = {
      productName: name,
      productSlug: slug,
      productImage: image,
      quantity: 1,
      productPrice: price,
      productDiscount: discount ? discount : 0,
    };
    let newCart = [...clone, data];
    dispatch(updateCart(newCart));
  } else {
    productItem.quantity++;
    dispatch(updateCart(clone));
  }
};

export const removeFromCart = (
  dispatch: React.Dispatch<any>,
  products: any,
  slug: string
) => {
  let clone = products.map((item: any) => {
    return { ...item };
  });
  let productItem = clone.find((item: any) => item.productSlug === slug);
  if (productItem.quantity === 1) {
    let newCart = clone.filter((item: any) => item.productSlug !== slug);
    dispatch(updateCart(newCart));
  } else {
    productItem.quantity--;
    dispatch(updateCart(clone));
  }
};

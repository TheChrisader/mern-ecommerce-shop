import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Input from "../../components/Input/Input";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { updateProduct } from "../../redux/apiCalls";
import {
  handleInputChange,
  handleFileInputChange,
  handleImageDelete,
} from "../../utils/services/InputHandlers";

import "./SingleProduct.scss";

type inputsProps = {
  id: number;
  name: string;
  type: "text" | "number";
  placeholder?: string;
  setState: React.Dispatch<React.SetStateAction<any>>;
  isArray: boolean;
}[];

const SingleProduct: React.FC = () => {
  const location = useLocation();
  const productSlug = location.pathname.split("/")[2];

  const product = useSelector((state: any) =>
    state.product.products.find((product: any) => product.slug === productSlug)
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [images, setImages] = useState<(string | undefined)[]>(
    Array(4).fill(undefined)
  );
  const [categories, setCategories] = useState<string[] | undefined>(undefined);
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [discountPrice, setDiscountPrice] = useState<number | undefined>(
    undefined
  );
  const [colors, setColors] = useState<string[] | undefined>(undefined);
  const [sizes, setSizes] = useState<string[] | undefined>(undefined);
  const [quantity, setQuantity] = useState<number | undefined>(undefined);
  const [stock, setStock] = useState(undefined);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let mainImage: string | undefined = images[0] ? images.shift() : undefined;
    let pointer: number = 0;
    let doesImagesExist: boolean = false;
    for (let i = 0; i < images.length; i++) {
      if (typeof images[i] !== "undefined") pointer++;
      if (pointer > 0) doesImagesExist = true;
      images[i] = images[i] ? images[i] : product.images[i];
    }
    let data = {
      name: title,
      description,
      mainImage,
      images: undefined as undefined | (string | undefined)[],
      price,
      categories,
      discountPrice,
      colors,
      sizes,
      quantity,
      stock,
    };
    if (doesImagesExist) data["images"] = images;
    await updateProduct(dispatch, product._id, data);
  };

  const inputs: inputsProps = [
    {
      id: 1,
      name: "Name",
      type: "text",
      placeholder: product?.name,
      setState: setTitle,
      isArray: false,
    },
    {
      id: 2,
      name: "Description",
      type: "text",
      placeholder: product?.description,
      setState: setDescription,
      isArray: false,
    },
    {
      id: 3,
      name: "Price",
      type: "number",
      placeholder: product?.price,
      setState: setPrice,
      isArray: false,
    },
    {
      id: 4,
      name: "Categories",
      type: "text",
      placeholder: product?.categories,
      setState: setCategories,
      isArray: true,
    },
    {
      id: 5,
      name: "Discount Price",
      type: "number",
      placeholder: product?.discountPrice,
      setState: setDiscountPrice,
      isArray: false,
    },
    {
      id: 6,
      name: "Colors",
      type: "text",
      placeholder: product?.colors,
      setState: setColors,
      isArray: true,
    },
    {
      id: 7,
      name: "Sizes",
      type: "text",
      placeholder: product?.sizes,
      setState: setSizes,
      isArray: true,
    },
    {
      id: 8,
      name: "Quantity",
      type: "number",
      placeholder: product?.quantity,
      setState: setQuantity,
      isArray: false,
    },
  ];

  return (
    <main className="single-product-wrapper">
      <section className="single-product-top">
        <h2 className="single-product-title">Product</h2>
        <Link to="/product/new" className="link single-create-product">
          Create
        </Link>
      </section>
      <h2 className="single-product-info-title">{product?.name}</h2>
      <form action="submit" onSubmit={handleSubmit}>
        {/* Inputs */}
        <div className="single-product-form-divider">
          {inputs.map((input) => {
            return (
              <Input
                key={input.id}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                handleInputChange={handleInputChange}
                setState={input.setState}
              />
            );
          })}

          {/* Stock */}
          <label htmlFor="product-stock" className="single-product-label">
            In Stock?
          </label>
          <select
            name="in-stock"
            id="product-stock"
            className="single-product-select"
            onChange={(e) => handleInputChange(e.target.value, setStock)}
          >
            <option value="true"> Yes </option>
            <option value="false"> No </option>
          </select>
        </div>

        <div className="single-product-form-right">
          {/* Image Upload */}
          {[0, 1, 2, 3].map((index, i) => {
            return (
              <ImageUpload
                key={i}
                imagesArray={images}
                images={product?.images}
                mainImage={product?.mainImage}
                ImageInputHandler={handleFileInputChange}
                ImageDeleteHandler={handleImageDelete}
                setState={setImages}
                index={index}
              />
            );
          })}
        </div>

        <button className="single-product-upload">Upload</button>
      </form>
    </main>
  );
};

export default SingleProduct;

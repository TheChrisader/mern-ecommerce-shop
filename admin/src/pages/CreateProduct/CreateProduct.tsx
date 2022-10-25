import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import Input from "../../components/Input/Input";

import { addProduct } from "../../redux/apiCalls/productApiCalls";
import {
  handleInputChange,
  handleFileInputChange,
  handleImageDelete,
} from "../../utils/services/InputHandlers";

import "./CreateProduct.scss";

type inputsProps = {
  id: number;
  name: string;
  type: "text" | "number";
  setState: React.Dispatch<React.SetStateAction<any>>;
  isArray: boolean;
}[];

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<(string | undefined)[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState<number | undefined>(
    undefined
  );
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number | undefined>(undefined);

  const dispatch = useDispatch();

  const isFetching = useSelector((state: any) => state.product.isFetching);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    let imageArray = images;
    let mainImage = imageArray.shift();
    const newProduct = {
      name: title,
      mainImage,
      images: imageArray,
      description,
      categories,
      price,
      discountPrice,
      colors,
      sizes,
      quantity,
    };
    await addProduct(dispatch, newProduct);
  };

  const inputs: inputsProps = [
    {
      id: 1,
      name: "Name",
      type: "text",
      setState: setTitle,
      isArray: false,
    },
    {
      id: 2,
      name: "Description",
      type: "text",
      setState: setDescription,
      isArray: false,
    },
    {
      id: 3,
      name: "Price",
      type: "number",
      setState: setPrice,
      isArray: false,
    },
    {
      id: 4,
      name: "Categories",
      type: "text",
      setState: setCategories,
      isArray: true,
    },
    {
      id: 5,
      name: "Discount Price",
      type: "number",
      setState: setDiscountPrice,
      isArray: false,
    },
    {
      id: 6,
      name: "Colors",
      type: "text",
      setState: setColors,
      isArray: true,
    },
    {
      id: 7,
      name: "Sizes",
      type: "text",
      setState: setSizes,
      isArray: true,
    },
    {
      id: 8,
      name: "Quantity",
      type: "number",
      setState: setQuantity,
      isArray: false,
    },
  ];

  return (
    <main className="create-product-wrapper">
      <h1 className="create-product-title">Add Product</h1>
      <form action="submit" onSubmit={handleSubmit}>
        <div className="create-product-form-wrapper">
          <div className="create-product-image">
            {[0, 1, 2, 3].map((index, i) => {
              return (
                <ImageUpload
                  key={i}
                  imagesArray={images}
                  ImageInputHandler={handleFileInputChange}
                  ImageDeleteHandler={handleImageDelete}
                  setState={setImages}
                  index={index}
                />
              );
            })}
          </div>

          <div className="create-product-inputs-group">
            {inputs.map((input) => {
              return (
                <Input
                  key={input.id}
                  type={input.type}
                  name={input.name}
                  handleInputChange={handleInputChange}
                  setState={input.setState}
                  isArray={input.isArray}
                />
              );
            })}
          </div>
        </div>
        {isFetching && <div className="create-product-loader"></div>}
        <button type="submit" className="create-product-submit">
          Create Product
        </button>
      </form>
    </main>
  );
};

export default CreateProduct;

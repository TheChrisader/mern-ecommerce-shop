import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addProduct } from "../../redux/apiCalls";

import "./CreateProduct.scss";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<string[]>([]);
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

  const handleFileInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    if (!e.target.files) return;
    const file: Blob | null = e.target.files[0];
    createFileUrl(file, i);
  };

  const createFileUrl = (file: Blob, i: number) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImages((prev) => {
        let copy = [...prev];
        if (typeof reader.result === "string") copy[i] = reader.result;
        return copy;
      });
    };
  };

  return (
    <main className="create-product-wrapper">
      <h1 className="create-product-title">Add Product</h1>
      <form
        action="submit"
        onSubmit={handleSubmit}
        className="create-product-form"
      >
        <div className="create-product-form-wrapper">
          <div className="create-product-image">
            {images.map((value, i) => (
              <img src={value} alt="" key={i} />
            ))}
            <label htmlFor="image" className="create-product-label">
              Image*
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => handleFileInputChange(e, 0)}
            />

            <input
              type="file"
              id="image"
              onChange={(e) => handleFileInputChange(e, 1)}
            />
          </div>

          <div className="create-product-inputs-group">
            <div className="create-product-input-wrapper">
              <label htmlFor="title" className="create-product-label">
                Title*
              </label>
              <input
                type="text"
                id="title"
                onChange={(e) => setTitle(e.target.value)}
                className="create-image-input"
              />
            </div>

            <div className="create-product-input-wrapper">
              <label htmlFor="description" className="create-product-label">
                Description*
              </label>
              <input
                type="text"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
                className="create-image-input"
              />
            </div>

            <div className="create-product-input-wrapper">
              <label htmlFor="categories" className="create-product-label">
                Categories*
              </label>
              <input
                type="text"
                id="categories"
                onChange={(e) => setCategories(e.target.value.split(", "))}
                className="create-image-input"
              />
            </div>

            <div className="create-product-input-wrapper">
              <label htmlFor="price" className="create-product-label">
                Price*
              </label>
              <input
                type="number"
                id="price"
                onChange={(e) => setPrice(Number(e.target.value))}
                className="create-image-input"
              />
            </div>

            <div className="create-product-input-wrapper">
              <label htmlFor="dicount-price" className="create-product-label">
                Discount Price
              </label>
              <input
                type="number"
                id="discount-price"
                onChange={(e) => setDiscountPrice(Number(e.target.value))}
                className="create-image-input"
              />
            </div>

            <div className="create-product-input-wrapper">
              <label htmlFor="colors" className="create-product-label">
                Colors
              </label>
              <input
                type="text"
                id="colors"
                onChange={(e) => setColors(e.target.value.split(", "))}
                className="create-image-input"
              />
            </div>

            <div className="create-product-input-wrapper">
              <label htmlFor="sizes" className="create-product-label">
                Sizes
              </label>
              <input
                type="text"
                id="sizes"
                onChange={(e) => setSizes(e.target.value.split(", "))}
                className="create-image-input"
              />
            </div>

            <div className="create-product-input-wrapper">
              <label htmlFor="quantity" className="create-product-label">
                Quantity
              </label>
              <input
                type="text"
                id="quantity"
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="create-image-input"
              />
            </div>
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

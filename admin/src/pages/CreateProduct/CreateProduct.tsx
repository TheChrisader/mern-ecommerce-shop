import { useState } from "react";
import axios from "axios";

import "./CreateProduct.scss";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState({ 0: "" });
  const [categories, setCategories] = useState<string[]>([]);
  const [price, setPrice] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    let imageArray = Object.values(images);
    let mainImage = imageArray.shift();
    const newProduct = {
      name: title,
      mainImage,
      images: imageArray,
      description,
      categories,
      price,
    };
    try {
      await axios.post("/product", newProduct);
      console.log("done");
    } catch (err: unknown) {
      console.log(err);
    }
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
      setImages((prev) => ({ ...prev, [i]: reader.result }));
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
            {Object.values(images).map((value, i) => (
              <img src={value} alt="" key={i} />
            ))}
            <label htmlFor="image" className="create-product-label">
              Image
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
          <div className="create-product-input-wrapper">
            <label htmlFor="title" className="create-product-label">
              Title
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
              Description
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
              Categories
            </label>
            <input
              type="text"
              id="categories"
              onChange={(e) =>
                setCategories((prev) => [...prev, e.target.value])
              }
              className="create-image-input"
            />
          </div>
          <div className="create-product-input-wrapper">
            <label htmlFor="price" className="create-product-label">
              Price
            </label>
            <input
              type="number"
              id="price"
              onChange={(e) => setPrice(Number(e.target.value))}
              className="create-image-input"
            />
          </div>
        </div>
        <button type="submit" className="create-product-submit">
          Create Product
        </button>
      </form>
    </main>
  );
};

export default CreateProduct;

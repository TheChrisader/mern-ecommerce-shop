import React from "react";

import "./ImageUpload.scss";

type ImageUploadProps = {
  imagesArray: (string | undefined)[];
  images?: (string | undefined)[];
  mainImage?: string;
  ImageInputHandler: Function;
  ImageDeleteHandler: Function;
  setState: React.Dispatch<React.SetStateAction<(string | undefined)[]>>;
  index: number;
};

const ImageUpload: React.FC<ImageUploadProps> = ({
  imagesArray,
  images,
  mainImage,
  ImageInputHandler,
  ImageDeleteHandler,
  setState,
  index,
}) => {
  return (
    <>
      <div className="product-image-upload-wrapper">
        <img
          src={
            imagesArray[index]
              ? imagesArray[index]
              : index === 0
              ? mainImage
              : images && images[index - 1]
          }
          className="product-image"
          alt=""
        />
        <label
          htmlFor={"file-upload-" + index}
          className="product-image-upload"
          tabIndex={0}
        >
          <i className="fa-solid fa-upload image-upload-icon"></i>
          <input
            type="file"
            id={"file-upload-" + index}
            style={{ display: "none" }}
            onChange={(e) => ImageInputHandler(e, index, setState)}
          />
        </label>
        <button
          type="button"
          className="image-delete-button"
          onClick={(e) => ImageDeleteHandler(index, setState)}
        >
          <i className="fa-solid fa-ban product-image-delete"></i>
        </button>
      </div>
    </>
  );
};

export default ImageUpload;

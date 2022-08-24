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

type uploadComponent = {
  index: number;
  ImageInputHandler: Function;
  setState: React.Dispatch<React.SetStateAction<(string | undefined)[]>>;
  children: React.ReactNode;
};

const UploadComponent: React.FC<uploadComponent> = ({
  index,
  ImageInputHandler,
  setState,
  children,
}) => {
  return (
    <div>
      <input
        type="file"
        id={"file-upload-" + index}
        className="product-image-button"
        onChange={(e) => ImageInputHandler(e, index, setState)}
      />
      <label htmlFor={"file-upload-" + index} className="product-image-upload">
        {children}
      </label>
    </div>
  );
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

        <UploadComponent
          index={index}
          ImageInputHandler={ImageInputHandler}
          setState={setState}
        >
          <i className="fa-solid fa-upload image-upload-icon"></i>
        </UploadComponent>

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

import "./Input.scss";
import React from "react";

type InputProps = {
  type: "text" | "number";
  placeholder?: string;
  name: string;
  handleInputChange: Function;
  setState: React.Dispatch<React.SetStateAction<any>>;
  isArray?: boolean;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  handleInputChange,
  setState,
  isArray,
}) => {
  return (
    <div className="product-input-wrapper">
      <label htmlFor="product-name" className="product-label">
        Product {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="product-input"
        id={"product-" + name}
        onChange={(e) =>
          type === "text"
            ? handleInputChange(e.target.value.trim(), setState, isArray)
            : handleInputChange(Number(e.target.value), setState)
        }
      />
    </div>
  );
};

export default Input;

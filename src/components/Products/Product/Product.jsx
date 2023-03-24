import React from "react";
import "./Product.scss";
import prod1 from "../../../assets/products/earbuds-prod-1.webp";
const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={prod1} alt="" />
      </div>
      <div className="prod-details">
        <span className="name">Product Name</span>
        <span className="price">$499</span>
      </div>
    </div>
  );
};

export default Product;

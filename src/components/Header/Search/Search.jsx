import React from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import Prod1 from "../../../assets/products/earbuds-prod-1.webp";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={Prod1} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

import React from "react";
import Product from "./Product/Product";
import "./Products.scss";
import Loading from "../loading/Loading";
const Products = ({ innerPage, headingText, products }) => {
  return (
    <>
      {!products?.data?.length ? (
        <Loading />
      ) : (
        <div className="products-container">
          {!innerPage && <div className="sec-heading">{headingText}</div>}
          <div className="products">
            {products?.data?.map((item) => (
              <Product key={item.id} id={item.id} data={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Products;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Category.scss";
import CategoryLoading from "../../loading/CategoryLoading";
const Category = ({ categories }) => {
  const navigate = useNavigate();
  return (
    <>
      {!categories?.data?.length ? (
        <CategoryLoading />
      ) : (
        <div className="shop-by-category">
          <div className="categories">
            {categories?.data?.map((item) => (
              <div
                key={item.id}
                className="category"
                onClick={() => navigate(`/category/${item.id}`)}
              >
                <img src={item.attributes.img.data.attributes.url} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Category;

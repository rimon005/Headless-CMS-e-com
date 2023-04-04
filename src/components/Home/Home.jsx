import React, { useContext, useEffect } from "react";
import { fetchData } from "../../utils/api";
import { Context } from "../../utils/context";
import Products from "../Products/Products";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import "./Home.scss";
const Home = () => {
  const { setCategories, categories, setProducts, products } =
    useContext(Context);

  // getData from server
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  // fetch categories data
  const getCategories = () => {
    fetchData("/api/categories?populate=*").then((res) => {
      setCategories(res);
    });
  };

  // fetch products data
  const getProducts = () => {
    fetchData("/api/products?populate=*").then((res) => {
      setProducts(res);
    });
  };
  return (
    <div className="home">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;

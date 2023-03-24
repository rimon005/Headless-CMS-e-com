import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter/Newsletter";
import Header from "../../components/Header/Header";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Newsletter />
      <Footer />
    </>
  );
};

export default MainLayouts;

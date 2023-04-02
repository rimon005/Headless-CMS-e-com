import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Newsletter from "../../components/Footer/Newsletter/Newsletter";
import Header from "../../components/Header/Header";

const MainLayouts = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
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

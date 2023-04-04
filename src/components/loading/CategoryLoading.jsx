import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./loading.css";

const CategoryLoading = () => {
  return (
    <div className="loading">
      <Skeleton variant="rectangular" width={"100%"} height={150} />
      <Skeleton variant="rectangular" width={"100%"} height={150} />
      <Skeleton variant="rectangular" width={"100%"} height={150} />
      <Skeleton variant="rectangular" width={"100%"} height={150} />
    </div>
  );
};

export default CategoryLoading;

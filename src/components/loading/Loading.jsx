import * as React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import "./loading.css";

const Loading = () => {
  const loading = false;
  return (
    <div className="loading">
      {/* {loading ? Array.from(new Array(4)) : } */}
      <div>
        <Skeleton variant="rectangular" width={"100%"} height={350} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </div>
      <div>
        <Skeleton variant="rectangular" width={"100%"} height={350} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </div>
      <div>
        <Skeleton variant="rectangular" width={"100%"} height={350} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </div>
      <div>
        <Skeleton variant="rectangular" width={"100%"} height={350} />
        <Box sx={{ pt: 0.5 }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </div>
    </div>
  );
};

export default Loading;

import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category/Category";
import Home from "../components/Home/Home";
import SingleProduct from "../components/SingleProduct/SingleProduct";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/success",
        element: (
          <h1 style={{ padding: "20px", color: "#8E2DE2" }}>
            Payment Successfully
          </h1>
        ),
      },
    ],
  },
]);
export default router;

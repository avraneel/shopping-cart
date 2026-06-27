import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import Navbar from "./Navbar";

const routes = [
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];

export default routes;

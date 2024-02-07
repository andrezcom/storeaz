import { useRoutes } from "react-router-dom";
import Home from "../../Pages/Home";
import MyAccount from "../../Pages/MyAccount";
import MyOrder from "../../Pages/MyOrder";
import MyOrders from "../../Pages/MyOrders";
import NotFound from "../../Pages/NotFound";
import SignIn from "../../Pages/SignIn";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/account",
      element: <MyAccount />,
    },
    {
      path: "/myorder",
      element: <MyOrder />,
    },
    {
      path: "/orderes",
      element: <MyOrders />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default AppRoutes;

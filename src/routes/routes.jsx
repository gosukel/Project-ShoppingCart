import App from "../App";
import HomePage from "../components/homepage/HomePage";
import ShopPage from "../components/shopPage/ShopPage";

const routes = [
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/shop",
        element: <ShopPage />,
    },
];

export default routes;

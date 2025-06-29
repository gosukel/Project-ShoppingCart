import App from "../App";
import HomePage from "../components/homepage/HomePage";
import ShopPage from "../components/shop/shopPage/ShopPage";
import CartPage from "../components/cart/cartPage/CartPage";
import ItemGrid from "../components/shop/itemGrid/ItemGrid";

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "shop",
                element: <ShopPage />,
                children: [
                    { index: true, element: <ItemGrid /> },
                    { path: "cart", element: <CartPage /> },
                ],
            },
        ],
    },
];

export default routes;

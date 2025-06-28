import App from "../App";
import HomePage from "../components/homepage/HomePage";
import ShopPage from "../components/shopPage/ShopPage";
import CartPage from "../components/cartPage/CartPage";
import ItemGrid from "../components/itemGrid/ItemGrid";

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
    // {
    //     path: "/shop",
    //     element: <ShopPage />,
    //     children: [
    //         { index: true, element: <ItemGrid /> },
    //         { path: "cart", element: <CartPage /> },
    //     ],
    // },
];

export default routes;

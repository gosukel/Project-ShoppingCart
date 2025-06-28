import { useState, useEffect, createContext } from "react";
import Loader from "./components/loader/Loader";
import { Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
    const url = "https://fakestoreapi.com/products";
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [cartQty, setCartQty] = useState(0);

    const shopData = {
        items,
        cartItems,
        cartQty,
        setItems,
        addToCart,
        lowerItemQty,
        removeItem,
    };

    // get items
    function getItems() {
        fetch(url)
            .then((response) => response.json())
            .then((result) => setItems(result))
            .catch((err) => setError(err))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        getItems();
    }, []);

    // state updaters
    function addToCart(item, qty = 1) {
        if (qty === 0) return;
        if (cartItems.length === 0) {
            let newCartItem = { ...item, qty: qty };
            setCartItems([newCartItem]);
            setCartQty((q) => q + qty);
            return;
        }
        // check for item in cart
        let inCart = false;
        let newCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                inCart = true;
                return { ...cartItem, qty: cartItem.qty + qty };
            } else {
                return cartItem;
            }
        });
        if (!inCart) {
            let newCartItem = { ...item, qty: qty };
            console.log(newCartItem);
            newCartItems.push(newCartItem);
            console.log(newCartItems);
        }

        setCartItems(newCartItems);
        setCartQty((q) => q + qty);
        return;
    }

    function lowerItemQty(item) {
        setCartQty((q) => q - 1);
        if (item.qty === 1) {
            removeItem(item);
            return;
        }
        let newCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === item.id) {
                return { ...cartItem, qty: cartItem.qty - 1 };
            } else {
                return cartItem;
            }
        });
        setCartItems(newCartItems);
    }

    function removeItem(item) {
        setCartQty((q) => q - item.qty);
        if (cartItems.length === 1) {
            setCartItems([]);
            return;
        }
        let newCartItems = cartItems.filter((i) => {
            return i.id !== item.id;
        });
        setCartItems(newCartItems);
    }
    return (
        <div className="pageBody">
            {loading && <Loader />}
            {!loading && <Outlet context={shopData} />}
        </div>
    );
}

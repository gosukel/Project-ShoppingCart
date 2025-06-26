import { useState, useEffect } from "react";
import styles from "./ShopPage.module.css";
import Navbar from "../navbar/Navbar";
import Loader from "../loader/Loader";
import ItemGrid from "../itemGrid/ItemGrid";

export default function ShopPage() {
    const url = "https://fakestoreapi.com/products";
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [cartQty, setCartQty] = useState(0);

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
    });

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

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
        setCartItems(newCartItems);
        setCartQty((q) => q + qty);
        return;
        // for (let cartItem of cartItems) {
        //     if (cartItem.id === item.id) {
        //         let newCartItem = { ...cartItem, qty: cartItem.qty + qty };
        //     }
        // }
        // let newCart = [...cartItems, item];
        // setCartItems(newCart);
    }

    return (
        <div className={styles.shopBody}>
            <Navbar cartCounter={cartQty} />
            {loading && <Loader />}
            {!loading && <ItemGrid items={items} addToCart={addToCart} />}
        </div>
    );
}

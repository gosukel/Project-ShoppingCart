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

    // state updaters
    function addToCart(item) {
        let newCart = [...cartItems, item];
        setCartItems(newCart);
    }

    return (
        <div className={styles.shopBody}>
            <Navbar cartCounter={cartItems.length} />
            {loading && <Loader />}
            {!loading && <ItemGrid items={items} />}
        </div>
    );
}

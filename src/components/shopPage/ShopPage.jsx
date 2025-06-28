// import { useState, useEffect, createContext } from "react";
import styles from "./ShopPage.module.css";
import Navbar from "../navbar/Navbar";
// import Loader from "../loader/Loader";
// import ItemGrid from "../itemGrid/ItemGrid";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
// items, getItems, error, setError, loading, setLoading
export default function ShopPage() {
    const shopData = useOutletContext();
    console.log(shopData);
    return (
        <div className={styles.shopBody}>
            <Navbar cartCounter={shopData.cartQty} />
            <Outlet context={shopData} />
        </div>
    );
}

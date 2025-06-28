import styles from "./ShopPage.module.css";
import Navbar from "../../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ShopPage() {
    const shopData = useOutletContext();

    return (
        <div className={styles.shopBody}>
            <Navbar cartCounter={shopData.cartQty} />
            <Outlet context={shopData} />
        </div>
    );
}

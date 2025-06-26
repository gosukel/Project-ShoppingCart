import styles from "./CartPage.module.css";
import Navbar from "../navbar/Navbar";
import { useOutletContext } from "react-router-dom";

export default function CartPage() {
    const { cartItems } = useOutletContext();
    return (
        <div className={styles.cartBody}>
            <div className={styles.cartDetails}>
                <div></div>
            </div>
            <div className={styles.cartSummary}></div>
        </div>
    );
}

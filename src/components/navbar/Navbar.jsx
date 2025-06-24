import styles from "./Navbar.module.css";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
    return (
        <div className={styles.navbarDiv}>
            <a className={styles.navbarLink}>Home</a>
            <a className={styles.navbarLink}>Shop</a>
            <div className={styles.navbarCart}>
                <ShoppingCart className={styles.cartIcon} />
                <div className={styles.cartCounter}>0</div>
            </div>
        </div>
    );
}

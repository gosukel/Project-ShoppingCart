import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar({ cartCounter }) {
    return (
        <div className={styles.navbarDiv}>
            <Link className={styles.navbarLink} to="/">
                Home
            </Link>
            <Link className={styles.navbarLink} to="/shop">
                Shop
            </Link>
            <Link className={styles.navbarCart} to="/shop/cart">
                <ShoppingCart className={styles.cartIcon} />
                <div className={styles.cartCounter}>{cartCounter}</div>
            </Link>
        </div>
    );
}

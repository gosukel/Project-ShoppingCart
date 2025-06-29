import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useOutletContext } from "react-router-dom";

export default function Navbar() {
    const { cartQty } = useOutletContext();
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
                <div className={styles.cartCounter}>{cartQty}</div>
            </Link>
        </div>
    );
}

import styles from "./CartHeader.module.css";

export default function CartHeader() {
    return (
        <div className={styles.cartTitle}>
            <h2>Shopping Cart</h2>
            <p>Price</p>
        </div>
    );
}

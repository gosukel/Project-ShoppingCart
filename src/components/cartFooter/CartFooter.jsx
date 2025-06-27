import styles from "./CartFooter.module.css";

export default function CartFooter({ cartQty, subtotal }) {
    return (
        <div className={styles.cartFooter}>
            <p className={styles.subtotalText}>
                Subtotal {`(${cartQty} items)`}:{" "}
                <span className={styles.subtotalPrice}>${subtotal}</span>
            </p>
        </div>
    );
}

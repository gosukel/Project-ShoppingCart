import styles from "./CartSummary.module.css";

export default function CartSummary({ cartQty, subtotal }) {
    function checkoutClick() {
        alert("you have successfully checked out!");
    }
    return (
        <div className={styles.cartSummary}>
            <div className={styles.cartSubtotalRight}>
                <p className={styles.subtotalText}>
                    Subtotal {`(${cartQty} items)`}:{" "}
                    <span className={styles.subtotalPrice}>${subtotal}</span>
                </p>
            </div>
            <button className={styles.checkoutBtn} onClick={checkoutClick}>
                Proceed to checkout
            </button>
        </div>
    );
}

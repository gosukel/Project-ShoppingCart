import styles from "./CartSummary.module.css";
import { useOutletContext } from "react-router-dom";

export default function CartSummary({ subtotal }) {
    const { cartQty } = useOutletContext();
    function checkoutClick() {
        alert(`you have successfully checked out! \n ${cartQty} items bought`);
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

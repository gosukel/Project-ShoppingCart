import styles from "./CartFooter.module.css";
import { useOutletContext } from "react-router-dom";

export default function CartFooter({ subtotal }) {
    const { cartQty } = useOutletContext();
    return (
        <div className={styles.cartFooter}>
            <p className={styles.subtotalText}>
                Subtotal {`(${cartQty} items)`}:{" "}
                <span className={styles.subtotalPrice}>${subtotal}</span>
            </p>
        </div>
    );
}

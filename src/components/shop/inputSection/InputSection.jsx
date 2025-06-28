import { useState } from "react";
import styles from "./InputSection.module.css";

export default function InputSection({ item, addToCart }) {
    const [qty, setQty] = useState(0);

    function adjustQty(btnType) {
        if (btnType === "-") {
            if (qty === 0) return;
            setQty((q) => q - 1);
            return;
        }
        if (btnType === "+") {
            setQty((q) => q + 1);
            return;
        }
    }

    return (
        <div className={styles.inputSection}>
            <div className={styles.inputContainer}>
                <button
                    className={styles.qtyModifier}
                    onClick={() => adjustQty("-")}
                >
                    -
                </button>
                <input
                    type="number"
                    min={0}
                    className={styles.qtyInput}
                    value={qty}
                    onChange={(event) => setQty(event.target.value)}
                />
                <button
                    className={styles.qtyModifier}
                    onClick={() => adjustQty("+")}
                >
                    +
                </button>
            </div>
            <button
                className={styles.addToCart}
                onClick={() => addToCart(item, qty)}
            >
                Add to cart
            </button>
        </div>
    );
}

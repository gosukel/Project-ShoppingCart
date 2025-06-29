import styles from "./CartItemDetails.module.css";
import { useOutletContext } from "react-router-dom";
import { Trash } from "lucide-react";

export default function CartItemDetails({ item }) {
    const { addToCart, lowerItemQty, removeItem } = useOutletContext();

    return (
        <div className={styles.itemDetailSection}>
            <p className={styles.itemName}>{item.title}</p>
            <p className={styles.itemDescription}>{item.description}</p>
            <div className={styles.itemButtonSection}>
                <div className={styles.editBtnGroup}>
                    {item.qty === 1 && (
                        <Trash
                            className={styles.trashBtn}
                            onClick={() => removeItem(item)}
                        />
                    )}
                    {item.qty > 1 && (
                        <a
                            className={styles.lowerBtn}
                            onClick={() => lowerItemQty(item)}
                        >
                            -
                        </a>
                    )}
                    <p className={styles.editQty}>{item.qty}</p>
                    <a
                        className={styles.addBtn}
                        onClick={() => addToCart(item)}
                    >
                        +
                    </a>
                </div>
                <div className={styles.otherBtnGroup}>
                    <a
                        className={styles.itemDelBtn}
                        onClick={() => removeItem(item)}
                    >
                        Delete
                    </a>
                    <a className={styles.itemSaveBtn}>Save for later</a>
                    <a className={styles.itemShareBtn}>Share</a>
                </div>
            </div>
        </div>
    );
}

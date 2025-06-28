import styles from "./CartItem.module.css";
import { useOutletContext } from "react-router-dom";
import { Trash } from "lucide-react";
import { splitPrice } from "../../../utils/utilities";

export default function CartItem({ item }) {
    const { addToCart, lowerItemQty, removeItem } = useOutletContext();
    let priceSplit = splitPrice(item.price * item.qty);
    // console.log(priceSplit);
    return (
        <div className={styles.itemSection}>
            <div className={styles.itemImageSection}>
                <img className={styles.itemImage} src={item.image} />
            </div>
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
            <div className={styles.itemPrice}>
                <span className={styles.dollarSign}>$</span>
                <span className={styles.itemPriceLg}>{priceSplit[0]}</span>
                <span className={styles.itemPriceSm}>{priceSplit[1]}</span>
            </div>
        </div>
    );
}

import styles from "./CartItem.module.css";
import { useOutletContext } from "react-router-dom";
import { Trash } from "lucide-react";
import { splitPrice } from "../../../utils/utilities";
import CartItemDetails from "../cartItemDetails/CartItemDetails";

export default function CartItem({ item }) {
    let priceSplit = splitPrice(item.price * item.qty);

    return (
        <div className={styles.itemSection}>
            <div className={styles.itemImageSection}>
                <img className={styles.itemImage} src={item.image} />
            </div>
            <CartItemDetails item={item} />
            <div className={styles.itemPrice}>
                <span className={styles.dollarSign}>$</span>
                <span className={styles.itemPriceLg}>{priceSplit[0]}</span>
                <span className={styles.itemPriceSm}>{priceSplit[1]}</span>
            </div>
        </div>
    );
}

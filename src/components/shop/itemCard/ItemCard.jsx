import styles from "./ItemCard.module.css";
import InputSection from "../inputSection/InputSection";
import { splitPrice } from "../../../utils/utilities";

export default function ItemCard({ item, addToCart }) {
    let priceSplit = splitPrice(item.price);

    return (
        <div className={styles.itemCard}>
            <div className={styles.itemImageDiv}>
                <img src={item.image} />
            </div>
            <div className={styles.itemTextDiv}>
                <p>
                    $<span className={styles.itemPriceLg}>{priceSplit[0]}</span>
                    <span className={styles.itemPriceSm}>{priceSplit[1]}</span>
                </p>
                <p className={styles.itemDescription}>{item.title}</p>
            </div>
            <InputSection item={item} addToCart={addToCart} />
        </div>
    );
}

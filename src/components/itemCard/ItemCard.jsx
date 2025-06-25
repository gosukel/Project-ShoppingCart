import styles from "./ItemCard.module.css";
// id / .title / .price / description / category / .image / rating

export default function ItemCard({ item }) {
    let fixedPrice = item.price.toFixed(2);
    let priceString = fixedPrice.toString();
    let priceSplit = priceString.split(".");
    // console.log(item);
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
            <div className={styles.addDiv}></div>
        </div>
    );
}

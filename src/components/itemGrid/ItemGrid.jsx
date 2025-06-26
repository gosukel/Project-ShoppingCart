import { useState } from "react";
import styles from "./ItemGrid.module.css";
import ItemCard from "../itemCard/ItemCard";

export default function ItemGrid({ items, addToCart }) {
    const [showMore, setShowMore] = useState(false);
    let firstItems = items.slice(0, 8);
    if (!showMore) {
        return (
            <>
                <div className={styles.itemGrid}>
                    {firstItems.map((item, idx) => {
                        return (
                            <ItemCard
                                item={item}
                                addToCart={addToCart}
                                key={idx}
                            />
                        );
                    })}
                </div>
                <button
                    onClick={() => setShowMore(true)}
                    className={styles.showBtn}
                >
                    Show More
                </button>
            </>
        );
    }
    return (
        <div className={styles.itemGrid}>
            {items.map((item, idx) => {
                return <ItemCard item={item} key={idx} addToCart={addToCart} />;
            })}
        </div>
    );
}

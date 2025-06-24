import styles from "./HomePage.module.css";
export default function HomePage() {
    return (
        <div className={styles.background}>
            <div className={styles.blurFilter}>
                <h1 className={styles.titleText}>Welcome</h1>
                <button className={styles.btn}>Enter Shop</button>
            </div>
        </div>
    );
}

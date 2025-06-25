import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
export default function HomePage() {
    return (
        <div className={styles.background}>
            <div className={styles.blurFilter}>
                <h1 className={styles.titleText}>Welcome</h1>
                <Link className={styles.btn} to="/shop">
                    Enter Shop
                </Link>
            </div>
        </div>
    );
}

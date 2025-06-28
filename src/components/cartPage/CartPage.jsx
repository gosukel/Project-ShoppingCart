import styles from "./CartPage.module.css";
import CartItem from "../cartItem/CartItem";
import CartHeader from "../cartHeader/CartHeader";
import CartFooter from "../cartFooter/CartFooter";
import CartSummary from "../cartSummary/CartSummary";
import { useOutletContext } from "react-router-dom";
import { getSubTotal } from "../../utils/utilities";

export default function CartPage() {
    const { cartItems, cartQty } = useOutletContext();
    let subtotal = getSubTotal(cartItems);

    return (
        <div className={styles.cartPageBody}>
            <div className={styles.cartDetails}>
                <CartHeader />
                {cartItems.length > 0 &&
                    cartItems.map((item) => {
                        return <CartItem item={item} key={item.id} />;
                    })}
                <CartFooter cartQty={cartQty} subtotal={subtotal} />
            </div>
            <CartSummary cartQty={cartQty} subtotal={subtotal} />
        </div>
    );
}

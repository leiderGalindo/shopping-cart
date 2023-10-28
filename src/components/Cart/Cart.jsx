import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "../Icons";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";
import ItemCart from "./ItemCart";

const Cart = () => {
    const cartCheckboxId = useId()
    const { cart, clearCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                <ul>
                    {
                        cart.map(itemCart => (
                            <ItemCart key={itemCart.id} product={itemCart} />
                        ))
                    }
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}

export default Cart
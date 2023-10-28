import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
    const { cart, addToCart, clearCart, removeFromCart } = useContext(CartContext)

    return {
        cart,
        addToCart,
        removeFromCart,
        clearCart
    }
}
import { useReducer } from 'react'
import { cartReducer, cartInitialState, CART_ACTIONS } from "../reducers/cart";

const useCartReducer = () => {
    const [ state, dispatch ] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => dispatch({
        type: CART_ACTIONS.ADD_TO_CART,
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: CART_ACTIONS.REMOVE_FROM_CART,
        payload: product
    })

    const clearCart = () => dispatch({
        type: CART_ACTIONS.CLEAR_CART
    })

    return {
        state,
        addToCart,
        removeFromCart,
        clearCart,
    }
}

export default useCartReducer
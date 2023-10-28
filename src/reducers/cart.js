export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

// update localStorage with state for cart
const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}

export const CART_ACTIONS = {
    ADD_TO_CART : 'ADD_TO_CART',
    REMOVE_FROM_CART : 'REMOVE_FROM_CART',
    CLEAR_CART : 'CLEAR_CART',
}

const ACTIONS_REDUCER = {
    [CART_ACTIONS.ADD_TO_CART]: (state, action) => {
        const { payload: actionPayload } = action
        const { id } = actionPayload
        const productInCartIndex = state.findIndex(item => item.id === id)

        if(productInCartIndex >= 0){
            // 👀 una forma serua ysando structuredClone
            // const newState = structuredClone(state)
            // newState[productInCartIndex].quantity += 1

            //⚡ Usando el spread operator y slice
            const newState = [
                ...state.slice(0, productInCartIndex),
                {...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1},
                ...state.slice(productInCartIndex + 1)
            ]

            updateLocalStorage(newState)
            return newState
        }

        const newState = [
            ...state,
            {
                ...actionPayload,
                quantity: 1
            }
        ]

        updateLocalStorage(newState)
        return newState
    },
    [CART_ACTIONS.REMOVE_FROM_CART]: (state, action) => {
        const { payload: actionPayload } = action
        const { id } = actionPayload
        const newState = state.filter(item => item.id !== id)

        updateLocalStorage(newState)
        return newState
    },
    [CART_ACTIONS.CLEAR_CART]: (state, action) => {
        updateLocalStorage([])
        return []
    }
}

export const cartReducer = (state, action) => {
    const actionReducer = ACTIONS_REDUCER[action.type]
    return actionReducer ? actionReducer(state, action) : state
}
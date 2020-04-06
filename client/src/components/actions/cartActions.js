import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY } from './action-types/cart-actions'

export const addToCart = (id) => {
    // on successful axios call add to cart
    return {
        type: ADD_TO_CART,
        id
    }
}

export const removeItem = (id) => {
    // on successful axios call add to cart
    return {
        type: REMOVE_ITEM,
        id
    }
}

export const addQuantity = (id) => {
    // on successful axios call add to cart
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const subtractQuantity = (id) => {
    // on successful axios call add to cart
    return {
        type: SUB_QUANTITY,
        id
    }
}
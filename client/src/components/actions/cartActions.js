import { GET_CART, ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY } from './action-types/cart-actions'
export const getCartData = () => {
    //On successful axios call get cart data
    return {
        type: GET_CART,
        // data
    }

}
export const addToCart = (id) => {
    // on successful axios call add to cart
    return {
        type: ADD_ITEM,
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

export const subtractQuantity = (id) => {
    // on successful axios call add to cart
    return {
        type: SUB_QUANTITY,
        id
    }
}
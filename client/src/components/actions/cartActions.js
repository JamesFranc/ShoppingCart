import { ADD_TO_CART } from './action-types/cart-actions'

export const addToCart = (id) => {
    // on successful axios call add to cart
    return {
        type: ADD_TO_CART,
        id
    }
}
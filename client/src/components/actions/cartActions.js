import { GET_CART, ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY } from './action-types/cart-actions'
import axios from 'axios';

export const getItems = () => {
    //On successful axios call get cart data
        return dispatch => {
        axios
            .get('/cart')
            .then(res => {
                console.log(res);
                // dispatch(getItemsSuccess(res.data));
                dispatch({
                    type: GET_CART,
                    items: res.data.data
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}
export const getItemsSuccess = catalog => ({
    type: GET_CART,
    items: {...catalog}
}) 
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
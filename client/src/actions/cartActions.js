import { GET_CART, GET_CATALOG, ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY } from './action-types/cart-actions'
import axios from 'axios';

export const getCatalog = () => {
    //On successful axios call get catalog items
        return dispatch => {
        axios
            .get('/catalog')
            .then(res => {
                dispatch({
                    type: GET_CATALOG,
                    items: res.data.data
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}

export const getCart = () => {
    //On successful axios call get items in cart
        return dispatch => {
        axios
            .get('/cart')
            .then(res => {
                dispatch({
                    type: GET_CART,
                    itemsInCart: res.data.data
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}

export const addToCart = (id) => {
    // Adding an item not currently in the cart
    return dispatch => {
        axios
            .post('/cart', {id: id})
            .then(res => {
                dispatch({
                    type: ADD_ITEM,
                    id
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}

export const removeItem = (id) => {
    // Removing an item in the cart
    return dispatch => {
        axios
            .put('/cart', {id: id, quantity: 0, status: 'cleared'})
            .then(res => {
                dispatch({
                    type: REMOVE_ITEM,
                    id
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}

export const subtractQuantity = (id, newQuantity) => {
    // Decrementing an item in the cart
    if (newQuantity === 0) {
        return dispatch => {
            axios
                .put('/cart', {id: id, quantity: 0, status: 'cleared'})
                .then(res => {
                    dispatch({
                        type: REMOVE_ITEM,
                        id
                    }) 
                })
                .catch(err => {
                    console.log(err.message)
                })
            }
    } 
    else {
        return dispatch => {
            axios
                .put('/cart', {id: id, quantity: newQuantity, status: 'active'})
                .then(res => {
                    dispatch({
                        type: SUB_QUANTITY,
                        id
                    }) 
                })
                .catch(err => {
                    console.log(err.message)
                })
            }
    }
}

export const addQuantity = (id, newQuantity) => {
    // Incrementing an item in the cart
    return dispatch => {
        axios
            .put('/cart', {id: id, quantity: newQuantity, status:'active'})
            .then(res => {
                dispatch({
                    type: ADD_ITEM,
                    id
                }) 
            })
            .catch(err => {
                console.log(err.message)
            })
        }
}
import Item1 from '../assets/images/image-1.jpg'
import Item2 from '../assets/images/image-2.jpg'
import Item3 from '../assets/images/image-3.jpg'
import { GET_CATALOG, GET_CART, ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY } from '../components/actions/action-types/cart-actions';

const initState = {
    items: [],
    //     { id:2,title:'really big treat', desc:  "How do I eat this faster?", price:3.20, ref: Item2, credit:'Photo by Susan Yin on Unsplash'},
    //     { id:1,title:'big treat', desc:  "OH THIS TREAT IS BIG, AND GOOD", price:2.20, ref: Item1, credit:'Photo by Charles Deluvio on Unsplash'},
    //     { id:3,title:'little treat', desc:  "this treat is kind of small but still good", price:1.20, ref: Item3, credit:'Photo by Masimo Grabar on Unsplash'},
    // ],
    itemsInCart: [],
    total: (0.00).toFixed(2)
}

const cartReducer = (state = initState, action) => {
    // const cartReducer = (state = initState, action) => {
    //     switch (action.type) {
    //         case 'GET_CATALOG': {
    //             mapImageRefToImage(action.items);
    
    //             return {
    //                 ...state,
    //                 items: [...action.items]
    //             }
    //         }
    //         case 'GET_CART': {
    //             let cartTotal = 0.00;
    //             if (action.itemsInCart.length > 0) {
    //                 mapImageRefToImage(action.itemsInCart)
    //                 cartTotal = getCartTotal(action.itemsInCart).toFixed(2);
    //             }
        
    //             return {
    //                 ...state,
    //                 itemsInCart: [...action.itemsInCart],
    //                 total: cartTotal
    //             }
    //         }
    //         case 'ADD_ITEM': {
    //             let addedItem = state.items.find(item => item.item_id === action.id);
    //             let itemInCart = state.itemsInCart.find(item => item.item_id === action.id);
    //             if (itemInCart) {
    //                 let cartItems = state.itemsInCart.map(item => {
    //                     if (item.item_id === itemInCart.item_id) {
    //                         item.quantity +=1;
    //                     }
    //                     return item;
    //                 });
    
    //                 return {
    //                     ...state,
    //                     itemsInCart: cartItems,
    //                     total: (+state.total + +addedItem.price).toFixed(2)
    //                 }
    //             } 
    //             else {
    //                 addedItem.quantity = 1;
    //                 let cartItems = [...state.itemsInCart, addedItem];
    //                 let newTotal = (+state.total + addedItem.price).toFixed(2);
        
    //                 return {
    //                     ...state,
    //                     itemsInCart: cartItems,
    //                     total: (+newTotal).toFixed(2)
    //                 }
    //             }
    //         }
    //         case 'REMOVE_ITEM': {
    //             let itemToRemove = state.itemsInCart.find(item => action.id === item.item_id)
    //             let newItems = state.itemsInCart.filter(item => action.id !== item.item_id)
    //             let newTotal = (+state.total - (itemToRemove.price * itemToRemove.quantity)).toFixed(2);
        
    //             return {
    //                 ...state,
    //                 itemsInCart: newItems,
    //                 total: (+newTotal).toFixed(2)
    //             }
    //         }
    //         case 'SUB_QUANTITY': {
    //             let addedItem = state.items.find(item => item.item_id === action.id) 
    //             if (addedItem.quantity === 1) {
    //                 let newItems = state.itemsInCart.filter(item => item.item_id !== action.id)
    //                 let newTotal = (+state.total - addedItem.price).toFixed(2);
    //                 return {
    //                     ...state,
    //                     itemsInCart: newItems,
    //                     total: (+newTotal).toFixed(2)
    //                 }
    //             }
    //             else {
    //                 let newCartItems = state.itemsInCart.map((item) => {
    //                     if (item.item_id === action.id) {
    //                         item.quantity -= 1;
    //                     }
    //                     return item;
    //                 });
    //                 let newTotal = (+state.total - addedItem.price).toFixed(2);
    //                 return {
    //                     ...state,
    //                     itemsInCart: newCartItems,
    //                     total: (+newTotal).toFixed(2)
    //                 }
    //             }
    //         }
    //         default:
    //             return state
    //     }
    // }
    if (action.type === GET_CATALOG) {
        mapImageRefToImage(action.items);

        return {
            ...state,
            items: [...action.items]
        }
    }
    if (action.type === GET_CART) {
        
        let cartTotal = 0.00;
        if (action.itemsInCart.length > 0) {
            mapImageRefToImage(action.itemsInCart)
            cartTotal = getCartTotal(action.itemsInCart).toFixed(2);
        }

        return {
            ...state,
            itemsInCart: [...action.itemsInCart],
            total: cartTotal
        }
    }
    if (action.type === ADD_ITEM) {
        let addedItem = state.items.find(item => item.item_id === action.id);
        let itemInCart = state.itemsInCart.find(item => action.id === item.item_id);
        if (itemInCart) {
            state.itemsInCart.forEach(item => {
                if (item.item_id === itemInCart.item_id) {
                    item.quantity +=1;
                }
            })
            return {
                ...state,
                itemsInCart: [...state.itemsInCart],
                total: (+state.total + +addedItem.price).toFixed(2)
            }
        } 
        else {
            addedItem.quantity = 1;
            let newTotal = (+state.total + addedItem.price).toFixed(2);

            return {
                ...state,
                itemsInCart: [...state.itemsInCart, addedItem],
                total: (+newTotal).toFixed(2)
            }
        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.itemsInCart.find(item => action.id === item.item_id)
        let newItems = state.itemsInCart.filter(item => action.id !== item.item_id)
        let newTotal = (+state.total - (itemToRemove.price * itemToRemove.quantity)).toFixed(2);

        return {
            ...state,
            itemsInCart: newItems,
            total: (+newTotal).toFixed(2)
        }
    }
    if (action.type === SUB_QUANTITY) {  
        let reducedItem = state.itemsInCart.find(item => item.item_id === action.id) 
        if (reducedItem.quantity === 1) {
            let newItems = state.itemsInCart.filter(item => item.item_id !== action.id)
            let newTotal = (+state.total - reducedItem.price).toFixed(2);
            return {
                ...state,
                itemsInCart: newItems,
                total: (+newTotal).toFixed(2)
            }
        }
        else {
            // let newCartItems = state.itemsInCart.map((item) => {
            //     if (item.item_id === action.id) {
            //         item.quantity -= 1;
            //     }
            //     return item;
            // });
            reducedItem.quantity -= 1
            let newTotal = (+state.total - reducedItem.price).toFixed(2);
            return {
                ...state,
                itemsInCart: [...state.itemsInCart],
                total: (+newTotal).toFixed(2)
            }
        }
    }
        
    return state;
}

const mapImageRefToImage = (items) => {
    items.forEach((item) => {
        if(item.image_ref === 'image-1.jpg') item.image_ref = Item1;
        if(item.image_ref === 'image-2.jpg') item.image_ref = Item2;
        if(item.image_ref === 'image-3.jpg') item.image_ref = Item3;
    });
}

const getCartTotal = (items) => {
    let total = 0;
    items.forEach((item, num) => {
        total += (+item.price * +item.quantity);
    });
    return total;
}

export default cartReducer;
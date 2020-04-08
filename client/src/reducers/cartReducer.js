import Item1 from '../assets/images/image-1.jpg'
import Item2 from '../assets/images/image-2.jpg'
import Item3 from '../assets/images/image-3.jpg'
import { GET_CART, ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY } from '../components/actions/action-types/cart-actions';

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
    if (action.type === GET_CART) {
        action.items.map(item => {
            if(item.image_ref === 'image-1.jpg') item.image_ref = Item1;
            if(item.image_ref === 'image-2.jpg') item.image_ref = Item2;
            if(item.image_ref === 'image-3.jpg') item.image_ref = Item3;
        });
        return {
            ...state,
            items: [...action.items]
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
        
        //calculating the total
        let newTotal = (+state.total - (itemToRemove.price * itemToRemove.quantity)).toFixed(2);
        return {
            ...state,
            itemsInCart: newItems,
            total: (+newTotal).toFixed(2)
        }
    }
    if (action.type === SUB_QUANTITY) {  
        let addedItem = state.items.find(item => item.item_id === action.id) 
        //i f the quantity == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let newItems = state.itemsInCart.filter(item => item.item_id !== action.id)
            let newTotal = (+state.total - addedItem.price).toFixed(2);
            return {
                ...state,
                itemsInCart: newItems,
                total: (+newTotal).toFixed(2)
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = (+state.total - addedItem.price).toFixed(2);
            return {
                ...state,
                total: (+newTotal).toFixed(2)
            }
        }
    }
        
    return state;

}

export default cartReducer;
import { ADD_TO_CART } from '../actions/action-types/cart-actions';

const initState = {
    items: [
        { id:1,title:'REALLY Big Treat', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:3.20, },
        { id:2,title:'Big Treat', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:2.20, },
        { id:3,title:'Little Treat', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:1.20, },
    ],
    addedItems: [],
    total: 0
}

const cartReducer = (state = initState, action) => {
    
    // Inside Home Component
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id);
        let existedItem = state.addedItems.find(item => action.id === item.id);
        if (existedItem) {
            addedItem.quantity += 1;
            
            return {
                ...state,
                total: state.total + addedItem.price
            }
        } 
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price;

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    else { 
        return state;
    }
}

export default cartReducer;
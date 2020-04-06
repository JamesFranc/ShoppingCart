import Item1 from '../../assets/images/image-1.jpg'
import Item2 from '../../assets/images/image-2.jpg'
import Item3 from '../../assets/images/image-3.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY } from '../actions/action-types/cart-actions';

const initState = {
    items: [
        { id:2,title:'really big treat', desc:  "How do I eat this faster?", price:3.20, ref: Item2, credit:'Photo by Susan Yin on Unsplash'},
        { id:1,title:'big treat', desc:  "OH THIS TREAT IS BIG, AND GOOD", price:2.20, ref: Item1, credit:'Photo by Charles Deluvio on Unsplash'},
        { id:3,title:'little treat', desc:  "this treat is kind of small but still good", price:1.20, ref: Item3, credit:'Photo by Masimo Grabar on Unsplash'},
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
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return {
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }
    }
        
    return state;

}

export default cartReducer;
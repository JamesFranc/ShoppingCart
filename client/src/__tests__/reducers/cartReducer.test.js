import cartReducer from '../../reducers/cartReducer.js';
import { GET_CATALOG, GET_CART, ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY } from '../../actions/action-types/cart-actions';
import Item1 from '../../assets/images/image-1.jpg';
import Item2 from '../../assets/images/image-2.jpg';
import Item3 from '../../assets/images/image-3.jpg';
// import { ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY } from '../components/actions/action-types/cart-actions';
// import expect from 'expect';
// import getPostMock from '../../src/mocks/cartMocks';
const initState = {
  items: [],
  itemsInCart: [],
  total: (0.00).toFixed(2)
}
const catalogArray = [
  { item_id:1,title:'big treat', desc:  "OH THIS TREAT IS BIG, AND GOOD", price:2.20, ref: 'image-1.jpg', credit:'Photo by Charles Deluvio on Unsplash'},
  { item_id:2,title:'really big treat', desc:  "How do I eat this faster?", price:3.20, ref: 'image-2.jpg', credit:'Photo by Susan Yin on Unsplash'},
  { item_id:3,title:'little treat', desc:  "this treat is kind of small but still good", price:1.20, ref: 'image-3.jpg', credit:'Photo by Masimo Grabar on Unsplash'}
];
const expectedResponse = {
  items: [
      { item_id:1,title:'big treat', desc:  "OH THIS TREAT IS BIG, AND GOOD", price:2.20, ref: Item1, credit:'Photo by Charles Deluvio on Unsplash'},
      { item_id:2,title:'really big treat', desc:  "How do I eat this faster?", price:3.20, ref: Item2, credit:'Photo by Susan Yin on Unsplash'},
      { item_id:3,title:'little treat', desc:  "this treat is kind of small but still good", price:1.20, ref: Item3, credit:'Photo by Masimo Grabar on Unsplash'}
  ],
  itemsInCart: [{ item_id:1,title:'big treat', desc:  "OH THIS TREAT IS BIG, AND GOOD", price:2.20, ref: Item1, credit:'Photo by Charles Deluvio on Unsplash', quantity:1}],
  total: (2.20).toFixed(2)
};
const testCart = [{ item_id:1,title:'big treat', desc:  "OH THIS TREAT IS BIG, AND GOOD", price:2.20, ref: Item1, credit:'Photo by Charles Deluvio on Unsplash', quantity:1}];

describe('cart reducer', () => {
  it('should return the initial state', () => {
    initState.items = [];
    expect(cartReducer(undefined, {})).toEqual(initState);
  });

  it('should handle GET_CATALOG', () => {
    const testAction = {
      type: GET_CATALOG,
      items: catalogArray
    };
    let expectedResult = {...initState};
    expectedResult.items = [...expectedResponse.items]
    // it's empty on purpose because it's just starting to fetch posts
    expect(cartReducer(initState, testAction)).toEqual(expectedResult);
  });
  it('should handle GET_CART', () => {
    const testAction = {
      type: GET_CART,
      itemsInCart: []
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(cartReducer(initState, testAction)).toEqual(initState);
  });
  it('should handle ADD_ITEM', () => {
    const testAction = {
      type: ADD_ITEM,
      id: 1
    };
    initState.items = catalogArray;
    const expectedTotal = (2.20).toFixed(2);

    expect(cartReducer(initState, testAction).total).toEqual(expectedTotal);
  });

  it('should handle ADD_ITEM already in cart', () => {
    const testAction = {
      type: ADD_ITEM,
      id: 1,
    };
    initState.items = catalogArray;
    initState.total = 2.20;
    initState.itemsInCart = testCart;
    const expectedResult = {
      itemsInCart: [testCart[0]],
      total: (4.40).toFixed(2)
    }
    expectedResult.itemsInCart.quantity = 2;
    const cartReducerResult = cartReducer(initState, testAction);
    
    expect(cartReducerResult.total).toEqual(expectedResult.total);
    expect(cartReducerResult.itemsInCart[0].quantity).toEqual(expectedResult.itemsInCart[0].quantity);
  });

  it('should handle SUB_QUANTITY', () => {
    const testAction = {
      type: SUB_QUANTITY,
      id: 1
    };
    initState.items = catalogArray;
    initState.total = 2.20;
    initState.itemsInCart = [{ item_id:1,title:'big treat', desc:  "OH THIS TREAT IS BIG, AND GOOD", price:2.20, ref: Item1, credit:'Photo by Charles Deluvio on Unsplash', quantity:1}];
    expect(cartReducer(initState, testAction).itemsInCart).toEqual([]);
  });
  it('should handle SUB_QUANTITY already in cart', () => {
    const testAction = {
      type: SUB_QUANTITY,
      id: 1,
    };
    initState.items = catalogArray;
    initState.total = 2.20;
    initState.itemsInCart = testCart;
    initState.itemsInCart[0].quantity = 1;
    const expectedResult = {
      itemsInCart: [],
      total: (0.00).toFixed(2)
    }
    const cartReducerResult = cartReducer(initState, testAction);
    
    expect(cartReducerResult.total).toEqual(expectedResult.total);
    expect(cartReducerResult.itemsInCart.length).toEqual(expectedResult.itemsInCart.length);
  });
  it('should handle REMOVE_ITEM', () => {
    const testAction = {
      type: REMOVE_ITEM,
      id: 1
    };
    initState.items = catalogArray;
    initState.total = 2.20;
    initState.itemsInCart = [{ item_id:1,title:'big treat', desc:  "OH THIS TREAT IS BIG, AND GOOD", price:2.20, ref: Item1, credit:'Photo by Charles Deluvio on Unsplash', quantity:1}];
    expect(cartReducer(initState, testAction).itemsInCart).toEqual([]);
  });
  it('should handle GET_CART: with items in cart response', () => {
    const testAction = {
      type: GET_CART,
      itemsInCart: testCart
    };
    initState.items = catalogArray;
    initState.total = 0.00;
    expect(cartReducer(initState, testAction).itemsInCart).toEqual(testCart);
  });

//   it('should handle GET_POST_FAIL', () => {
//     const failAction = {
//       type: actions.GET_POST_FAIL,
//       error: { success: false },
//     };
//     expect(cartReducer({}, failAction)).toEqual({ error: { success: false } });
//   });
});
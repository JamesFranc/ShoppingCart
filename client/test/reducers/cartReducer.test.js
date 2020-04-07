import cartReducer from '../reducers/cartReducer';
import * as actions from '../components/actions/cartActions';
import { ADD_ITEM, REMOVE_ITEM, SUB_QUANTITY } from '../components/actions/action-types/cart-actions';
import expect from 'expect';
import getPostMock from '../mocks/cartMocks';

describe('cart reducer', () => {
  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual({});
  });

  it('should handle GET_POST_START', () => {
    const startAction = {
      type: actions.GET_POST_START
    };
    // it's empty on purpose because it's just starting to fetch posts
    expect(cartReducer({}, startAction)).toEqual({});
  });

  it('should handle GET_POST_SUCCESS', () => {
    const successAction = {
      type: actions.GET_POST_SUCCESS,
      post: getPostMock.data, // important to pass correct payload, that's what the tests are for ;)
    };
    expect(cartReducer({}, successAction)).toEqual(getPostMock.data);
  });

  it('should handle UPDATE_POST_SUCCESS', () => {
    const updateAction = {
      type: UPDATE_POST_SUCCESS,
      post: getPostMock.data,
    };
    expect(cartReducer({}, updateAction)).toEqual(getPostMock.data);
  });

  it('should handle GET_POST_FAIL', () => {
    const failAction = {
      type: actions.GET_POST_FAIL,
      error: { success: false },
    };
    expect(cartReducer({}, failAction)).toEqual({ error: { success: false } });
  });
});
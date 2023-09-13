import {ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA} from './constants';

const intState = [];

export const cartReducer = (state = intState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    case REMOVE_FROM_CART:
      let result = state.filter(item => {
        return item.name !== action.data;
      });
      return [...result];

    default:
      return state;
  }
};

export const userReducer = (state = intState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return [...state, action.data];

    default:
      return state;
  }
};

import {combineReducers} from 'redux';
import {cartReducer, userReducer} from './reducer';

export default combineReducers({
  cart: cartReducer,
  user: userReducer,
});

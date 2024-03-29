import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailReducer,
} from './reducers/productReduers';
import { cartReducer } from './reducers/cartReducers';

const reducer = combineReducers({
  productList: productListReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
});

// const cartItemsInStorage = localStorage.getItem('cartItems')
//   ? JSON.parse(localStorage.getItem('cartItems'))
//   : [];

const cartItemsInStorage =
  JSON.parse(localStorage.getItem('cartItems')) === null
    ? []
    : JSON.parse(localStorage.getItem('cartItems'));

const initialState = {
  cart: { cartItems: cartItemsInStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

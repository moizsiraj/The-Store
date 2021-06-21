import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartContants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      //gets the product if it already exists in the cart
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        //replacing the already existing product with new entry of the product
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
    default:
      return state;
  }
};

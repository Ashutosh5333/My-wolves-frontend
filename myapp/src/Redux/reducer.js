import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  cartitems:[],
  cartQuantity:0
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };

    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        products: [],
      };
     case types.Cart_PRODUCT_SUCCESS:
      return{
        ...state,
        payload,
      }

    default:
      return state;
  }
};

const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
} = require("../constants/productconstants");

const initialState = {
  loading: true,
  products: [],
  error: null,
};

function productListReducer(state = initialState, action) {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILED:
      return { loading: true, error: action.payload };
    default:
      return state;
  }
}

export { productListReducer };

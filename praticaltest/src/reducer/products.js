// need to import the actions

import  actions  from '../action/constants';

const initialState = {
  products: [
    {
      id: '1a',
      title: 'MacBook Pro',
      value: 2000,
      quantity: 3
    },
    {
      id: '2b',
      title: 'iPad',
      value: 1200,
      quantity: 6
    },
    {
      id: '3c',
      title: 'iPod Classic',
      value: 400,
      quantity: 1
    },
  ],
  loading: false,
  error: false
};

const getProduct = (state, selectedProduct) =>
  state.products.map((product) =>
    (product.id === selectedProduct.id ? { ...product, quantity: product.quantity - 1 } : product));

const products = (state = initialState, action) => {
  
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return {
        ...state,
      }
    case actions.ADD_TO_CART:
      return {
        ...state,
        products: getProduct(state, action.payload)
      }
    default:
      return {
        ...state
      }
  }
}

export default products

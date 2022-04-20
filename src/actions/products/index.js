import getApi from '../../apis';

export const ADD_CART = 'ADD_CART';
export const DELETE_CART = 'DELETE_CARD';
export const GET_PRODUCTS = 'GET_PRODUCTS';


export const fetchProductRequest = () => {
  return (dispatch) => {
    return getApi('https://fakestoreapi.com/products').then(response => {
      dispatch(getProducts(response.data));
    });
  }
}


export const getProducts = (payload) => {
  console.log('action getProducts', payload)
  return {
    type: GET_PRODUCTS,
    payload
  };
};

export const addCart = (item) => {
  console.log('action addCart', item)
  return {
    type: ADD_CART,
    payload: item
  };
};

export const deleteCart = () => {
  return {
    type: DELETE_CART
  };
};
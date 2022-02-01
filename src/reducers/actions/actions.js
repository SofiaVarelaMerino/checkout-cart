import { ADD_PRODUCT, REMOVE_PRODUCT, RESET_PRODUCTS } from './types';

export const addProduct = ({ code, price }) => ({
  type: ADD_PRODUCT,
  code,
  price
});

export const removeProduct = ({ code, price }) => ({
  type: REMOVE_PRODUCT,
  code,
  price
});

export const resetProducts = () => ({
  type: RESET_PRODUCTS,
});

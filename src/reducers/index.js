import { combineReducers } from 'redux';
import product from './product';

const reducer = combineReducers({
  product,
})

/**
 * @description get the cumulative sum of a value from the array entered by by parameter
 * @param {object} array
 * @param {string} value
 */
const getValues = (array, value) => {
  const products = Object.entries(array);
  let result = 0;

  for (const product of products) {
    result += product[1][value];
  };
  return result;
}

/**
 * @description get the total price of the accumulated items
 * @param {object} state
 */
export const getPriceTotalItems = (state) => {
  return getValues(state, 'totalPriceProduct');
}

/**
 * @description get the total amount of accumulated items
 * @param {object} state
 */
export const getItemsQuantity = (state) => {
  return getValues(state, 'quantity');
}

/**
 * @description get the total price of accumulated discounts
 * @param {object} state
 */
const getAllDiscountsPrice = (state) => {
  return getValues(state, 'discountPrice');
}

/**
 * @description get the final cost
 * @param {object} state
 */
export const total = (state) => {
  return getPriceTotalItems(state) - getAllDiscountsPrice(state);
}

export default reducer;

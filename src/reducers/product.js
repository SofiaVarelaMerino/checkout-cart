import { ADD_PRODUCT, REMOVE_PRODUCT, RESET_PRODUCTS } from './actions/types';
import { data, dataDiscount } from './data';

const productInitialState = () => {
  let state = {};
  for (const product of getInitialProducts()) {
    state[product.code] = {
      ...product,
      quantity: 0,
      totalPriceProduct: 0,
      discountPrice: 0
    };
  }
  return state;
};

/**
 * @description Discount rules
 * @param {number} quantity
 * @param {number} price
 * @param {number} oldDiscount
 */
const getDiscountRule = (quantity, price, oldDiscount) => ({
  TWO_FOR_ONE_MUG: {
    value: Math.trunc(quantity / 2) * price,
    condition: true,
  },
  FOR_THREE_TSHIRT: {
    value: quantity === 3 ? ((5 / 100) * price) * 3 : oldDiscount + (5 / 100) * price,
    condition: quantity >= 3
  }
})

/**
 * @description Get all initial products
 */
export const getInitialProducts = () => {
  return data;
};

/**
 * @description Get the discounts of a single product
 * @param {string} code Product code 
 */
export const getDiscountbyCode = (code) => {
  return dataDiscount.filter(discount => discount.codeProduct === code);
}

/**
 * @description get discount if applicable
 * @param {string} code
 * @param {number} quantity
 * @param {number} price
 * @param {number} discountPrice
 */
export const getDiscount = (code, quantity, price, discountPrice) => {
  const discounts = getDiscountbyCode(code);

  for (let discount of discounts) {
    const rule = getDiscountRule(quantity, price, discountPrice)[discount.codeDiscount];
    if (rule.condition) {
      discountPrice = rule.value;
    } else {
      discountPrice = 0;
    }
  }

  return discountPrice;
}

const product = (state = productInitialState(), action) => {
  let value;
  let priceDiscount;

  const setState = (value, price, priceDiscount) => ({
    ...state,
    [action.code]: {
      quantity: value,
      totalPriceProduct: value * price || 0,
      discountPrice: priceDiscount || 0
    }
  });

  switch (action.type) {
    case ADD_PRODUCT:
      value = state[action.code].quantity + 1;
      priceDiscount = getDiscount(action.code, value, action.price, state[action.code].discountPrice);
      return setState(value, action.price, priceDiscount);

    case REMOVE_PRODUCT:
      value = state[action.code].quantity > 0 ? state[action.code].quantity - 1 : state[action.code].quantity;
      priceDiscount = getDiscount(action.code, value, action.price, state[action.code].discountPrice);
      return setState(value, action.price, priceDiscount);

    case RESET_PRODUCTS:
      return state = productInitialState();

    default:
      return state;
  };
};

export default product;

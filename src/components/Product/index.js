import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ProductDetail, Count, Price } from '../'
import { addProduct, removeProduct } from '../../reducers/actions/actions';

export const Product = ({ name, code, codeId, price, currency }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.product);

  return (
    <div className='product row'>
      <ProductDetail {...{ name, code, codeId }} />
      <Count
        value={state[code].quantity}
        onClickLess={() => dispatch(removeProduct({ code, price }))}
        onClickMore={() => dispatch(addProduct({ code, price }))}
      />
      <div className='col-price'>
        <Price value={price} currency={currency} classNameValue='product-price' />
      </div>
      <div className='col-total'>
        <Price value={state[code].totalPriceProduct} currency={currency} classNameValue='product-price' />
      </div>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  codeId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

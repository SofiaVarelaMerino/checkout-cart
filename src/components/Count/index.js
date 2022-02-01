import React from 'react';
import PropTypes from 'prop-types';

export const Count = ({ value, onClickLess, onClickMore }) => {
  return (
    <div className='col-quantity'>
      <button className='count' onClick={onClickLess} >-</button>
      <input className='product-quantity' type='text' value={value} readOnly />
      <button className='count' onClick={onClickMore}>+</button>
    </div>
  );
};

Count.propTypes = {
  value: PropTypes.number.isRequired,
  onClickLess: PropTypes.func.isRequired,
  onClickMore: PropTypes.func.isRequired
};

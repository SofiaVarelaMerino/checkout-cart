import React from 'react';
import PropTypes from 'prop-types';

export const Price = ({ value, currency, classNameValue }) => (
  <span className={classNameValue}>{value}<span className='currency'>{currency}</span></span>
);

Price.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  currency: PropTypes.string.isRequired,
  classNameValue: PropTypes.string
};

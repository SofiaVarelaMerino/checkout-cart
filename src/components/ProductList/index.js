import React from 'react';
import PropTypes from 'prop-types';

export const ProductList = ({ title, children }) => (
  <>
    <ul className='products-list tableHead'>{title}</ul>
    <ul className='products-list'>{children}</ul>
  </>
)

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

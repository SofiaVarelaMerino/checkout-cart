import React from 'react';
import PropTypes from 'prop-types';
import { wordings } from './config/wordings';

export const ProductDetail = (({ codeId, name, code }) => {
  const image = require(`../../img/${code.toLowerCase()}.png`);

  return (
    <div className='col-product'>
      <div className='product-image'>
        <img src={image} alt={name} />
        <div className='product'>
          <h1>{name}</h1>
          <p className='product-code'>{wordings.productCode}{codeId}</p>
        </div>
      </div>
    </div>
  );
});

ProductDetail.propTypes = {
  codeId: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

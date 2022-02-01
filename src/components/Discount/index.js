import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { wordings } from './config/wordings';
import { Price } from '../';

export const Discount = () => {
  const stateDiscountTSHIRT = useSelector(state => state.product.TSHIRT.discountPrice);
  const stateDiscountMUG = useSelector(state => state.product.MUG.discountPrice);

  const renderDiscount = (discount, codeDiscount) => (
    <li>
      <span>{wordings[codeDiscount]}</span>
      <Price value={`-${discount}`} currency="€" />
    </li>
  );

  return (
    <>
      {stateDiscountMUG || stateDiscountTSHIRT ?
        <div className='wrapper-half'>
          <h2>{wordings.title}</h2>
          <ul>
            {stateDiscountMUG > 0 ? renderDiscount(stateDiscountMUG, 'two_for_one_mug') : null}
            {stateDiscountTSHIRT > 0 ? renderDiscount(stateDiscountTSHIRT, 'for_three_tshirt') : null}
          </ul>
        </div>
        : null
      }
    </>
  );
};

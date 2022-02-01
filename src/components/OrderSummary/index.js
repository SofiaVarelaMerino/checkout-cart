import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Title, Price, Discount } from '../';
import { wordings } from './config/wordings';
import { resetProducts } from '../../reducers/actions/actions';
import { getPriceTotalItems, getItemsQuantity, total } from '../../reducers';

export const OrderSummary = () => {
  const state = useSelector(state => state.product);
  const dispatch = useDispatch();

  const priceTotalItems = getPriceTotalItems(state);
  const itemsQuantity = getItemsQuantity(state);
  const totalCost = total(state);

  return (
    <aside className='summary'>
      <Title title={wordings.title} />
      <ul className='wrapper border'>
        <li>
          <span className='summary-items-number'>{itemsQuantity} {wordings.items}</span>
          <Price value={priceTotalItems} currency="€" classNameValue="summary-items-price" />
        </li>
      </ul>
      <Discount />
      <div className='summary-total wrapper'>
        <ul>
          <li>
            <span className="summary-total-cost" >{wordings.total}</span>
            <Price value={totalCost} currency="€" classNameValue="summary-total-price" />
          </li>
        </ul>
        <button type='submit' onClick={() => dispatch(resetProducts())}>{wordings.checkout}</button>
      </div>
    </aside >
  );
};

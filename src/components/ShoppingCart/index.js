import React from 'react';
import { getInitialProducts } from '../../reducers/product';
import { Title, ProductList, Product } from '../';
import { wordings } from './config/wordings';

export const ShoppingCart = () => {
  const products = getInitialProducts();

  const titleList = (
    <li className='products-list-title row'>
      <div className='col-product'>{wordings.detail}</div>
      <div className='col-quantity'>{wordings.quantity}</div>
      <div className='col-price'>{wordings.price}</div>
      <div className='col-total'>{wordings.total}</div>
    </li>
  );

  return (
    <section className='products'>
      <Title title={wordings.title} />
      <ProductList title={titleList}>
        {products.map(product =>
          <Product
            key={product.code}
            {...product} />
        )}
      </ProductList>
    </section>
  )
};

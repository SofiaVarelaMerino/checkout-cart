import React from 'react';
import { ShoppingCart, OrderSummary } from '../../components/index';
import './styles/main.css';

const App = () => {
  return (
    <main className='App'>
      <ShoppingCart />
      <OrderSummary />
    </main>
  )
};

export default App;

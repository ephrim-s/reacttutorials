import React from 'react';
import Greet from './components/Greet';
import ProductInfo from './components/ProductInfo';
import List from './components/topical_components/List1';

const App = () => {
  return (
    <div>
      <Greet />
      <ProductInfo />
      <List />
    </div>
  )
}

export default App;

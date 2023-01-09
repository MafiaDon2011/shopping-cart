import { useState } from 'react';
import Basket from './componets/Basket';
import Header from './componets/Header';
import Main from './componets/Main';
import data from './data';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([])
  return (
    <>
    <div className="App">
      <Header></Header>
      <div className='row'>
        <Main products = {products}></Main>
        <Basket cartItems = {cartItems}></Basket>
      </div>
    </div>
    </>
  );
}

export default App;

import Basket from './componets/Basket';
import Header from './componets/Header';
import Main from './componets/Main';
import data from './data';

function App() {
  const {products} = data;
  return (
    <>
    <div className="App">
      <Header></Header>
      <div className='row'>
        <Main products = {products}></Main>
        <Basket></Basket>
      </div>
    </div>
    </>
  );
}

export default App;

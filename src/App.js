import './App.css';
import Basket from './componets/Basket';
import Header from './componets/Header';
import Main from './componets/Main';

function App() {
  return (
    <>
    <div className="App">
      <Header></Header>
      <div className='row'>
        <Main></Main>
        <Basket></Basket>
      </div>
    </div>
    </>
  );
}

export default App;

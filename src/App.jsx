import { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './components/store';
import { increment, decrement } from './components/actions';
import './App.css';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  return (
    <div className='reduxContainer'>
      <h2 className='reduxTitle'>Contador Actividad Redux</h2>
      <label className='valueText'>Valor: { value } </label>
      <div className='reduxBtnContainer'>
        <button className='decrementBtn' onClick={ () => dispatch(decrement()) }>Decrementar</button>
        <button className='incrementBtn' onClick={ () => dispatch(increment()) }>Incrementar</button>
      </div>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="reactContainer">
        <h2 className='reactTitle'>Contador Actividad React</h2>
        <label className='labelText'> Contador: {count} </label>
        <div className='btnContainer'>
          <button className='btnMinus' onClick={() => setCount((count) => count - 1)}> - </button>
          <button className='btnPlus' onClick={() => setCount((count) => count + 1)}> + </button>
        </div>
      </div>
      <Provider store={ store }>
        <Counter />
      </Provider>
    </>
  );
};

export default App

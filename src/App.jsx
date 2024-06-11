import { Provider } from 'react-redux';
import store from './components/JSFiles/store';
import ReduxCounter from './components/ReduxCounter';
import ReactCounter from './components/ReactCounter';
import './App.css';

function App() {
  return (
    <>
      <ReactCounter/>
      <Provider store={ store }>
        <ReduxCounter />
      </Provider>
    </>
  );
};

export default App

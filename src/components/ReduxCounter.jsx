import {  useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './JSFiles/actions';

const ReduxCounter = () => {
    const dispatch = useDispatch();
    const value = useSelector((state) => state.value);

    return (
        <div className="reduxContainer">
            <h2 className="reduxTitle">Contador Actividad Redux</h2>
            <label className="valueText">Valor: {value} </label>
            <div className="reduxBtnContainer">
                <button className="decrementBtn" onClick={() => dispatch(decrement())}>
                    Decrementar
                </button>
                <button className="incrementBtn" onClick={() => dispatch(increment())}>
                    Incrementar
                </button>
            </div>
        </div>
    );
};

export default ReduxCounter;

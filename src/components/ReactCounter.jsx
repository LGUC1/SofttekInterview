import { useState } from "react";

const ReactCounter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="reactContainer">
            <h2 className='reactTitle'>Contador Actividad React</h2>
            <label className='labelText'> Contador: {count} </label>
            <div className='btnContainer'>
                <button 
                    className='btnMinus' 
                    onClick={() => setCount((count) => count - 1)}
                > - </button>
                <button 
                    className='btnPlus'
                    onClick={() => setCount((count) => count + 1)}
                > + </button>
            </div>
        </div>
    );
};

export default ReactCounter;

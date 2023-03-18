
import React, { useState } from 'react';
import './Content.css'

const Content = () => {

    const [input, setInput] = useState('');

    const handleInput = (event) => {
      setInput(input + event.target.value);
    };
  
    const handleClear = () => {
      setInput('');
    };
  
    const handleCalculate = () => {
      setInput(eval(input).toString());
    };

  return (
    <div>
        <div className="calculator">
      <div className="display">
        <input type="text" name="display" placeholder='Enter value' value={input} readOnly />
      </div>
      <div className="buttons">
        <button className="number" value="7" onClick={handleInput}>
          7
        </button>
        <button className="number" value="8" onClick={handleInput}>
          8
        </button>
        <button className="number" value="9" onClick={handleInput}>
          9
        </button>
        <button className="operator" value="/" onClick={handleInput}>
          /
        </button>
        <button className="number" value="4" onClick={handleInput}>
          4
        </button>
        <button className="number" value="5" onClick={handleInput}>
          5
        </button>
        <button className="number" value="6" onClick={handleInput}>
          6
        </button>
        <button className="operator" value="*" onClick={handleInput}>
          *
        </button>
        <button className="number" value="1" onClick={handleInput}>
          1
        </button>
        <button className="number" value="2" onClick={handleInput}>
          2
        </button>
        <button className="number" value="3" onClick={handleInput}>
          3
        </button>
        <button className="operator" value="-" onClick={handleInput}>
          -
        </button>
        <button className="number" value="0" onClick={handleInput}>
          0
        </button>
        <button className="number" value="." onClick={handleInput}>
          .
        </button>
        <button className="operator" value="+" onClick={handleInput}>
          +
        </button>
        <button className="clear" value="c" onClick={handleClear}>
          C
        </button>
        <button className="equal" value="=" onClick={handleCalculate}>
          =
        </button>
      </div>
    </div>
    </div>
  )
}

export default Content

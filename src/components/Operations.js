


import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculate = () => {
    try {
      const calculatedResult = eval(input).toString();
      setInput(calculatedResult); 
      setResult(calculatedResult); 
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <div className="calculator">
        <div className="display">
          <input className="input-display input-style" type="text" value={input} readOnly />
        
        </div>
        <div className="buttons">
          <div className="number-buttons">
            <button className="button" onClick={() => handleInput('1')}>1</button>
            <button className="button" onClick={() => handleInput('2')}>2</button>
            <button className="button" onClick={() => handleInput('3')}>3</button>
            <button className="button" onClick={() => handleInput('4')}>4</button>
            <button className="button" onClick={() => handleInput('5')}>5</button>
            <button className="button" onClick={() => handleInput('6')}>6</button>
            <button className="button" onClick={() => handleInput('7')}>7</button>
            <button className="button" onClick={() => handleInput('8')}>8</button>
            <button className="button" onClick={() => handleInput('9')}>9</button>
            <button className="button" onClick={() => handleInput('0')}>0</button>
            <button className="button" onClick={() => handleInput('.')}>.</button>
            <button className="button" onClick={() => handleInput('+')}>+</button>
            <button className="button" onClick={() => handleInput('-')}>-</button>
            <button className="button" onClick={() => handleInput('*')}>*</button>
            <button className="button" onClick={() => handleInput('/')}>/</button>
          </div>
          <button className="equal-button base-button" onClick={calculate}>=</button>
          <button className="base-button" onClick={clearInput}>C</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [operator, setOperator] = useState('');
  const [prevInput, setPrevInput] = useState('');

  const handleInput = (e) => {
    setResult('')
    const value = e.target.value;
    setInput(input + value);
  };

  const handleOperator = (e) => {
    const value = e.target.value;
    setOperator(value);
    setPrevInput(result !== '' ? result : input);
    setInput('');
  };

  const handleEqual = () => {
    let result = '';
    switch (operator) {
      case '+':
        result = parseFloat(prevInput) + parseFloat(input);
        break;
      case '-':
        result = parseFloat(prevInput) - parseFloat(input);
        break;
      case '*':
        result = parseFloat(prevInput) * parseFloat(input);
        break;
      case '/':
        result = parseFloat(prevInput) / parseFloat(input);
        break;
      default:
        result = 'Error';
    }
    setResult(result);
    setInput('');
    setPrevInput('');
    setOperator('');
  };

  const handleClear = () => {
    setInput('');
    setResult('');
    setPrevInput('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={result !== '' ? result : input} readOnly />
      </div>
      <div className="keys">
        <button value="7" onClick={handleInput}>7</button>
        <button value="8" onClick={handleInput}>8</button>
        <button value="9" onClick={handleInput}>9</button>
        <button value="/" onClick={handleOperator}>/</button>
        <button value="4" onClick={handleInput}>4</button>
        <button value="5" onClick={handleInput}>5</button>
        <button value="6" onClick={handleInput}>6</button>
        <button value="*" onClick={handleOperator}>*</button>
        <button value="1" onClick={handleInput}>1</button>
        <button value="2" onClick={handleInput}>2</button>
        <button value="3" onClick={handleInput}>3</button>
        <button value="-" onClick={handleOperator}>-</button>
        <button value="0" onClick={handleInput}>0</button>
        <button value="." onClick={handleInput}>.</button>
        <button value="=" onClick={handleEqual}>=</button>
        <button value="+" onClick={handleOperator}>+</button>
        <button value="C" onClick={handleClear}>C</button>
      </div>
    </div>
  );
}

export default App;
"use client";

import { useState } from 'react';

export default function Home() {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [operand, setOperand] = useState(null);

  const MAX_LENGTH = 9;

  const handleNumberClick = (number) => {
    if (waitingForOperand) {
      setDisplayValue(String(number));
      setWaitingForOperand(false);
    } else {
      if (displayValue.length < MAX_LENGTH) {
        setDisplayValue(displayValue === '0' ? String(number) : displayValue + number);
      }
    }
  };

  const handleOperatorClick = (nextOperator) => {
    const inputValue = parseFloat(displayValue);

    if (operand === null) {
      setOperand(inputValue);
    } else if (operator) {
      const currentValue = operand || 0;
      const newValue = performOperation(operator, currentValue, inputValue);

      setOperand(newValue);
      setDisplayValue(String(newValue).slice(0, MAX_LENGTH));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const performOperation = (operator, left, right) => {
    switch (operator) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
      default:
        return right;
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setWaitingForOperand(false);
    setOperand(null);
  };

  const handleToggleSign = () => {
    setDisplayValue((prevValue) => (prevValue.charAt(0) === '-' ? prevValue.substring(1) : '-' + prevValue));
  };

  const handlePercent = () => {
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return;

    setDisplayValue(String(currentValue / 100).slice(0, MAX_LENGTH));
  };

  const handleEqual = () => {
    const inputValue = parseFloat(displayValue);

    if (operator && operand !== null) {
      const currentValue = operand || 0;
      const newValue = performOperation(operator, currentValue, inputValue);

      setDisplayValue(String(newValue).slice(0, MAX_LENGTH));
      setOperand(null);
      setOperator(null);
      setWaitingForOperand(false);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.cdn1.stockunlimited.net/preview1300/galaxy-background-design_2001751.jpg')" }}>
      <div className="flex flex-col rounded-lg overflow-hidden bg-black bg-opacity-50 backdrop-filter backdrop-blur-xl">
        <div className="flex items-center space-x-1 p-3">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <input type="text" value={displayValue} className="text-right text-5xl w-72 bg-transparent text-white px-4 font-light" readOnly />
        <div className="grid grid-cols-4">
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={handleClear}>AC</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={handleToggleSign}>+/-</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={handlePercent}>%</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleOperatorClick('/')}>/</button>

          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleNumberClick(7)}>7</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleNumberClick(8)}>8</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleNumberClick(9)}>9</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleOperatorClick('*')}>*</button>

          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleNumberClick(4)}>4</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleNumberClick(5)}>5</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleNumberClick(6)}>6</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleOperatorClick('-')}>-</button>

          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleNumberClick(1)}>1</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleNumberClick(2)}>2</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleNumberClick(3)}>3</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleOperatorClick('+')}>+</button>

          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={() => handleNumberClick(0)}>0</button>
          <div className="bg-purple-400 bg-opacity-10"></div>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200">,</button>
          <button className="py-5 bg-purple-400 bg-opacity-10 text-white font-bold text-xl focus:outline-none hover:bg-opacity-25 transition-all duration-200" onClick={handleEqual}>=</button>
        </div>
      </div>
    </div>
  );
}

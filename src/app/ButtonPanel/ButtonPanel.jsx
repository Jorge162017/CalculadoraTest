import React from 'react';
import Button from '../Button/Button';

const ButtonPanel = ({ handleNumberClick, handleOperatorClick, handleClear, handleToggleSign, handlePercent, handleEqual }) => (
  <div className="grid grid-cols-4">
    <Button onClick={handleClear}>AC</Button>
    <Button onClick={handleToggleSign}>+/-</Button>
    <Button onClick={handlePercent}>%</Button>
    <Button onClick={() => handleOperatorClick('/')}>/</Button>

    {[7, 8, 9].map(number => (
      <Button key={number} onClick={() => handleNumberClick(number)}>{number}</Button>
    ))}
    <Button onClick={() => handleOperatorClick('*')}>*</Button>

    {[4, 5, 6].map(number => (
      <Button key={number} onClick={() => handleNumberClick(number)}>{number}</Button>
    ))}
    <Button onClick={() => handleOperatorClick('-')}>-</Button>

    {[1, 2, 3].map(number => (
      <Button key={number} onClick={() => handleNumberClick(number)}>{number}</Button>
    ))}
    <Button onClick={() => handleOperatorClick('+')}>+</Button>

    <Button className="col-span-2" onClick={() => handleNumberClick(0)}>0</Button>
    <Button onClick={() => handleNumberClick('.')}>.</Button>
    <Button onClick={handleEqual}>=</Button>
  </div>
);

export default ButtonPanel;

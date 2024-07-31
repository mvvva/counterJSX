import React, { useReducer, useState } from 'react';
import reducer, { initialState, COUNT_TYPES as TYPES } from './../reducer';

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);
  const [color, setColor] = useState("");
  const [background, setBackground] = useState("");

  const handleIncrement = () => {
    dispatch({ type: TYPES.increment, payload: inputValue !== 0 ? inputValue : 1 });
  };

  const handleDecrement = () => {
    dispatch({ type: TYPES.decrement, payload: inputValue !== 0 ? inputValue : 1 });
  };

  const handleReset = () => {
    dispatch({ type: TYPES.reset });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ color: state.color, backgroundColor: state.background }}>
      <h1 className="text-4xl font-bold mb-4">Counter Page</h1>
      <h2 className="text-2xl mb-4">Count: {state.count}</h2>
      <div className="mb-4">
        <input
          type="number"
          className="border rounded p-2 mr-2"
          value={inputValue}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
        />
        <input
          type="text"
          className="border rounded p-2 mr-2"
          placeholder="Text color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            dispatch({ type: TYPES.changeColor, payload: e.target.value });
          }}
        />
        <input
          type="text"
          className="border rounded p-2"
          placeholder="Background color"
          value={background}
          onChange={(e) => {
            setBackground(e.target.value);
            dispatch({ type: TYPES.changeBackground, payload: e.target.value });
          }}
        />
      </div>
      <div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={handleIncrement}>Increment</button>
        <button className="bg-red-500 text-white py-2 px-4 rounded mr-2" onClick={handleDecrement}>Decrement</button>
        <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

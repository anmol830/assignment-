import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [reversed, setReversed] = useState('');

  const reverseString = (str) => {
    return str.split('').reverse().join('');
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setReversed(reverseString(value));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Reverse String App</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Reversed: <strong>{reversed}</strong></p>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function Input(props) {
  const [input, setInput] = useState('');

  function listInput(e) {
    const data = e.target.value;
    setInput(data);
  }

  return (
    <div>
      <input onChange={listInput} value={input} type="text" />
      <button
        onClick={() => {
          props.getInput(input);
          setInput('');
        }}
      >
        <span>Execute</span>
      </button>
    </div>
  );
}

export default Input;

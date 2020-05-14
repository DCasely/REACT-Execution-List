import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [listItems, setListItems] = useState([]);

  function listInput(e) {
    const data = e.target.value;
    setInput(data);
  }

  function addItem() {
    setListItems((item) => [...item, input]);
    setInput('');
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Execution</h1>
      </div>
      <div className="form">
        <input onChange={listInput} value={input} type="text" />
        <button onClick={addItem}>
          <span>Execute</span>
        </button>
      </div>
      <div>
        <ul>
          {listItems.map((listItem) => (
            <li>{listItem}</li>
          ))}
        </ul>
      </div>
      <div className="clear-btn-container">
        <button onClick={addItem}>
          <span>Clear List</span>
        </button>
      </div>
    </div>
  );
}

export default App;

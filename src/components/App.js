import React, { useState } from 'react';
import Heading from './Heading';
import ExecuteItem from './ExecuteItem';

function App() {
  const [input, setInput] = useState('');
  const [listItems, setListItems] = useState([
    'LIST ITEM ONE',
    'LIST ITEM TWO',
    'LIST ITEM THREE',
    'LIST ITEM FOUR',
    'LIST ITEM FIVE',
  ]);

  function listInput(e) {
    const data = e.target.value;
    setInput(data);
  }

  function addItem() {
    if (input !== '') {
      setListItems((item) => [...item, input]);
      setInput('');
    }
  }

  function clearList() {
    setListItems([]);
  }

  return (
    <div className="main-container">
      <div className="container">
        <Heading />
        <div className="form">
          <input onChange={listInput} value={input} type="text" />
          <button onClick={addItem}>
            <span>Enter</span>
          </button>
        </div>
        <div>
          <ul>
            {listItems.map((listItem) => (
              <ExecuteItem execute={listItem} />
            ))}
          </ul>
        </div>
        <div className="clear-btn-container">
          <button onClick={clearList}>
            <span>Clear List</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

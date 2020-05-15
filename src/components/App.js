import React, { useState } from 'react';
import Heading from './Heading';
import ExecuteItem from './ExecuteItem';

function App() {
  const [input, setInput] = useState('');
  const [listItems, setListItems] = useState([
    '*** DRUCKERS KEYS TO EFFECTIVENESS *** ',
    'What needs to be done?',
    'What is right for the enterprise?',
    'Develop Action Plans',
    'Focus on Opportunities rather than problems',
    "Think 'WE' rather than 'I'",
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

  function deleteItem(id) {
    setListItems((prevItems) => {
      return prevItems.filter((items, index) => index !== id);
    });
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
            {listItems.map((listItem, index) => (
              <ExecuteItem
                key={index}
                id={index}
                execute={listItem}
                onExecuted={deleteItem}
              />
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

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
  const [mouseOn, setMouseOn] = useState(false);

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

  function highlightButton() {
    setMouseOn((state) => !state);
  }
  function unHighlightButton() {
    setMouseOn((state) => !state);
  }

  function clearList() {
    setListItems([]);
  }

  function highlight() {
    return mouseOn ? 'delete-btn highlight-btn' : 'delete-btn unhightlight-btn';
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
                onMouseOver={highlightButton}
                onMouseOut={unHighlightButton}
                execute={listItem}
                onExecuted={deleteItem}
                highlightBtn={highlight}
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

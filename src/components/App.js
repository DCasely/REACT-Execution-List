import React, { useState } from 'react';
import Heading from './Heading';
import Input from './Input';
import ExecuteItem from './ExecuteItem';
import ClearList from './ClearList';

function App() {
  const [listItems, setListItems] = useState([]);

  function addItem(input) {
    if (input !== '') {
      setListItems((item) => [...item, input]);
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

  function loadDrucker() {
    setListItems([
      '*** DRUCKERS KEYS TO EFFECTIVENESS *** ',
      'What needs to be done?',
      'What is right for the enterprise?',
      'Develop Action Plans',
      'Focus on Opportunities rather than problems',
      "Think 'WE' rather than 'I'",
    ]);
  }

  return (
    <div className="main-container">
      <div className="container">
        <Heading />
        <div className="form">
          <Input getInput={addItem} />
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
        <ClearList clearList={clearList} loadDrucker={loadDrucker} />
      </div>
    </div>
  );
}

export default App;

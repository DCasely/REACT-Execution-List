import React from 'react';

function ClearList(props) {
  return (
    <div className="clear-btn-container">
      <button onClick={props.clearList}>
        <span>Clear List</span>
      </button>
      <button onClick={props.loadDrucker}>
        <span>Drucker Rules</span>
      </button>
    </div>
  );
}

export default ClearList;

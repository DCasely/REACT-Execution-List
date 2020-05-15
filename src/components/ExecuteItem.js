import React, { useState } from 'react';

function ExecuteItem(props) {
  const [mouseOn, setMouseOn] = useState(false);

  function highlightButton() {
    setMouseOn((state) => !state);
  }

  function unHighlightButton() {
    setMouseOn((state) => !state);
  }

  return (
    <li
      onClick={() => {
        props.onExecuted(props.id);
      }}
      onMouseOver={highlightButton}
      onMouseLeave={unHighlightButton}
    >
      <button
        className={
          mouseOn ? 'delete-btn highlight-btn' : 'delete-btn unhightlight-btn'
        }
      ></button>
      {props.execute}
    </li>
  );
}

export default ExecuteItem;

import React from 'react';

function ExecuteItem(props) {
  return (
    <li
      onClick={() => {
        props.onExecuted(props.id);
      }}
      onMouseOver={props.onMouseOver}
      onMouseOut={props.onMouseOut}
    >
      <button className={props.highlightBtn()}></button>
      {props.execute}
    </li>
  );
}

export default ExecuteItem;

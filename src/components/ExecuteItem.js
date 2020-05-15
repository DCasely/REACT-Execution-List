import React, { useState } from 'react';

function ExecuteItem(props) {
  const [execute, setExecute] = useState(false);

  function done() {
    return execute ? setExecute(false) : setExecute(true);
  }

  return (
    <li onClick={done} className={execute ? 'list-strikethrough' : null}>
      <button
        onClick={done}
        className={execute ? '  delete-button' : 'delete-btn'}
      ></button>
      {props.execute}
    </li>
  );
}

export default ExecuteItem;

import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext';

function Produto() {

    const global = useContext(GlobalContext);
    console.log(global);

    function handleClick() {
      global.setCount(last => last + 1);
    }

  return (
    <div>
        <h1>{global.name}</h1>
        <h4>Produto: {global.count}</h4>
        <button onClick={handleClick}>Count</button>
        <button onClick={() => global.countPlusOne()}>Count Context</button>
    </div>
  )
}

export default Produto
import React from 'react'
import { number } from 'yup';

function Header({number, increment}) {
    console.log("Header component Re-rendered");
  return (
    <div>
      Header - {number}
      <br/>

      <button onClick={increment}>Click</button>
    </div>
  )
}

export default React.memo(Header);

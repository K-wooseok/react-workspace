import React, { useState } from "react";

function input() {
    const [number, setNumber] = useState(0);

    const someFunction = () => {
        console.log(`someFunction의 number: ${number}`);
        return;
    }
  return (
    <div>
      <input type="number" value={0}></input>
    </div>
  );
}

export default input;

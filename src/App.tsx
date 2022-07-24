import React from 'react';
import Bag from './components/Bag/Bag';
import {useState} from "react";

function App() {
  const [buttonPopUp,setButtonPopUp] = useState(false);
  
  return (
    <div className="App">
        <button onClick={() => setButtonPopUp(true)}>Mochila</button>
        <Bag trigger={buttonPopUp} setTrigger={setButtonPopUp}>
        </Bag>
    </div>
  );
}

export default App;

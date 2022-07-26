import React, { Component, useEffect, useState  } from "react";
import PauseMenu from './components/PauseMenu';
import './styles/App.sass'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  useEffect(()=> {
    document.addEventListener('keydown',  detectKeyDown, true)
  }, [])

  const detectKeyDown = (e: any) => {
    
    if(e.key === 'p' && showMenu === false){
      setShowMenu(showMenu => showMenu = true)
    }
    else if(e.key === 'p' && showMenu === true){
      setShowMenu(showMenu =>  showMenu = false)
    }
  }

  const pauseMenuDiv: JSX.Element = showMenu ? (
    <PauseMenu/>
  ): (<div></div>)

  return (
    <div className="App">
      {pauseMenuDiv}
    </div>
  );
};



export default App;

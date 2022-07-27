import React, { Component, useEffect, useState  } from "react";
import '../styles/PauseMenu.sass'
import Play from '../assets/play.svg'
import Music from '../assets/music.svg'
import Restart from '../assets/restart.svg'

export default function PauseMenu() {

  const [showMenu, setShowMenu] = useState(false)
  useEffect(()=> {
    document.addEventListener('keydown',  detectKeyDown, true)
  }, [])

  const detectKeyDown = (e: any) => {
    
    if(e.key === 'p' && showMenu === false){
      setShowMenu(prevShowMenu => !prevShowMenu)
    }
 
  }

  const pauseMenuDiv: JSX.Element = showMenu ? (
    <div>
      <div className='containerMenu'></div>
      <div className="PauseBox">
        <div className="iconMusic">
        <img src={Music} alt="music" />
        </div>
        <div className="iconRestart"> 
        <img src={Restart} alt="restart" />
        </div>
        <div className="iconPlay"> 
        <img src={Play} alt="play" />
        </div>
        <div className="title"> 
          Pause 
        </div>
      </div>
    </div>
  ): (<div></div>)

  return (
    <div>
      {pauseMenuDiv}
    </div>
    
  );
}
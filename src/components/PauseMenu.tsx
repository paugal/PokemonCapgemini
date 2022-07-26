import React from 'react'
import '../styles/PauseMenu.sass'

export default function pauseMenu() {
  return (
    <div>
      <div className='containerMenu'></div>
      <div className="PauseBox">
        <div className="iconMusic">
          <button>Music</button>
        </div>
        <div className="iconRestart"> 
        <button>Restart</button>
        </div>
        <div className="iconPlay"> 
        <button>Play</button>
        </div>
        <div className="title"> 
          Pause 
        </div>
      </div>
    </div>
  );
}
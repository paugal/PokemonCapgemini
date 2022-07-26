import React from 'react'
import '../styles/PauseMenu.sass'
import Play from '../assets/play.svg'
import Music from '../assets/music.svg'
import Restart from '../assets/restart.svg'

export default function pauseMenu() {
  return (
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
  );
}
import React, { useState, useEffect, useRef } from 'react'
import { PLAYER_HEIGHT, PLAYER_WIDTH, GAME_HEIGHT, GAME_WIDTH } from "../data/constants"
import styled from 'styled-components'

export default function Player() {

  const [playerPosition, setPlayerPosition] = useState<{ x: number; y: number }>({ x: GAME_WIDTH / 2, y: GAME_HEIGHT / 2 })
  const steps = useRef(0)

  console.log("renderiza el PLAYER")

  const detectKeyDown = (e: any) => {
    console.log('Clicked Key: ', e.key)

    switch (e.key) {
      case 'ArrowLeft':
        console.log("pulsamos izquierda");
        setPlayerPosition(prevPosition => { return { ...prevPosition, x: prevPosition.x > 0 ? prevPosition.x - 10 : 0 } })
        break;
      case 'ArrowRight':
        console.log("pulsamos derecha");
        setPlayerPosition(prevPosition =>
          ({ ...prevPosition, x: prevPosition.x < GAME_WIDTH - PLAYER_WIDTH ? prevPosition.x + 10 : GAME_WIDTH - PLAYER_WIDTH })
        )

        break;
      case 'ArrowUp':
        console.log("pulsamos arriba");
        setPlayerPosition(prevPosition =>
          ({ ...prevPosition, y: prevPosition.y > 0 ? prevPosition.y - 10 : 0 })
        )
        break;
      case 'ArrowDown':
        console.log("pulsamos abajo");
        setPlayerPosition(prevPosition => { return { ...prevPosition, y: prevPosition.y < GAME_HEIGHT - PLAYER_HEIGHT ? prevPosition.y + 10 : GAME_HEIGHT - PLAYER_HEIGHT } }
        )
        break;
    }

  }
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])


  useEffect(() => {
    steps.current = steps.current + 1
  }, [playerPosition])

  return (
    <>
      <PlayerStyle height={PLAYER_HEIGHT} width={PLAYER_WIDTH} top={playerPosition.y} left={playerPosition.x}></PlayerStyle>
      <div>Steps :{steps.current}</div>
    </>

  )
}

type PlayerStyleProps = {
  height: number;
  width: number;
  top: number;
  left: number
}

export const PlayerStyle = styled.div<PlayerStyleProps>`
  position: absolute;
  background-color: red;
  border-radius:50%;  
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px; 
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
`;

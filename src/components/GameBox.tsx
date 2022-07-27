import React from 'react'
import '../styles/GameBox.sass'
import Player from './Player'
import styled from 'styled-components'
import {GAME_HEIGHT, GAME_WIDTH } from "../data/constants"

export default function GameBox() {
  return (
    <>
      <GameBoxStyle height={GAME_HEIGHT} width={GAME_WIDTH}>
        <Player/>
      </GameBoxStyle>
    </>
  )
}

type GameBoxStyleProps = {
  height: number;
  width: number;
}

export const GameBoxStyle = styled.div<GameBoxStyleProps>`
  background-color: #1DB92B ;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
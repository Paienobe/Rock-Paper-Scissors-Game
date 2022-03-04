import React from 'react'
import { useGlobalContext } from '../context'

export const Paperbutton = () => {
  const { playGame } = useGlobalContext()
  return (
    <button className='sign-btn paper-btn' id='paper' onClick={playGame}>
      <div className='inner' id='paper'></div>
    </button>
  )
}

export const Scissorsbutton = () => {
  const { playGame } = useGlobalContext()
  return (
    <button className='sign-btn scissors-btn' id='scissors' onClick={playGame}>
      <div className='inner' id='scissors'></div>
    </button>
  )
}

export const Rockbutton = () => {
  const { playGame } = useGlobalContext()
  return (
    <button className='sign-btn rock-btn' id='rock' onClick={playGame}>
      <div className='inner' id='rock'></div>
    </button>
  )
}

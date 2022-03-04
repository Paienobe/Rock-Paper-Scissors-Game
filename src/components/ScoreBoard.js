import React from 'react'
import { useGlobalContext } from '../context'

const ScoreBoard = () => {
  const { score } = useGlobalContext()
  return (
    <div className='score-board'>
      <div className='game-name'>
        <h3>ROCK</h3>
        <h3>PAPER</h3>
        <h3>SCISSORS</h3>
      </div>

      <div className='score-card'>
        <h5>score</h5>
        <h1 className='score-text'>{score}</h1>
      </div>
    </div>
  )
}

export default ScoreBoard

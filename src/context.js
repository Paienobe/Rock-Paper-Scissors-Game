import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [showRules, setShowRules] = useState(false)
  const [score, setScore] = useState(0)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [isWin, setIsWin] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [matchChoices, setMatchChoices] = useState([])

  const appBackground = {
    background:
      'linear-gradient(to bottom ,hsl(214, 47%, 23%),hsl(237, 49%, 15%))',
  }

  const playGame = (e) => {
    const playerChoice = e.target.id
    const gameChoices = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * gameChoices.length)
    const houseChoice = gameChoices[randomIndex]
    const selectedChoices = [playerChoice, houseChoice]
    setHasPlayed(true)

    if (playerChoice === 'rock' && houseChoice === 'scissors') {
      playerWonGame(selectedChoices)
    } else if (playerChoice === 'rock' && houseChoice === 'paper') {
      playerLostGame(selectedChoices)
    } else if (playerChoice === 'paper' && houseChoice === 'scissors') {
      playerLostGame(selectedChoices)
    } else if (playerChoice === 'paper' && houseChoice === 'rock') {
      playerWonGame(selectedChoices)
    } else if (playerChoice === 'scissors' && houseChoice === 'paper') {
      playerWonGame(selectedChoices)
    } else if (playerChoice === 'scissors' && houseChoice === 'rock') {
      playerLostGame(selectedChoices)
    } else if (playerChoice === houseChoice) {
      playerDrewMatch(selectedChoices)
    }
  }

  const openRules = () => {
    setShowRules(true)
  }

  const closeRules = () => {
    setShowRules(false)
  }

  const playAgain = () => {
    setHasPlayed(false)
  }

  const playerWonGame = (picks) => {
    setMatchChoices(picks)
    setIsWin(true)
    setScore(score + 1)
    setIsDraw(false)
  }

  const playerLostGame = (picks) => {
    setMatchChoices(picks)
    setIsWin(false)
    if (score !== 0) {
      setScore(score - 1)
    }
    setIsDraw(false)
  }

  const playerDrewMatch = (picks) => {
    setMatchChoices(picks)
    setIsDraw(true)
  }

  return (
    <AppContext.Provider
      value={{
        appBackground,
        showRules,
        score,
        hasPlayed,
        isWin,
        isDraw,
        matchChoices,
        playGame,
        playAgain,
        openRules,
        closeRules,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

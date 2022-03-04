import ScoreBoard from './components/ScoreBoard'
import Rules from './components/Rules'
import { useGlobalContext } from './context'

// import buttons
import { Rockbutton, Scissorsbutton, Paperbutton } from './components/buttons'

function App() {
  const {
    appBackground,
    openRules,
    hasPlayed,
    playAgain,
    isWin,
    isDraw,
    matchChoices,
  } = useGlobalContext()

  return (
    <main style={appBackground}>
      <div className='main-content'>
        <ScoreBoard />

        {!hasPlayed ? (
          <div className='game-area'>
            <Paperbutton />
            <Scissorsbutton />
            <Rockbutton />
          </div>
        ) : (
          <div className='picked-choices'>
            <div className='choices'>
              {matchChoices.map((pick, index) => {
                return (
                  <div className='holder' key={index}>
                    <button
                      className={`sign-btn ${pick}-btn choice-btn ${
                        index === 0 ? 'user-pick' : ''
                      }`}
                      id={pick}
                    >
                      <div className='inner'></div>
                    </button>
                    {index === 0 ? (
                      <h4 className='match-picks'>YOU PICKED</h4>
                    ) : (
                      <h4 className='match-picks'>THE HOUSE PICKED</h4>
                    )}
                  </div>
                )
              })}
            </div>
            <div className='resume-game'>
              {!isDraw ? (
                <h1 className='decision'>{isWin ? 'YOU WIN' : 'YOU LOSE'}</h1>
              ) : (
                <h1 className='decision'>DRAW</h1>
              )}
              <button className='play-again' onClick={playAgain}>
                PLAY AGAIN
              </button>
            </div>
          </div>
        )}
        <button className='rules-btn' onClick={openRules}>
          RULES
        </button>
        <Rules />
      </div>
    </main>
  )
}

export default App

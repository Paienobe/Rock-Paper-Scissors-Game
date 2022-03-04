import React from 'react'
import { useGlobalContext } from '../context'

const Rules = () => {
  const { closeRules, showRules } = useGlobalContext()
  return (
    <article className={`${showRules ? 'rules show-rule' : 'rules'}`}>
      <div className='rules-content'>
        <h1>RULES</h1>
        <button className='close-btn' onClick={closeRules}></button>
      </div>
    </article>
  )
}

export default Rules

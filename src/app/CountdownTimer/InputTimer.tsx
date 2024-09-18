import React from 'react'

const InputTimer = ({ handleInput, handleStart }) => {
  return (
      <div className='input-container'>
          <div className='input-box'>
              <input id="hours"
                  onChange={handleInput}
                  placeholder='HH' />
              <input id="minutes"
                  onChange={handleInput}
                  placeholder='MM' />
              <input id="seconds"
                  onChange={handleInput}
                  placeholder='SS' />
          </div>
          <button
              onClick={handleStart}
              className='timer-button'> Start</button>
      </div>
  )
}

export default InputTimer
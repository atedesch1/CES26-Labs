import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import './Calculator.css'

const Calculator = () => {
  const [display, setDisplay] = useState('0')

  const handleClick = (e) => {
    if (display === '0' || display === 'Error') {
      setDisplay(e.target.name)
    } else {
      setDisplay(display.concat(e.target.name))
    }
  }

  const clear = () => {
    setDisplay('0')
  }

  const backspace = () => {
    if (display.length === 1 || display === 'Error') {
      clear()
    } else {
      setDisplay(display.slice(0, -1))
    }
  }

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setDisplay(eval(display).toString())
    } catch (_) {
      setDisplay('Error')
    }
  }

  return (
    <div className="container">
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={clear}>Clear</button>
          <button onClick={backspace}>C</button>
          <button name="%" onClick={handleClick}>
            %
          </button>
          <button name="/" onClick={handleClick}>
            /
          </button>
        </div>
        <div className="row">
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick}>
            *
          </button>
        </div>
        <div className="row">
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick}>
            -
          </button>
        </div>
        <div className="row">
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick}>
            +
          </button>
        </div>
        <div className="row">
          <button name="0" className="grow" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator

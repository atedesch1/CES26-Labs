import React from 'react'
import { connect, useDispatch } from 'react-redux'
import * as actions from './CalculatorActions'
import './Calculator.css'

const Calculator = ({ expression }) => {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(actions.addSymbol(e.target.name))
  }

  const clear = () => {
    dispatch(actions.clearDisplay())
  }

  const backspace = () => {
    dispatch(actions.removeSymbol())
  }

  const calculate = () => {
    dispatch(actions.calculate())
  }

  return (
    <div className="container">
      <div className="display">{expression}</div>
      <div className="buttons">
        <div className="row">
          <button className="accent-pink" onClick={clear}>
            Clear
          </button>
          <button className="accent-pink" onClick={backspace}>
            C
          </button>
          <button name="%" className="accent-pink" onClick={handleClick}>
            %
          </button>
          <button name="/" className="accent-pink" onClick={handleClick}>
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
          <button name="*" className="accent-pink" onClick={handleClick}>
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
          <button name="-" className="accent-pink" onClick={handleClick}>
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
          <button name="+" className="accent-pink" onClick={handleClick}>
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
          <button className="accent-green" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expression: state.expression,
  }
}

export default connect(mapStateToProps)(Calculator)

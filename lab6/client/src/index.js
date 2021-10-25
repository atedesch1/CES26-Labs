import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Calculator from './components/Calculator/Calculator'

import './index.css'

const addSymbol = (symbol) => {
  return {
    type: 'ADD_SYMBOL_ACTION',
    payload: symbol,
  }
}

const removeSymbol = () => {
  return {
    type: 'REMOVE_SYMBOL_ACTION',
  }
}

const clearDisplay = () => {
  return {
    type: 'CLEAR_DISPLAY_ACTION',
  }
}

const calculate = () => {
  return {
    type: 'CALCULATE_ACTION',
  }
}

const initialState = {
  expression: '0',
}

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SYMBOL_ACTION':
      return {
        ...state,
        expression: state.expression.concat(action.payload),
      }
      break
    case 'REMOVE_SYMBOL_ACTION':
      if (state.expression.length === 1 || state.expression === 'Error') {
        return {
          ...state,
          expression: '0',
        }
      } else {
        return {
          ...state,
          expression: state.expression.slice(0, -1),
        }
      }
      break
    case 'CLEAR_DISPLAY_ACTION':
      return {
        ...state,
        expression: '0',
      }
      break
    case 'CALCULATE_ACTION':
      try {
        const evaluation = eval(state.expression).toString()
        return {
          ...state,
          expression: evaluation,
        }
      } catch (_) {
        return {
          ...state,
          expression: 'Error',
        }
      }
      break

    default:
      return state
      break
  }
}

const store = createStore(calculatorReducer)

render(
  <Provider store={store}>
    <Calculator></Calculator>
  </Provider>,
  document.getElementById('root')
)

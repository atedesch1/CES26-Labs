import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import calculatorReducer from './components/Calculator/CalculatorReducer'
import Calculator from './components/Calculator/Calculator'

import './index.css'

const store = createStore(calculatorReducer)

render(
  <Provider store={store}>
    <Calculator></Calculator>
  </Provider>,
  document.getElementById('root')
)

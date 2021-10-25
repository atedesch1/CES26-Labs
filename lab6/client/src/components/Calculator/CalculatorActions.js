export const ADD_SYMBOL_ACTION = 'ADD_SYMBOL_ACTION'
export const REMOVE_SYMBOL_ACTION = 'REMOVE_SYMBOL_ACTION'
export const CLEAR_DISPLAY_ACTION = 'CLEAR_DISPLAY_ACTION'
export const CALCULATE_ACTION = 'CALCULATE_ACTION'

export const addSymbol = (symbol) => {
  return {
    type: ADD_SYMBOL_ACTION,
    payload: symbol,
  }
}

export const removeSymbol = () => {
  return {
    type: REMOVE_SYMBOL_ACTION,
  }
}

export const clearDisplay = () => {
  return {
    type: CLEAR_DISPLAY_ACTION,
  }
}

export const calculate = () => {
  return {
    type: CALCULATE_ACTION,
  }
}

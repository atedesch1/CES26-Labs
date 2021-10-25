import * as actions from './CalculatorActions'

export const initialState = {
  expression: '0',
}

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_SYMBOL_ACTION:
      if (state.expression === '0' || state.expression === 'Error') {
        return {
          ...state,
          expression: action.payload,
        }
      }
      return {
        ...state,
        expression: state.expression.concat(action.payload),
      }

    case actions.REMOVE_SYMBOL_ACTION:
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

    case actions.CLEAR_DISPLAY_ACTION:
      return {
        ...state,
        expression: '0',
      }

    case actions.CALCULATE_ACTION:
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

    default:
      return state
  }
}

export default calculatorReducer

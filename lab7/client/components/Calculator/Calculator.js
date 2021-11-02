import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import * as actions from './CalculatorActions'

const Calculator = ({ expression }) => {
  const dispatch = useDispatch()

  const handleClick = (value) => {
    dispatch(actions.addSymbol(value))
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
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.expressionText}>{expression}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableHighlight
            style={[styles.button, styles.accentPink]}
            onPress={clear}
          >
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPink]}
            onPress={backspace}
          >
            <Text style={styles.buttonText}>C</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPink]}
            onPress={() => handleClick('%')}
          >
            <Text style={styles.buttonText}>%</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPink]}
            onPress={() => handleClick('/')}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            style={[styles.button, styles.accentPurple]}
            onPress={() => handleClick('7')}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPurple]}
            onPress={() => handleClick('8')}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPurple]}
            onPress={() => handleClick('9')}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPink]}
            onPress={() => handleClick('*')}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            style={[styles.button, styles.accentPurple]}
            onPress={() => handleClick('4')}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPurple]}
            onPress={() => handleClick('5')}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPurple]}
            onPress={() => handleClick('6')}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPink]}
            onPress={() => handleClick('-')}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            style={[styles.button, styles.accentPurple]}
            onPress={() => handleClick('1')}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPurple]}
            onPress={() => handleClick('2')}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPurple]}
            onPress={() => handleClick('3')}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, styles.accentPink]}
            onPress={() => handleClick('+')}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.row}>
          <TouchableHighlight
            style={[styles.button, { flex: 2 / 4 }, styles.accentPurple]}
            onPress={() => handleClick('0')}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, { flex: 1 / 4 }, styles.accentPurple]}
            onPress={() => handleClick('.')}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.button, { flex: 1 / 4 }, styles.accentGreen]}
            onPress={calculate}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#383a59',
    padding: 10,
  },
  display: {
    flex: 1 / 4,
    alignItems: 'flex-end',
  },
  expressionText: {
    textAlign: 'right',
    fontSize: 50,
    color: '#fff',
  },
  buttons: {
    flex: 3 / 4,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  accentPink: {
    backgroundColor: '#ff79c6',
  },
  accentPurple: {
    backgroundColor: '#bd93f9',
  },
  accentGreen: {
    backgroundColor: '#50fa7b',
  },
})

const mapStateToProps = (state) => {
  return {
    expression: state.expression,
  }
}

export default connect(mapStateToProps)(Calculator)

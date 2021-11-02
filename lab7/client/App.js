import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import calculatorReducer from './components/Calculator/CalculatorReducer'
import Calculator from './components/Calculator/Calculator'
import { SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native'

export default function App() {
  const store = createStore(calculatorReducer)
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Calculator></Calculator>
      </SafeAreaView>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
})

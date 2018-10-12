// @flow
import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
  },
  buttonText: {
    alignSelf: 'stretch',
    padding: 10,
    textAlign: 'center',
  },
})

type Props = {
  handleClick: Function,
  children: React.Node,
}

const Button = (props: Props) => {
  const { button, buttonText } = styles
  const { handleClick, children } = props
  return (
    <TouchableOpacity onPress={handleClick} style={button}>
      <Text style={buttonText}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button

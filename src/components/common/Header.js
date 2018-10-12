// @flow
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

type Props = {
  title: string,
}

const Header = (props: Props) => {
  const { textStyle, container } = styles
  return (
    <View style={container}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  container: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
})

export default Header

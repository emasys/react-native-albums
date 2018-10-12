/**
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import Header from './src/components/common/Header'
import Albums from './src/components/album/container/Albums'

type Props = {}
export default class App extends Component<Props> {
  componentDidMount() {
    //
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Albums!" />
        <Albums />
      </View>
    )
  }
}

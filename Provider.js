// @flow
import React from 'react'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'

export default (): React.Node => (
  <Provider store={store}>
    <App />
  </Provider>
)

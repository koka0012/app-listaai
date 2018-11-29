import React from 'react'
import Navigation from './Navigation'
import { Provider } from 'react-native-paper'
import theme from './theme'

export default class Root extends React.Component {
  public render() {
    return (
      <Provider theme={theme}>
        <Navigation />
      </Provider>
    )
  }
}

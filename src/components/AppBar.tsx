import React from 'react'
import { Appbar, Text } from 'react-native-paper'
import { HeaderProps } from 'react-navigation'
import { View } from 'react-native'

export default class AppBar extends React.Component<HeaderProps> {
  public _renderHeaderTitle(Header: any) {
    if (!Header) {
      return
    }

    return (
      <View
        style={{
          height: 56,
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'flex-start',
        }}
      >
        {Header}
      </View>
    )
  }
  public render() {
    const options = this.props.scene.descriptor.options
    const routeName = this.props.scene.route.routeName
    const title = options.title || routeName
    const headerTitle = options.headerTitle || false

    return (
      <Appbar.Header>
        {this._renderHeaderTitle(headerTitle) || (
          <Appbar.Content title={title} />
        )}
      </Appbar.Header>
    )
  }
}

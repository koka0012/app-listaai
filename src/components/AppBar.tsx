import React from 'react'
import { Appbar } from 'react-native-paper'
import { HeaderProps } from 'react-navigation'

export default class AppBar extends React.Component<HeaderProps> {
  public render() {
    const options = this.props.scene.descriptor.options
    const routeName = this.props.scene.route.routeName
    const title = options.title || routeName
    const headerTitle = options.headerTitle || false

    return (
      <Appbar.Header>
        {headerTitle ? headerTitle : <Appbar.Content title={title} />}
      </Appbar.Header>
    )
  }
}

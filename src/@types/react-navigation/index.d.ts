import * as reactnavigaiton from 'react-navigation'
import React from 'react'
import { FlatListProps } from 'react-native'

declare module 'react-navigation' {
  export function createAppContainer(
    container: NavigationContainer
  ): NavigationContainer

  export class FlatList<ItemT> extends React.Component<FlatListProps<ItemT>> {}
}
